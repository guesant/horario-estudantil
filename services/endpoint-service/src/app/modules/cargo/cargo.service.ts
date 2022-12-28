import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ResourceActionRequest } from '../../../infrastructure/auth/interfaces/ResourceActionRequest';
import { subject } from '@casl/ability';
import { FindOneOptions } from 'typeorm';
import {
  IAddPermissaoToCargoInput,
  ICreateCargoInput,
  IDeleteCargoInput,
  IFindCargoByIdInput,
  IRemovePermissaoToCargoInput,
  IUpdateCargoInput,
} from '@horario-estudantil/schemas';
import { REPOSITORY_CARGO } from '../../../infrastructure/database/constants/REPOSITORY_CARGO';
import { ICargoRepository } from '../../repositories/cargo.repository';
import { CargoDbEntity } from '../../entities/cargo.db.entity';
import { PermissaoDbEntity } from '../../entities/permissao.db.entity';
import { REPOSITORY_PERMISSAO } from '../../../infrastructure/database/constants/REPOSITORY_PERMISSAO';
import { IPermissaoRepository } from '../../repositories/permissao.repository';
import { REPOSITORY_CARGO_HAS_PERMISSAO } from '../../../infrastructure/database/constants/REPOSITORY_CARGO_HAS_PERMISSAO';
import { ICargoHasPermissaoRepository } from '../../repositories/cargo-has-permissao.repository';
import { PermissaoService } from '../permissao/permissao.service';
import { omit, pick } from 'lodash';

const pMapModule = import('p-map').then((mod) => mod.default);

@Injectable()
export class CargoService {
  constructor(
    private permissaoService: PermissaoService,
    @Inject(REPOSITORY_CARGO)
    private cargoRepository: ICargoRepository,
    @Inject(REPOSITORY_PERMISSAO)
    private permissaoRepository: IPermissaoRepository,
    @Inject(REPOSITORY_CARGO_HAS_PERMISSAO)
    private cargoHasPermissaoRepository: ICargoHasPermissaoRepository,
  ) {}

  async findCargoById(
    resourceActionRequest: ResourceActionRequest,
    dto: IFindCargoByIdInput,
    options: FindOneOptions<CargoDbEntity> | null = null,
  ) {
    const { id } = dto;

    const targetCargo = await this.cargoRepository.findOne({
      where: { id },
      select: ['id'],
    });

    if (!targetCargo) {
      throw new NotFoundException();
    }

    const cargo = await this.cargoRepository.findOneOrFail({
      where: { id: targetCargo.id },
      select: ['id'],
      ...options,
    });

    return resourceActionRequest.readResource('cargo', cargo);
  }

  async findCargoByIdSimple(
    resourceActionRequest: ResourceActionRequest,
    cargoId: number,
  ): Promise<Pick<CargoDbEntity, 'id'>> {
    const cargo = await this.findCargoById(resourceActionRequest, {
      id: cargoId,
    });

    return cargo as Pick<CargoDbEntity, 'id'>;
  }

  async findCargoHasPermissao(
    resourceActionRequest: ResourceActionRequest,
    cargoId: number,
    permissaoId: number,
  ) {
    const cargo = await this.findCargoByIdSimple(
      resourceActionRequest,
      cargoId,
    );

    const permissao = await this.permissaoService.findPermissaoByIdSimple(
      resourceActionRequest,
      permissaoId,
    );

    const cargoHasPermissao = await this.cargoHasPermissaoRepository.findOne({
      where: {
        permissao: { id: permissao.id },
        cargo: { id: cargo.id },
      },
      select: ['id'],
    });

    return cargoHasPermissao;
  }

  async getCargoGenericField<K extends keyof CargoDbEntity>(
    resourceActionRequest: ResourceActionRequest,
    cargoId: number,
    field: K,
  ): Promise<CargoDbEntity[K]> {
    const cargo = await this.findCargoById(
      resourceActionRequest,
      { id: cargoId },
      { select: ['id', field] },
    );

    resourceActionRequest.ensurePermission(
      'read',
      subject('cargo', cargo),
      field,
    );

    return <CargoDbEntity[K]>cargo[field];
  }

  async getCargoPermissoes(
    resourceActionRequest: ResourceActionRequest,
    cargoId: number,
  ): Promise<PermissaoDbEntity[]> {
    const cargo = await this.findCargoByIdSimple(
      resourceActionRequest,
      cargoId,
    );

    const permissoes = await this.permissaoRepository
      .createQueryBuilder('permissao')
      .innerJoin(
        'permissao.relationsCargoHasPermissao',
        'cargo_has_permissao',
        'cargo_has_permissao.id_per_fk = permissao.id',
      )
      .innerJoin(
        'cargo_has_permissao.cargo',
        'cargo',
        'cargo_has_permissao.id_car_fk = cargo.id',
      )
      .select(['permissao.id', 'cargo.id', 'cargo_has_permissao.id'])
      .where('cargo.id = :cargoId', { cargoId: cargo.id })
      .getMany();

    return permissoes;
  }

  async getCargoReceitas(
    resourceActionRequest: ResourceActionRequest,
    cargoId: number,
  ): Promise<string[]> {
    const cargo = await this.findCargoByIdSimple(
      resourceActionRequest,
      cargoId,
    );

    const permissoes = await this.getCargoPermissoes(
      resourceActionRequest,
      cargo.id,
    );

    const pMap = await pMapModule;

    const receitas: string[] = await pMap(
      permissoes,
      (permissao) =>
        this.permissaoService.getPermissaoReceita(
          resourceActionRequest,
          permissao.id,
        ),
      { concurrency: 2 },
    );

    return receitas;
  }

  async createCargo(
    resourceActionRequest: ResourceActionRequest,
    dto: ICreateCargoInput,
  ) {
    const fieldsData = pick(dto, []);

    const cargo = resourceActionRequest.updateResource(
      'cargo',
      <CargoDbEntity>{},
      fieldsData,
      'create',
    );

    resourceActionRequest.ensurePermission('create', subject('cargo', cargo));

    await this.cargoRepository.save(cargo);

    return this.findCargoByIdSimple(resourceActionRequest, cargo.id);
  }

  async updateCargo(
    resourceActionRequest: ResourceActionRequest,
    dto: IUpdateCargoInput,
  ) {
    const { id } = dto;

    const cargo = await this.findCargoByIdSimple(resourceActionRequest, id);

    const fieldsData = omit(dto, ['id']);

    const updatedCargo = resourceActionRequest.updateResource(
      'cargo',
      <CargoDbEntity>cargo,
      fieldsData,
    );

    resourceActionRequest.ensurePermission('update', subject('cargo', cargo));

    await this.cargoRepository.save(updatedCargo);

    return this.findCargoByIdSimple(resourceActionRequest, cargo.id);
  }

  async deleteCargo(
    resourceActionRequest: ResourceActionRequest,
    dto: IDeleteCargoInput,
  ) {
    const { id } = dto;

    const cargo = await this.findCargoByIdSimple(resourceActionRequest, id);

    resourceActionRequest.ensurePermission('delete', subject('cargo', cargo));

    await this.cargoRepository.delete(<number>cargo.id);

    return true;
  }

  async addPermissao(
    resourceActionRequest: ResourceActionRequest,
    dto: IAddPermissaoToCargoInput,
  ) {
    const { cargoId, permissaoId } = dto;

    const cargo = await this.findCargoByIdSimple(
      resourceActionRequest,
      cargoId,
    );

    const permissao = await this.permissaoService.findPermissaoByIdSimple(
      resourceActionRequest,
      permissaoId,
    );

    const cargoHasPermissaoAlreadyExists = await this.findCargoHasPermissao(
      resourceActionRequest,
      cargo.id,
      permissao.id,
    );

    if (cargoHasPermissaoAlreadyExists) {
      return true;
    }

    const cargoHasPermissao = this.cargoHasPermissaoRepository.create();
    cargoHasPermissao.cargo = <CargoDbEntity>{ id: cargo.id };
    cargoHasPermissao.permissao = <PermissaoDbEntity>{ id: permissao.id };
    await this.cargoHasPermissaoRepository.save(cargoHasPermissao);

    return true;
  }

  async removePermissao(
    resourceActionRequest: ResourceActionRequest,
    dto: IRemovePermissaoToCargoInput,
  ) {
    const { cargoId, permissaoId } = dto;

    const cargo = await this.findCargoByIdSimple(
      resourceActionRequest,
      cargoId,
    );

    const permissao = await this.permissaoService.findPermissaoByIdSimple(
      resourceActionRequest,
      permissaoId,
    );

    const cargoHasPermissalAlreadyExists = await this.findCargoHasPermissao(
      resourceActionRequest,
      cargo.id,
      permissao.id,
    );

    if (!cargoHasPermissalAlreadyExists) {
      return true;
    }

    await this.cargoHasPermissaoRepository.delete({
      cargo: { id: cargo.id },
      permissao: { id: permissao.id },
    });

    return true;
  }
}

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUsuarioRepository } from '../../repositories/usuario.repository';
import { REPOSITORY_USUARIO } from '../../../infrastructure/database/constants/REPOSITORY_USUARIO';
import {
  ICreateUsuarioInput,
  IDeleteUsuarioInput,
  IFindUsuarioByIdInput,
  IUpdateUsuarioInput,
  RegraBruta,
} from '@horario-estudantil/schemas';
import { ResourceActionRequest } from '../../../infrastructure/auth/interfaces/ResourceActionRequest';
import { subject } from '@casl/ability';
import { FindOneOptions } from 'typeorm';
import { UsuarioDbEntity } from '../../entities/usuario.db.entity';
import { REPOSITORY_CARGO } from '../../../infrastructure/database/constants/REPOSITORY_CARGO';
import { ICargoRepository } from '../../repositories/cargo.repository';
import { CargoService } from '../cargo/cargo.service';
import { castArray, get, has, omit, pick } from 'lodash';
import { CargoDbEntity } from '../../entities/cargo.db.entity';
import { UsuarioType } from './usuario.type';

@Injectable()
export class UsuarioService {
  constructor(
    private cargoService: CargoService,
    @Inject(REPOSITORY_CARGO)
    private cargoRepository: ICargoRepository,
    @Inject(REPOSITORY_USUARIO)
    private usuarioRepository: IUsuarioRepository,
  ) {}

  async findUsuarioById(
    resourceActionRequest: ResourceActionRequest,
    dto: IFindUsuarioByIdInput,
    options?: FindOneOptions<UsuarioDbEntity>,
  ) {
    const { id } = dto;

    const targetUsuario = await this.usuarioRepository.findOne({
      where: { id },
      select: ['id'],
    });

    if (!targetUsuario) {
      throw new NotFoundException();
    }

    const usuario = await this.usuarioRepository.findOneOrFail({
      where: { id: targetUsuario.id },
      select: ['id'],
      ...options,
    });

    return resourceActionRequest.readResource('usuario', usuario);
  }

  async findUsuarioByIdSimple(
    resourceActionRequest: ResourceActionRequest,
    usuarioId: number,
  ): Promise<Pick<UsuarioDbEntity, 'id'>> {
    const usuario = await this.findUsuarioById(resourceActionRequest, {
      id: usuarioId,
    });

    return usuario as Pick<UsuarioDbEntity, 'id'>;
  }

  async getUsuarioFromKeycloakId(
    resourceActionRequest: ResourceActionRequest,
    keycloakId: string,
  ) {
    const userExists = await this.usuarioRepository.findOne({
      where: { keycloakId: keycloakId },
      select: ['id'],
    });

    if (userExists) {
      return this.findUsuarioByIdSimple(resourceActionRequest, userExists.id);
    }

    const newUser = this.usuarioRepository.create();
    newUser.keycloakId = keycloakId;
    await this.usuarioRepository.save(newUser);

    return this.findUsuarioByIdSimple(resourceActionRequest, newUser.id);
  }

  async getUsuarioCargo(
    resourceActionRequest: ResourceActionRequest,
    usuarioId: number,
  ) {
    const usuario = await this.findUsuarioByIdSimple(
      resourceActionRequest,
      usuarioId,
    );

    const cargo = await this.cargoRepository
      .createQueryBuilder('cargo')
      .innerJoin('cargo.usuarios', 'usuario')
      .select(['cargo.id', 'usuario.id'])
      .where('usuario.id = :usuarioId', { usuarioId: usuario.id })
      .getOne();

    return (
      cargo &&
      this.cargoService.findCargoByIdSimple(resourceActionRequest, cargo.id)
    );
  }

  async getUsuarioAuthorizationRegras(
    resourceActionRequest: ResourceActionRequest,
    usuarioId: number,
  ): Promise<RegraBruta[]> {
    const usuario = await this.findUsuarioByIdSimple(
      resourceActionRequest,
      usuarioId,
    );

    const cargo = await this.getUsuarioCargo(resourceActionRequest, usuario.id);

    if (cargo) {
      const receitas = await this.cargoService.getCargoReceitas(
        resourceActionRequest,
        cargo.id,
      );

      const regras: RegraBruta[] = receitas
        .map((receita): RegraBruta[] => castArray(JSON.parse(receita)))
        .flat(1);

      return regras;
    }

    return [];
  }

  async createUsuario(
    resourceActionRequest: ResourceActionRequest,
    dto: ICreateUsuarioInput,
  ) {
    const fieldsData = pick(dto, []);

    const usuario = resourceActionRequest.updateResource(
      'usuario',
      <UsuarioDbEntity>{},
      fieldsData,
      'create',
    );

    if (has(dto, 'cargoId')) {
      const cargoId = <number>get(dto, 'cargoId');

      const cargo = await this.cargoService.findCargoByIdSimple(
        resourceActionRequest,
        cargoId,
      );

      usuario.cargo = <CargoDbEntity>{ id: cargo.id };

      resourceActionRequest.ensurePermission(
        'create',
        subject('usuario', usuario),
        'cargo',
      );
    }

    resourceActionRequest.ensurePermission(
      'create',
      subject('usuario', usuario),
    );

    await this.usuarioRepository.save(usuario);

    return this.findUsuarioByIdSimple(resourceActionRequest, usuario.id);
  }

  async updateUsuario(
    resourceActionRequest: ResourceActionRequest,
    dto: IUpdateUsuarioInput,
  ) {
    const { id } = dto;

    const usuario = await this.findUsuarioByIdSimple(resourceActionRequest, id);

    const fieldsData = omit(dto, ['id', 'cargoId']);

    const updatedUsuario = resourceActionRequest.updateResource(
      'usuario',
      <UsuarioDbEntity>usuario,
      fieldsData,
    );

    if (has(dto, 'cargoId')) {
      const cargoId = <number>get(dto, 'cargoId');

      const cargo = await this.cargoService.findCargoByIdSimple(
        resourceActionRequest,
        cargoId,
      );

      updatedUsuario.cargo = <CargoDbEntity>{ id: cargo.id };

      resourceActionRequest.ensurePermission(
        'update',
        subject('usuario', updatedUsuario),
        'cargo',
      );
    }

    resourceActionRequest.ensurePermission(
      'update',
      subject('usuario', updatedUsuario),
    );

    await this.usuarioRepository.save(updatedUsuario);

    return this.findUsuarioByIdSimple(resourceActionRequest, usuario.id);
  }

  async deleteUsuario(
    resourceActionRequest: ResourceActionRequest,
    dto: IDeleteUsuarioInput,
  ) {
    const { id } = dto;

    const usuario = await this.findUsuarioByIdSimple(resourceActionRequest, id);

    resourceActionRequest.ensurePermission(
      'delete',
      subject('usuario', usuario),
    );

    await this.usuarioRepository.delete(<number>usuario.id);

    return true;
  }
}

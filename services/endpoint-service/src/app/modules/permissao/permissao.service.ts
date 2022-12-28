import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORY_PERMISSAO } from '../../../infrastructure/database/constants/REPOSITORY_PERMISSAO';
import { IPermissaoRepository } from '../../repositories/permissao.repository';
import { ResourceActionRequest } from '../../../infrastructure/auth/interfaces/ResourceActionRequest';
import { subject } from '@casl/ability';
import { FindOneOptions } from 'typeorm';
import { PermissaoDbEntity } from '../../entities/permissao.db.entity';
import { PermissaoType } from './permissao.type';
import {
  ICreatePermissaoInput,
  IDeletePermissaoInput,
  IFindPermissaoByIdInput,
  IUpdatePermissaoInput,
} from '@horario-estudantil/schemas';
import { omit, pick } from 'lodash';

@Injectable()
export class PermissaoService {
  constructor(
    @Inject(REPOSITORY_PERMISSAO)
    private permissaoRepository: IPermissaoRepository,
  ) {}

  async findPermissaoById(
    resourceActionRequest: ResourceActionRequest,
    dto: IFindPermissaoByIdInput,
    options: FindOneOptions<PermissaoDbEntity> | null = null,
  ) {
    const { id } = dto;

    const targetPermissao = await this.permissaoRepository.findOne({
      where: { id },
      select: ['id'],
    });

    if (!targetPermissao) {
      throw new NotFoundException();
    }

    const permissao = await this.permissaoRepository.findOneOrFail({
      where: { id: targetPermissao.id },
      select: ['id'],
      ...options,
    });

    resourceActionRequest.ensurePermission(
      'read',
      subject('permissao', permissao),
    );

    return resourceActionRequest.readResource('permissao', permissao);
  }

  async findPermissaoByIdSimple(
    resourceActionRequest: ResourceActionRequest,
    permissaoId: number,
  ): Promise<Pick<PermissaoDbEntity, 'id'>> {
    const permissao = await this.findPermissaoById(resourceActionRequest, {
      id: permissaoId,
    });

    return permissao as Pick<PermissaoDbEntity, 'id'>;
  }

  async getPermissaoGenericField<K extends keyof PermissaoDbEntity>(
    resourceActionRequest: ResourceActionRequest,
    permissaoId: number,
    field: K,
  ): Promise<PermissaoDbEntity[K]> {
    const permissao = await this.findPermissaoById(
      resourceActionRequest,
      { id: permissaoId },
      { select: ['id', field] },
    );

    resourceActionRequest.ensurePermission(
      'read',
      subject('permissao', permissao),
      field,
    );

    return <PermissaoDbEntity[K]>permissao[field];
  }

  async getPermissaoReceita(
    resourceActionRequest: ResourceActionRequest,
    permissaoId: number,
  ): Promise<PermissaoType['receita']> {
    const receita = await this.getPermissaoGenericField(
      resourceActionRequest,
      permissaoId,
      'receita',
    );

    return receita;
  }

  async createPermissao(
    resourceActionRequest: ResourceActionRequest,
    dto: ICreatePermissaoInput,
  ) {
    const fieldsData = pick(dto, ['receita']);

    const permissao = resourceActionRequest.updateResource(
      'permissao',
      <PermissaoDbEntity>{},
      fieldsData,
      'create',
    );

    resourceActionRequest.ensurePermission(
      'create',
      subject('permissao', permissao),
    );

    await this.permissaoRepository.save(permissao);

    return this.findPermissaoByIdSimple(resourceActionRequest, permissao.id);
  }

  async updatePermissao(
    resourceActionRequest: ResourceActionRequest,
    dto: IUpdatePermissaoInput,
  ) {
    const { id } = dto;

    const permissao = await this.findPermissaoByIdSimple(
      resourceActionRequest,
      id,
    );

    const fieldsData = omit(dto, ['id']);

    const updatedPermissao = resourceActionRequest.updateResource(
      'permissao',
      <PermissaoDbEntity>permissao,
      fieldsData,
    );

    resourceActionRequest.ensurePermission(
      'update',
      subject('permissao', permissao),
    );

    await this.permissaoRepository.save(updatedPermissao);

    return this.findPermissaoByIdSimple(resourceActionRequest, permissao.id);
  }

  async deletePermissao(
    resourceActionRequest: ResourceActionRequest,
    dto: IDeletePermissaoInput,
  ) {
    const { id } = dto;

    const permissao = await this.findPermissaoByIdSimple(
      resourceActionRequest,
      id,
    );

    resourceActionRequest.ensurePermission(
      'delete',
      subject('permissao', permissao),
    );

    await this.permissaoRepository.delete(<number>permissao.id);

    return true;
  }
}

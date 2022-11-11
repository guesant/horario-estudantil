import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP } from 'src/infraestructure/constants';
import { FindOneOptions } from 'typeorm';
import { UnidadeEstudantilMembershipEntity } from '../entities/unidade-estudantil-membership.entity';
import { IUnidadeEstudantilMembershipRepository } from '../repositories/unidade-estudantil-membership.repository';

export type IFindUnidadeEstudantilMembershipQuery = Partial<
  Pick<UnidadeEstudantilMembershipEntity, 'id'>
>;

@Injectable()
export class UnidadeEstudantilMembershipService {
  constructor(
    @Inject(REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP)
    private unidadeEstudantilMembershipRepository: IUnidadeEstudantilMembershipRepository,
  ) {}

  async findUnidadeEstudantilMembership(
    query: IFindUnidadeEstudantilMembershipQuery,
    options?: FindOneOptions<UnidadeEstudantilMembershipEntity>,
  ) {
    const { id } = query;

    const unidadeEstudantilMembership =
      await this.unidadeEstudantilMembershipRepository.findOne({
        where: { id },
        ...options,
      });

    if (!unidadeEstudantilMembership) {
      throw new NotFoundException('Unidade Estudantil Membership not found');
    }

    return unidadeEstudantilMembership;
  }

  async findUnidadeEstudantilMembershipUsuario(
    query: IFindUnidadeEstudantilMembershipQuery,
  ) {
    const unidadeEstudantilMembership =
      await this.findUnidadeEstudantilMembership(query, {
        relations: ['usuario'],
      });

    const { usuario } = unidadeEstudantilMembership;

    return usuario;
  }

  async findUnidadeEstudantilMembershipUnidadeEstudantil(
    query: IFindUnidadeEstudantilMembershipQuery,
  ) {
    const unidadeEstudantilMembership =
      await this.findUnidadeEstudantilMembership(query, {
        relations: ['unidadeEstudantil'],
      });

    const { unidadeEstudantil } = unidadeEstudantilMembership;

    return unidadeEstudantil;
  }
}

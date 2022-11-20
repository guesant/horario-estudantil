import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORY_INSTITUICAO_MEMBERSHIP } from 'src/infraestructure/constants';
import { FindOneOptions } from 'typeorm';
import { InstituicaoMembershipEntity } from '../entities/instituicao-membership.entity';
import { IInstituicaoMembershipRepository } from '../repositories/instituicao-membership.repository';

export type IFindInstituicaoMembershipQuery = Partial<
  Pick<InstituicaoMembershipEntity, 'id'>
>;

@Injectable()
export class InstituicaoMembershipService {
  constructor(
    @Inject(REPOSITORY_INSTITUICAO_MEMBERSHIP)
    private instituicaoMembershipRepository: IInstituicaoMembershipRepository,
  ) {}

  async findInstituicaoMembership(
    query: IFindInstituicaoMembershipQuery,
    options?: FindOneOptions<InstituicaoMembershipEntity>,
  ) {
    const { id } = query;

    const instituicaoMembership =
      await this.instituicaoMembershipRepository.findOne({
        where: { id },
        ...options,
      });

    if (!instituicaoMembership) {
      throw new NotFoundException();
    }

    return instituicaoMembership;
  }

  async findInstituicaoMembershipUsuario(
    query: IFindInstituicaoMembershipQuery,
  ) {
    const instituicaoMembership = await this.findInstituicaoMembership(query, {
      relations: ['usuario'],
    });

    const { usuario } = instituicaoMembership;

    return usuario;
  }

  async findInstituicaoMembershipInstituicao(
    query: IFindInstituicaoMembershipQuery,
  ) {
    const instituicaoMembership = await this.findInstituicaoMembership(
      query,
      {
        relations: ['instituicao'],
      },
    );

    const { instituicao } = instituicaoMembership;

    return instituicao;
  }
}

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../app/entities/user.entity';
import { IInstituicaoMembershipRepository } from '../app/repositories/instituicao-membership.repository';
import { IUsuarioRepository } from '../app/repositories/usuario.repository';
import {
  REPOSITORY_INSTITUICAO_MEMBERSHIP,
  REPOSITORY_USUARIO,
} from '../database/constants/REPOSITORIES';
import { getEntityRef } from '../utils/getEntityRef';

export type IFindUsuarioQuery = Partial<Pick<UserEntity, 'id'>>;

@Injectable()
export class UserService {
  constructor(
    @Inject(REPOSITORY_USUARIO)
    private usuarioRepository: IUsuarioRepository,
    @Inject(REPOSITORY_INSTITUICAO_MEMBERSHIP)
    private instituicaoembershipRepository: IInstituicaoMembershipRepository,
  ) {}

  async ensureIncomingUserFromKeycloak(keycloakId: string) {
    const userExists = await this.usuarioRepository.findOne({
      where: { keycloakId },
    });

    if (userExists) {
      return userExists;
    }

    const newUser = this.usuarioRepository.create();
    newUser.keycloakId = keycloakId;
    await this.usuarioRepository.save(newUser);

    return newUser;
  }

  async findUsuario(query: IFindUsuarioQuery) {
    const { id } = query;

    const usuario = await this.usuarioRepository.findOne({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException();
    }

    return usuario;
  }

  async findUsuarioMemberships(query: IFindUsuarioQuery) {
    const usuario = await this.findUsuario(query);

    const memberships = await this.instituicaoembershipRepository.find({
      where: { usuario: getEntityRef(usuario) },
    });

    return memberships;
  }
}

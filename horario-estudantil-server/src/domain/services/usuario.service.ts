import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP,
  REPOSITORY_USUARIO,
} from 'src/infraestructure/constants';
import { UsuarioEntity } from '../entities/usuario.entity';
import { IUnidadeEstudantilMembershipRepository } from '../repositories/unidade-estudantil-membership.repository';
import { IUsuarioRepository } from '../repositories/usuario.repository';

export type IFindUsuarioQuery = Partial<Pick<UsuarioEntity, 'id'>>;

@Injectable()
export class UsuarioService {
  constructor(
    @Inject(REPOSITORY_USUARIO)
    private usuarioRepository: IUsuarioRepository,

    @Inject(REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP)
    private unidadeEstudantilMembershipRepository: IUnidadeEstudantilMembershipRepository,
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
      throw new NotFoundException('Usuário not found');
    }

    return usuario;
  }

  async findUsuarioMemberships(query: IFindUsuarioQuery) {
    const usuario = await this.findUsuario(query);

    const memberships = await this.unidadeEstudantilMembershipRepository.find({
      where: { usuario },
    });

    return memberships;
  }
}
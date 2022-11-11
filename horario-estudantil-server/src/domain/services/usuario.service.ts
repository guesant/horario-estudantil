import { Inject, Injectable } from '@nestjs/common';
import { REPOSITORY_USUARIO } from 'src/infraestructure/constants';
import { IUsuarioRepository } from '../repositories/usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject(REPOSITORY_USUARIO)
    private usuarioRepository: IUsuarioRepository,
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
}

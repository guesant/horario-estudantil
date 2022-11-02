import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'openid-client';
import {
  IS_PRODUCTION_MODE,
  OPENID_CLIENT,
} from '../../infraestructure/constants';
import { UsuarioService } from './usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,

    @Inject(OPENID_CLIENT)
    private openIDClient: Client,
  ) {}

  async validateAccessToken(access_token?: string | any) {
    try {
      if (typeof access_token !== 'string' || access_token?.length === 0) {
        throw new TypeError();
      }

      const userinfo = await this.openIDClient.userinfo(access_token);

      const user = await this.usuarioService.ensureIncomingUserFromKeycloak(
        userinfo.sub,
      );

      const requestUser = {
        userinfo,
        id: user.id,
      };

      return requestUser;
    } catch (err) {
      if (!IS_PRODUCTION_MODE) {
        console.error('auth err:', { err });
      }
    }

    return false;
  }
}

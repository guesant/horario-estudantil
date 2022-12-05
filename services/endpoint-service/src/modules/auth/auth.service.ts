import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'openid-client';
import { UserService } from '../user/user.service';
import { IS_PRODUCTION_MODE, OPENID_CLIENT } from '../constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    @Inject(OPENID_CLIENT)
    private openIDClient: Client,
  ) {}

  async validateAccessToken(access_token?: string | any) {
    try {
      if (typeof access_token !== 'string' || access_token?.length === 0) {
        throw new TypeError();
      }

      const userinfo = await this.openIDClient.userinfo(access_token);

      const user = await this.userService.ensureIncomingUserFromKeycloak(
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

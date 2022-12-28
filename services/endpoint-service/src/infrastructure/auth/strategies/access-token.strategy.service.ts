import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';
import { AuthService } from '../auth.service';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  'access-token',
) {
  constructor(readonly authService: AuthService) {
    super();
  }

  async validate(accessToken?: string) {
    const user = await this.authService.validateAccessToken(accessToken);

    if (!user) {
      throw new UnauthorizedException();
    }

    const resourceActionRequest =
      await this.authService.getUsuarioResourceActionRequest(user.id);

    return resourceActionRequest;
  }
}

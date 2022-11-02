import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';
import { AuthService } from '../../domain/services/auth.service';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  'access-token',
) {
  constructor(readonly authService: AuthService) {
    super();
  }

  async validate(access_token?: string) {
    const user = await this.authService.validateAccessToken(access_token);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}

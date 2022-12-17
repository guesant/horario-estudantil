import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenStrategy } from './strategies/access-token.strategy.service';
import { AuthenticatedGuard } from './guards/authenticated-guard.service';
import { SessionSerializer } from './serializers/session.serializer';
import { UserModule } from '../app/modules/user/user.module';
import { AuthService } from './auth.service';
import { oidcClientProviders } from './providers/oidc-client.providers';

@Module({
  imports: [
    UserModule,
    PassportModule.register({
      // session: false,
      defaultStrategy: 'access-token',
    }),
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthenticatedGuard,
    },
    SessionSerializer,
    AccessTokenStrategy,
    ...oidcClientProviders,
  ],
  exports: [...oidcClientProviders, SessionSerializer, AuthService],
})
export class AuthModule {}

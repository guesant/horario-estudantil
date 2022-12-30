import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenStrategy } from './strategies/access-token.strategy.service';
import { AuthenticatedGuard } from './guards/authenticated-guard.service';
import { SessionSerializer } from './serializers/session.serializer';
import { UsuarioModule } from '../../app/modules/usuario/usuario.module';
import { AuthService } from './auth.service';
import { oidcClientProviders } from './providers/oidc-client.providers';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    UsuarioModule,
    PassportModule.register({ defaultStrategy: 'access-token' }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthenticatedGuard,
    },
    SessionSerializer,
    AccessTokenStrategy,
    ...oidcClientProviders,

    AuthService,
    AuthResolver,
  ],
  exports: [...oidcClientProviders, SessionSerializer, AuthService],
})
export class AuthModule {}

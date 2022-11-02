import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../../domain/services/auth.service';
import { AccessTokenStrategy } from '../auth/access-token.strategy.service';
import { AuthenticatedGuard } from '../auth/authenticated-guard.service';
import { SessionSerializer } from '../auth/session.serializer';
import { oidcClientProviders } from '../providers/oidc-client.providers';
import { UsuarioModule } from './usuario.module';

@Module({
  imports: [
    PassportModule.register({
      session: false,
      defaultStrategy: 'access-token',
    }),
    UsuarioModule,
  ],
  providers: [
    AuthService,
    AccessTokenStrategy,
    {
      provide: APP_GUARD,
      useClass: AuthenticatedGuard,
    },
    SessionSerializer,
    ...oidcClientProviders,
  ],
  exports: [...oidcClientProviders, SessionSerializer, AuthService],
})
export class AuthModule {}

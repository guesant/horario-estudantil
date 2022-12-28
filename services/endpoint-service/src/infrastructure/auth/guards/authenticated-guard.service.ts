import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { AuthMode } from '../consts/AuthMode';
import { AUTH_MODE_KEY } from '../consts/AUTH_MODE_KEY.const';

@Injectable()
export class AuthenticatedGuard extends AuthGuard(['access-token']) {
  constructor(private reflector: Reflector) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  async canActivate(context: ExecutionContext): Promise<any> {
    const authMode = this.reflector.getAllAndOverride<AuthMode>(AUTH_MODE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    switch (authMode) {
      case AuthMode.ANONYMOUS: {
        return true;
      }

      case AuthMode.OPTIONAL: {
        const req = this.getRequest(context);

        const hasAuthorizationToken = req.headers.authorization !== undefined;

        if (hasAuthorizationToken) {
          return await Promise.resolve(super.canActivate(context));
        }

        return true;
      }

      case AuthMode.STRICT: {
        return Promise.resolve(super.canActivate(context));
      }
    }
  }
}

import { OPENID_CLIENT } from '../../constants';
import { Provider } from '@nestjs/common';
import { buildOpenIdClient } from '../infrastructure/oidc/oidc-client';

export const OidcClientFactory: Provider = {
  provide: OPENID_CLIENT,

  useFactory: async () => {
    const client = await buildOpenIdClient();
    return client;
  },

  inject: [],
};

export const oidcClientProviders = [OidcClientFactory];

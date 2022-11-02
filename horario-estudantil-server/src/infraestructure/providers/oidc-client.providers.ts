import { OPENID_CLIENT } from '../constants';
import { buildOpenIdClient } from '../auth/oidc-client';
import { Provider } from '@nestjs/common';

export const OidcClientFactory: Provider = {
  provide: OPENID_CLIENT,
  useFactory: async () => {
    const client = await buildOpenIdClient();
    return client;
  },
  inject: [],
};

export const oidcClientProviders = [OidcClientFactory];

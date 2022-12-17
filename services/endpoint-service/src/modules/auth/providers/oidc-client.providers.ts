import { Provider } from '@nestjs/common';
import { buildOpenIdClient } from '../infrastructure/oidc/oidc-client';
import {OPENID_CLIENT} from "../../consts/OPENID_CLIENT.const";

export const OidcClientFactory: Provider = {
  provide: OPENID_CLIENT,

  useFactory: async () => {
    const client = await buildOpenIdClient();
    return client;
  },

  inject: [],
};

export const oidcClientProviders = [OidcClientFactory];

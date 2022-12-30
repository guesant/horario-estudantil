import { Client } from 'openid-client';
import { buildOpenIdClient } from './buildOpenIdClient';

let _cachedClient: Promise<Client> | null;

export const getOpenIDClient = () => {
  if (!_cachedClient) {
    _cachedClient = buildOpenIdClient();
  }

  return _cachedClient;
};

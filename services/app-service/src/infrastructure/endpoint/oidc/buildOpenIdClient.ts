import { Issuer } from 'openid-client';
import { getOIDCConfig } from '../../config/getOIDCConfig';

export const buildOpenIdClient = async () => {
  const config = getOIDCConfig();

  const TrustIssuer = await Issuer.discover(config.issuer);

  const client = new TrustIssuer.Client({
    client_id: config.clientId,
    client_secret: config.clientSecret,
  });

  return client;
};

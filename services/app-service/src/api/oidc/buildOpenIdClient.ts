import { Issuer } from 'openid-client';
import {
  CLIENT_ID,
  CLIENT_SECRET,
  ISSUER,
} from '../../pages/api/auth/consts/OIDC_CONFIG';

export const buildOpenIdClient = async () => {
  const TrustIssuer = await Issuer.discover(ISSUER);

  const client = new TrustIssuer.Client({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  return client;
};

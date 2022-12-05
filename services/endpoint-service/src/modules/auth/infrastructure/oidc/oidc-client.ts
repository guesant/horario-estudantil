import { Issuer } from 'openid-client';

export const buildOpenIdClient = async () => {
  const ISSUER = process.env.OAUTH2_CLIENT_PROVIDER_OIDC_ISSUER;
  const CLIENT_ID = process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_ID;
  const CLIENT_SECRET =
    process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_SECRET;

  if (
    ISSUER === undefined ||
    CLIENT_ID === undefined ||
    CLIENT_SECRET === undefined
  ) {
    throw new Error('Please provide correct OAUTH2_CLIENT credentials.');
  }

  const TrustIssuer = await Issuer.discover(ISSUER);

  const client = new TrustIssuer.Client({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  return client;
};

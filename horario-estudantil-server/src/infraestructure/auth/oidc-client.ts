import { Issuer } from 'openid-client';

export const buildOpenIdClient = async () => {
  const issuer = process.env.OAUTH2_CLIENT_PROVIDER_OIDC_ISSUER;
  const clientId = process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_ID;

  const clientSecret =
    process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_SECRET;

  const TrustIssuer = await Issuer.discover(issuer);

  const client = new TrustIssuer.Client({
    client_id: clientId,
    client_secret: clientSecret,
  });

  return client;
};

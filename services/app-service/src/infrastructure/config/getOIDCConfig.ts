export const getOIDCConfig = () => {
  const issuer = process.env.OAUTH2_ISSUER;
  const clientId = process.env.OAUTH2_CLIENT_ID;
  const clientSecret = process.env.OAUTH2_CLIENT_SECRET;

  if (
    issuer === undefined ||
    clientId === undefined ||
    clientSecret === undefined
  ) {
    throw new Error('[ERROR] OAuth2 credentials not provided correctly.');
  }

  return { issuer, clientId, clientSecret };
};

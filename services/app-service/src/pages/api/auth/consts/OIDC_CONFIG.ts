const ISSUER = process.env.OAUTH2_ISSUER as string;
const CLIENT_ID = process.env.OAUTH2_CLIENT_ID as string;
const CLIENT_SECRET = process.env.OAUTH2_CLIENT_SECRET as string;

if (
  CLIENT_ID === undefined ||
  CLIENT_SECRET === undefined ||
  ISSUER === undefined
) {
  throw new Error('[ERROR] OAuth2 credentials not provided correctly.');
}

export { ISSUER, CLIENT_ID, CLIENT_SECRET };

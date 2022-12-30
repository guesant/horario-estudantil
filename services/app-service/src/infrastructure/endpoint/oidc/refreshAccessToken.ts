import { getOpenIDClient } from './getOpenIDClient';

export const refreshAccessToken = async (token: any) => {
  try {
    const client = await getOpenIDClient();

    const tokenSet = await client.refresh(token.refreshToken);

    return {
      ...token,
      accessToken: tokenSet.access_token,
      accessTokenExpires: Date.now() + tokenSet.expires_in! * 1000,
      refreshToken: tokenSet.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log('--------------');
    console.log(error);
    console.log('--------------');

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
};

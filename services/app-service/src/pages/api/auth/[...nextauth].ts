import NextAuth, { NextAuthOptions } from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';
import { getOIDCConfig } from '../../../infrastructure/config/getOIDCConfig';
import { refreshAccessToken } from '../../../infrastructure/endpoint/oidc/refreshAccessToken';

const config = getOIDCConfig();

export const authOptions: NextAuthOptions = {
  theme: {
    colorScheme: 'light',
  },

  session: {},

  providers: [
    KeycloakProvider({
      issuer: config.issuer,
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      name: 'Conta Horário Estudantil',
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: Date.now() + <number>account.expires_in * 1000,
          user: {
            ...user,
          },
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < <number>token.accessTokenExpires) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user = token.user;
      session.error = token.error;
      session.accessToken = token.accessToken;

      return session;
    },
  },
};

export default NextAuth(authOptions);

import NextAuth, { NextAuthOptions } from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';
import { refreshAccessToken } from '../../../api/oidc/refreshAccessToken';
import { CLIENT_ID, CLIENT_SECRET, ISSUER } from './consts/OIDC_CONFIG';

export const authOptions: NextAuthOptions = {
  theme: {
    colorScheme: 'light',
  },

  session: {},

  providers: [
    KeycloakProvider({
      issuer: ISSUER,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      name: 'Conta Horário Estudantil',
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      console.log(1);

      // Initial sign in
      if (account && user) {
        console.log(1.1);

        console.log(1.2);

        return {
          accessToken: account.access_token,

          refreshToken: account.refresh_token,

          accessTokenExpires: Date.now() + <number>account.expires_in * 1000,

          user: {
            ...user,
          },
        };
      }

      console.log(1.3);

      // Return previous token if the access token has not expired yet
      if (Date.now() < <number>token.accessTokenExpires) {
        return token;
      }

      console.log(1.4);

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

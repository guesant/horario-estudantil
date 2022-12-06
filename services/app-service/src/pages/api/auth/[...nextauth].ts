import NextAuth, {NextAuthOptions} from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";
import {Provider} from "next-auth/providers";

const ISSUER = process.env.OAUTH2_ISSUER;
const CLIENT_ID = process.env.OAUTH2_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH2_CLIENT_SECRET;

const getProviders = () => {
  const providers: Provider[] = [];

  if(CLIENT_ID !== undefined && CLIENT_SECRET !== undefined && ISSUER !== undefined) {
    providers.push(KeycloakProvider({
      issuer: ISSUER,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      name: "Conta Horário Estudantil",
    }))
  } else {
    console.warn("[WARN] OAuth2 credentials not provided correctly.")
  }

  return providers;
}

export const authOptions: NextAuthOptions = {
  theme: {
    colorScheme: "light"
  },
  providers: [
      ...getProviders()
  ],


  callbacks: {
  async jwt({ token, account }) {
    if (account) {
      token.accessToken = account.access_token as string;
    }
    return token
  },
  async session({ session, token, user }) {
    session.accessToken = token.accessToken;
    return session
  }
}
}

export default NextAuth(authOptions)
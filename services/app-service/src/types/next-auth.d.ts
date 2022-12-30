/* eslint-disable */
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
/* eslint-enable */

export type gc0 = Session;
export type gc1 = JWT;

declare module 'next-auth' {
  interface Session {
    error?: any;

    user?: any;

    accessToken?: any;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
  }
}

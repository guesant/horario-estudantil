/* eslint-disable */
import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth';
/* eslint-enable */

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

import { getSession } from 'next-auth/react';
import { IGetAPIClientOptions } from './IGetAPIClientOptions';

export const getAccessTokenResolver = (options: IGetAPIClientOptions) => {
  return async () => {
    const { context } = options;

    if (options.accessToken) {
      return options.accessToken;
    }

    const session = await getSession(context);

    const accessToken = (session as any)?.accessToken;

    if (accessToken) {
      return `${accessToken}`;
    }

    return null;
  };
};

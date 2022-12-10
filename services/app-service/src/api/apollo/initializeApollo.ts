import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createApolloClient } from './createApolloClient';
import { IS_SERVER_SIDE } from '../../etc/IS_SERVER_SIDE';

let apolloClientCache: ApolloClient<NormalizedCacheObject>;

export const initializeApollo = (initialState: any = {}) => {
  const apolloClient = apolloClientCache ?? createApolloClient();

  if (initialState) {
    apolloClient.cache.restore(initialState);
  }

  if (IS_SERVER_SIDE) {
    return apolloClient;
  }

  apolloClientCache = apolloClientCache ?? apolloClient;

  return apolloClientCache;
};

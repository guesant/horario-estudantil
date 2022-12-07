import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createApolloClient } from './createApolloClient';
import { isServerSide } from '../../domain/app/isServerSide';

let apolloClientCache: ApolloClient<NormalizedCacheObject>;

export const initializeApollo = (initialState: any = {}) => {
  const apolloClient = apolloClientCache ?? createApolloClient();

  if (initialState) {
    apolloClient.cache.restore(initialState);
  }

  if (isServerSide) {
    return apolloClient;
  }

  apolloClientCache = apolloClientCache ?? apolloClient;

  return apolloClientCache;
};

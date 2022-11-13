import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { createApolloClient } from "./createApolloClient";
import { isSSR } from "./isSSR";

let apolloClientCache: ApolloClient<NormalizedCacheObject>;

export const initializeApollo = (initialState: any = {}) => {
  const apolloClient = apolloClientCache ?? createApolloClient();

  if (initialState) {
    apolloClient.cache.restore(initialState);
  }

  if (isSSR) {
    return apolloClient;
  }

  apolloClientCache = apolloClientCache ?? apolloClient;

  return apolloClientCache;
};

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { isServerSide } from '../app/isServerSide';

const getDynamicEndpointURL = () => {
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_ENDPOINT_URL;
  }

  const url = new URL(window.location.href);

  url.port = '3001';
  url.search = '';

  return url.origin;
};

export const createApolloClient = () => {
  const ENDPOINT = isServerSide
    ? process.env.INTERNAL_ENDPOINT_URL
    : getDynamicEndpointURL();

  const ENPOINT_GRAPHQL = `${ENDPOINT}/graphql`;

  return new ApolloClient({
    ssrMode: isServerSide,
    cache: new InMemoryCache({
      typePolicies: { Instituicao: { merge: true } },
    }),
    link: new HttpLink({ uri: ENPOINT_GRAPHQL }),
  });
};

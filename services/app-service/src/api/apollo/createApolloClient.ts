import {
  ApolloClient,
  createHttpLink,
  defaultDataIdFromObject,
  InMemoryCache,
} from '@apollo/client';
import { IS_SERVER_SIDE } from '../../etc/IS_SERVER_SIDE';
import { getDynamicEndpointURL } from './getDynamicEndpointURL';
import { setContext } from '@apollo/client/link/context';
import { getAccessTokenResolver } from '../getAccessTokenResolver';
import { IGetAPIClientOptions } from '../IGetAPIClientOptions';

export const createApolloClient = (options: IGetAPIClientOptions = {}) => {
  const ENDPOINT = IS_SERVER_SIDE
    ? process.env.INTERNAL_ENDPOINT_URL
    : getDynamicEndpointURL();

  const ENDPOINT_GRAPHQL = `${ENDPOINT}/graphql`;

  const getAccessToken = getAccessTokenResolver(options);

  const httpLink = createHttpLink({ uri: ENDPOINT_GRAPHQL });

  const authLink = setContext(async (_, { headers }) => {
    const token = await getAccessToken();

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const link = authLink.concat(httpLink);

  return new ApolloClient({
    link,

    ssrMode: IS_SERVER_SIDE,

    cache: new InMemoryCache({
      typePolicies: { Instituicao: { merge: true } },

      dataIdFromObject(responseObject) {
        switch (responseObject.__typename) {
          // case 'Product': return `Product:${responseObject.upc}`;
          // case 'Person': return `Person:${responseObject.name}:${responseObject.email}`;
          default:
            return defaultDataIdFromObject(responseObject);
        }
      },
    }),
  });
};

import {
  ApolloClient,
  createHttpLink,
  defaultDataIdFromObject,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getAccessTokenResolver } from '../getAccessTokenResolver';
import { IGetAPIClientOptions } from '../IGetAPIClientOptions';
import { getEndpointGraphQLUrl } from '../../config/getEndpointGraphQLUrl';
import { IS_SERVER_SIDE } from '../../app';

export const createApolloClient = (options: IGetAPIClientOptions = {}) => {
  const getAccessToken = getAccessTokenResolver(options);

  const httpLink = createHttpLink({ uri: getEndpointGraphQLUrl() });

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
          default: {
            return defaultDataIdFromObject(responseObject);
          }
        }
      },
    }),
  });
};

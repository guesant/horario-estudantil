import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { isSSR } from "../app/isSSR";

export const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: isSSR,
    cache: new InMemoryCache({
      typePolicies: {
        UnidadeEstudantil: {
          merge: true,
        },
      },
    }),
    link: new HttpLink({ uri: process.env.NEXT_PUBLIC_ENDPOINT_GRAPHQL_URL }),
  });
};

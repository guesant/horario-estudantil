import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { isSSR } from "./isSSR";

export const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: isSSR,
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: process.env.NEXT_PUBLIC_ENDPOINT_GRAPHQL_URL }),
  });
};

import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { isServerSide } from "../../domain/app/isServerSide";

const ENDPOINT = isServerSide
  ? process.env.INTERNAL_ENDPOINT_URL
  : process.env.NEXT_PUBLIC_ENDPOINT_URL;

export const createApolloClient = () => {
  const ENPOINT_GRAPHQL = `${ENDPOINT}/graphql`;

  return new ApolloClient({
    ssrMode: isServerSide,
    cache: new InMemoryCache({
      typePolicies: { Instituicao: { merge: true } },
    }),
    link: new HttpLink({ uri: ENPOINT_GRAPHQL }),
  });
};

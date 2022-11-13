import { ApolloClient } from "@apollo/client";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { initializeApollo } from "../../../apollo/initializeApollo";
import { QUERY_UNIDADE_DE_ENSINO_INFO } from "../UnidadeDeEnsino/UnidadeDeEnsinoQueries";
import { parseQueryData } from "./parseQueryData";

export const getSharedServerSideProps = async (
  context: GetServerSidePropsContext,
  apolloClient = initializeApollo()
) => {
  const { query } = context;

  const initialQuery = parseQueryData(query);

  const { ue } = initialQuery;

  if (typeof ue === "string") {
    await apolloClient
      .query({
        variables: { sigla: ue },
        query: QUERY_UNIDADE_DE_ENSINO_INFO,
      })
      .catch(() => null);
  }

  return {
    props: {
      initialQuery,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

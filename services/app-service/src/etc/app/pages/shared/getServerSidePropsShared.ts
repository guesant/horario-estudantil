import { GetServerSidePropsContext } from 'next';
import { initializeApollo } from '../../../apollo/initializeApollo';
import log from '../../../log/log';
import { QUERY_INSTITUICAO_INFO } from '../../queries/InstituicaoQueries';

export const getServerSidePropsShared = async (
  context: GetServerSidePropsContext,
  apolloClient = initializeApollo(),
) => {
  const { sigla_ins: sigla } = context.query;

  if (typeof sigla === 'string' && sigla.length > 0) {
    await apolloClient
      .query({
        variables: { sigla: sigla },
        query: QUERY_INSTITUICAO_INFO,
      })
      .catch(() => {
        log.error("Can't fetch Instituição info", {
          params: { sigla: sigla },
        });
      });
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

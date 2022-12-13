import { GetServerSidePropsContext } from 'next';
import { initializeApollo } from '../../../api/apollo/initializeApollo';
import logger from '../../log/logger';
import { INSTITUICAO_GENERAL_INFO } from '../../../graphql/fragments/INSTITUICAO_GENERAL_INFO';

export const getExplorerInitialProps = async (
  context: GetServerSidePropsContext,
  apolloClient = initializeApollo(),
) => {
  const { sigla_ins: sigla } = context.query;

  if (typeof sigla === 'string' && sigla.length > 0) {
    await apolloClient
      .query({
        variables: { sigla: sigla },
        query: INSTITUICAO_GENERAL_INFO,
      })
      .catch(() => {
        logger.error("Can't fetch Instituição info", {
          params: { sigla: sigla },
        });
      });
  }

  return {
    // props: {
    initialApolloState: apolloClient.cache.extract(),
    // },
  };
};

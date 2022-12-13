import { GetServerSidePropsContext } from 'next';
import { initializeApollo } from '../../../api/apollo/initializeApollo';
import logger from '../../log/logger';
import { INSTITUICAO_GENERAL_INFO } from '../../../graphql/fragments/INSTITUICAO_GENERAL_INFO';
import { InstituicaoGeneralInfoQuery } from '../../../graphql/__generated__/graphql';

export const getExplorerInitialProps = async (
  context: GetServerSidePropsContext,
  apolloClient = initializeApollo(),
) => {
  const { sigla_ins: sigla } = context.query;

  if (typeof sigla === 'string' && sigla.length > 0) {
    await apolloClient
      .query<InstituicaoGeneralInfoQuery>({
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
    initialApolloState: apolloClient.cache.extract(),
  };
};

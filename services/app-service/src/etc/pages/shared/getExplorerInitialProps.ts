import { GetServerSidePropsContext } from 'next';
import { initializeApollo } from '../../../api/apollo/initializeApollo';
import logger from '../../log/logger';
import { InstituicaoGeneralInfoBySiglaQuery } from '../../../graphql/__generated__/graphql';
import { INSTITUICAO_GENERAL_INFO_BY_SIGLA } from '../../../graphql/queries/INSTITUICAO_GENERAL_INFO_BY_SIGLA';

export const getExplorerInitialProps = async (
  context: GetServerSidePropsContext,
  apolloClient = initializeApollo(),
) => {
  const { sigla_ins: sigla } = context.query;

  if (typeof sigla === 'string' && sigla.length > 0) {
    await apolloClient
      .query<InstituicaoGeneralInfoBySiglaQuery>({
        variables: { sigla: sigla },
        query: INSTITUICAO_GENERAL_INFO_BY_SIGLA,
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

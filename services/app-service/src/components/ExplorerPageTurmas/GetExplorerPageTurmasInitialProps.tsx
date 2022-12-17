import { GetServerSidePropsContext } from 'next';
import { initializeApollo } from '../../api/apollo/initializeApollo';
import { getExplorerInitialProps } from '../../etc/pages/shared/getExplorerInitialProps';
import { INSTITUICAO_TURMAS } from '../../graphql/queries/INSTITUICAO_TURMAS';
import logger from '../../etc/log/logger';

export const getExplorerPageTurmasInitialProps = async (
  context: GetServerSidePropsContext,
) => {
  const apolloClient = initializeApollo();

  const shared = await getExplorerInitialProps(context, apolloClient);

  const { sigla_ins: sigla } = context.query;

  if (typeof sigla === 'string') {
    await apolloClient
      .query({
        variables: { sigla: sigla },
        query: INSTITUICAO_TURMAS,
      })
      .catch((err) => {
        logger.error('Can not fetch turmas', { params: { sigla: sigla } });
        console.error({ err });
      });
  }

  return {
    ...shared,
    initialApolloState: apolloClient.cache.extract(),
  };
};

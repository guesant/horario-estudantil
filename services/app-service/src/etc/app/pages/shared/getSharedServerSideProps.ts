import { GetServerSidePropsContext } from 'next';
import { initializeApollo } from '../../../apollo/initializeApollo';
import log from '../../../log/log';
import { QUERY_INSTITUICAO_INFO } from '../../queries/InstituicaoQueries';
import { parseQueryData } from './parseQueryData';

export const getSharedServerSideProps = async (
  context: GetServerSidePropsContext,
  apolloClient = initializeApollo(),
) => {
  const { query } = context;

  const initialQuery = parseQueryData(query);

  const { ue } = initialQuery;

  if (typeof ue === 'string') {
    await apolloClient
      .query({
        variables: { sigla: ue },
        query: QUERY_INSTITUICAO_INFO,
      })
      .catch(() => {
        log.error('Can not fetch Instituicao info', {
          params: { sigla: ue },
        });
      });
  }

  return {
    props: {
      initialQuery,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

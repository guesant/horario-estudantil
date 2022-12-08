import { GetServerSideProps } from 'next';
import { initializeApollo } from '../../etc/apollo/initializeApollo';
import { IAppPage } from '../../etc/app/pages/IAppPage';
import { getServerSidePropsShared } from '../../etc/app/pages/shared/getServerSidePropsShared';
import log from '../../etc/log/log';
import ExplorerPageTurmasBase from './ExplorerPageTurmasBase';
import { PageTurmasContextProvider } from './ExplorerPageTurmasContext';
import { PAGE_TURMAS_DATA_CATEGORIAS } from '../../etc/graphql/fragments/PAGE_TURMAS_DATA_CATEGORIAS';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  const shared = await getServerSidePropsShared(context, apolloClient);

  const { sigla_ins: sigla } = context.query;

  if (typeof sigla === 'string') {
    await apolloClient
      .query({
        variables: { sigla: sigla },
        query: PAGE_TURMAS_DATA_CATEGORIAS,
      })
      .catch((err) => {
        log.error('Can not fetch turmas', { params: { sigla: sigla } });
        console.error({ err });
      });
  }

  return {
    ...shared,
    props: {
      ...shared.props,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

const ExplorerPageTurmas: IAppPage<any> = () => {
  return (
    <>
      <PageTurmasContextProvider>
        <ExplorerPageTurmasBase />
      </PageTurmasContextProvider>
    </>
  );
};

export default ExplorerPageTurmas;

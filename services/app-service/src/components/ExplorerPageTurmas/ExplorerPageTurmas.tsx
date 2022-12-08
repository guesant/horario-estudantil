import { GetServerSideProps } from 'next';
import { initializeApollo } from '../../etc/apollo/initializeApollo';
import { IAppPage } from '../../etc/app/pages/IAppPage';
import { getSharedServerSideProps } from '../../etc/app/pages/shared/getSharedServerSideProps';
import { parseQueryData } from '../../etc/app/pages/shared/parseQueryData';
import log from '../../etc/log/log';
import ExplorerPageTurmasBase from './ExplorerPageTurmasBase';
import { PageTurmasContextProvider } from './ExplorerPageTurmasContext';
import { PAGE_TURMAS_DATA_CATEGORIAS } from '../../etc/graphql/fragments/PAGE_TURMAS_DATA_CATEGORIAS';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  const shared = await getSharedServerSideProps(context, apolloClient);

  const { ue } = parseQueryData(context.query);

  if (typeof ue === 'string') {
    await apolloClient
      .query({
        variables: { sigla: ue },
        query: PAGE_TURMAS_DATA_CATEGORIAS,
      })
      .catch((err) => {
        log.error('Can not fetch turmas', { params: { sigla: ue } });
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

import Head from 'next/head';
import { IAppPage } from '../../etc/pages/IAppPage';
import { getExplorerInitialProps } from '../../etc/pages/shared/getExplorerInitialProps';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';
import { ExplorerContextProvider } from '../ExplorerContext/ExplorerContext';

const ExplorerPageTurma: IAppPage = () => {
  return (
    <>
      <ExplorerContextProvider>
        <Head>
          <title>{buildPageTitle('Turma')}</title>
        </Head>

        <ExplorerLayoutMain>Turma.</ExplorerLayoutMain>
      </ExplorerContextProvider>
    </>
  );
};

ExplorerPageTurma.getInitialProps = getExplorerInitialProps;

export default ExplorerPageTurma;

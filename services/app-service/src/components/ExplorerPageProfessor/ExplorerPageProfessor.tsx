import Head from 'next/head';
import { IAppPage } from '../../etc/pages/IAppPage';
import { getExplorerInitialProps } from '../../etc/pages/shared/getExplorerInitialProps';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';
import { ExplorerContextProvider } from '../ExplorerContext/ExplorerContext';

const ExplorerPageProfessor: IAppPage = () => {
  return (
    <>
      <ExplorerContextProvider>
        <Head>
          <title>{buildPageTitle('Professor')}</title>
        </Head>

        <ExplorerLayoutMain>Professor</ExplorerLayoutMain>
      </ExplorerContextProvider>
    </>
  );
};

ExplorerPageProfessor.getInitialProps = getExplorerInitialProps;

export default ExplorerPageProfessor;

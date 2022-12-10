import Head from 'next/head';
import { IAppPage } from '../../etc/pages/IAppPage';
import { getExplorerInitialProps } from '../../etc/pages/shared/getExplorerInitialProps';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';
import ExplorerUIPageMainContent from '../ExplorerUIPageMainContent/ExplorerUIPageMainContent';
import { ExplorerContextProvider } from '../ExplorerContext/ExplorerContext';

const ExplorerPageProfessores: IAppPage = () => {
  return (
    <>
      <ExplorerContextProvider>
        <Head>
          <title>{buildPageTitle('Professores')}</title>
        </Head>

        <ExplorerLayoutMain>
          <ExplorerUIPageMainContent title={'Professores'}>
            TBI.
          </ExplorerUIPageMainContent>
        </ExplorerLayoutMain>
      </ExplorerContextProvider>
    </>
  );
};

ExplorerPageProfessores.getInitialProps = getExplorerInitialProps;

export default ExplorerPageProfessores;

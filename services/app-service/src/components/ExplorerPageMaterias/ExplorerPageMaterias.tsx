import Head from 'next/head';
import { IAppPage } from '../../etc/pages/IAppPage';
import { getExplorerInitialProps } from '../../etc/pages/shared/getExplorerInitialProps';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';
import ExplorerUIPageMainContent from '../ExplorerUIPageMainContent/ExplorerUIPageMainContent';
import { ExplorerContextProvider } from '../ExplorerContext/ExplorerContext';

const ExplorerPageMaterias: IAppPage = () => {
  return (
    <>
      <ExplorerContextProvider>
        <Head>
          <title>{buildPageTitle('Matérias')}</title>
        </Head>

        <ExplorerLayoutMain>
          <ExplorerUIPageMainContent title={'Matérias'}>
            TBI.
          </ExplorerUIPageMainContent>
        </ExplorerLayoutMain>
      </ExplorerContextProvider>
    </>
  );
};

ExplorerPageMaterias.getInitialProps = getExplorerInitialProps;

export default ExplorerPageMaterias;

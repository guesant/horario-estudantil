import Head from 'next/head';
import { IAppPage } from '../../etc/pages/IAppPage';
import { getExplorerInitialProps } from '../../etc/pages/shared/getExplorerInitialProps';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';
import ExplorerUIPageMainContent from '../ExplorerUIPageMainContent/ExplorerUIPageMainContent';
import { ExplorerContextProvider } from '../ExplorerContext/ExplorerContext';

const ExplorerPageMateria: IAppPage = () => {
  return (
    <>
      <ExplorerContextProvider>
        <Head>
          <title>{buildPageTitle('Matéria')}</title>
        </Head>

        <ExplorerLayoutMain>
          <ExplorerUIPageMainContent title={'Matéria'}>
            TBI.
          </ExplorerUIPageMainContent>
        </ExplorerLayoutMain>
      </ExplorerContextProvider>
    </>
  );
};

ExplorerPageMateria.getInitialProps = getExplorerInitialProps;
export default ExplorerPageMateria;

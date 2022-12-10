import Head from 'next/head';
import { IAppPage } from '../../etc/pages/IAppPage';
import { getExplorerInitialProps } from '../../etc/pages/shared/getExplorerInitialProps';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import ExplorerPageHomeBanner from '../ExplorerPageHomeBanner/ExplorerPageHomeBanner';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';
import ExplorerUIPageMainContent from '../ExplorerUIPageMainContent/ExplorerUIPageMainContent';
import { ExplorerContextProvider } from '../ExplorerContext/ExplorerContext';

const ExplorerPageHome: IAppPage = () => {
  return (
    <>
      <ExplorerContextProvider>
        <Head>
          <title>{buildPageTitle('Início')}</title>
        </Head>

        <ExplorerLayoutMain>
          <ExplorerUIPageMainContent title={'Início'}>
            <ExplorerPageHomeBanner />
          </ExplorerUIPageMainContent>
        </ExplorerLayoutMain>
      </ExplorerContextProvider>
    </>
  );
};

ExplorerPageHome.getInitialProps = getExplorerInitialProps;

export default ExplorerPageHome;

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { IAppPage } from '../../etc/app/pages/IAppPage';
import { getServerSidePropsShared } from '../../etc/app/pages/shared/getServerSidePropsShared';
import { buildPageTitle } from '../../etc/app/skeleton/buildPageTitle';
import ExplorerPageHomeBanner from '../ExplorerPageHomeBanner/ExplorerPageHomeBanner';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';
import ExplorerUIPageMainContent from '../ExplorerUIPageMainContent/ExplorerUIPageMainContent';

export const getServerSideProps: GetServerSideProps = getServerSidePropsShared;

const ExplorerPageHome: IAppPage = () => {
  return (
    <>
      <Head>
        <title>{buildPageTitle('Início')}</title>
      </Head>

      <ExplorerLayoutMain>
        <ExplorerUIPageMainContent title={'Início'}>
          <ExplorerPageHomeBanner />
        </ExplorerUIPageMainContent>
      </ExplorerLayoutMain>
    </>
  );
};

export default ExplorerPageHome;

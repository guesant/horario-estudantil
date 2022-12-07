import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { IAppPage } from '../../etc/domain/app/pages/IAppPage';
import { getSharedServerSideProps } from '../../etc/domain/app/pages/shared/getSharedServerSideProps';
import { buildPageTitle } from '../../etc/domain/app/skeleton/buildPageTitle';
import ExplorerPageHomeBanner from '../ExplorerPageHomeBanner/ExplorerPageHomeBanner';
import ExplorerMainLayout from '../ExplorerMainLayout/ExplorerMainLayout';
import ExplorerUIPageContent from '../ExplorerUIPageContent';

export const getServerSideProps: GetServerSideProps = getSharedServerSideProps;

const PageExplorerHome: IAppPage = () => {
  return (
    <>
      <Head>
        <title>{buildPageTitle('Início')}</title>
      </Head>

      <ExplorerMainLayout>
        <ExplorerUIPageContent title={'Início'}>
          <ExplorerPageHomeBanner />
        </ExplorerUIPageContent>
      </ExplorerMainLayout>
    </>
  );
};

export default PageExplorerHome;

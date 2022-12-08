import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { IAppPage } from '../../etc/app/pages/IAppPage';
import { getSharedServerSideProps } from '../../etc/app/pages/shared/getSharedServerSideProps';
import { buildPageTitle } from '../../etc/app/skeleton/buildPageTitle';
import UIPage from '../UIPage/UIPage';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    ...(await getSharedServerSideProps(context)),
  };
};

const ExplorerPageProfessor: IAppPage = () => {
  return (
    <>
      <UIPage>
        <Head>
          <title>{buildPageTitle('Professor')}</title>
        </Head>

        <ExplorerLayoutMain>Professor</ExplorerLayoutMain>
      </UIPage>
    </>
  );
};

export default ExplorerPageProfessor;

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

const ExplorerPageTurma: IAppPage = () => {
  return (
    <>
      <UIPage>
        <Head>
          <title>{buildPageTitle('Turma')}</title>
        </Head>

        <ExplorerLayoutMain>Turma.</ExplorerLayoutMain>
      </UIPage>
    </>
  );
};

export default ExplorerPageTurma;

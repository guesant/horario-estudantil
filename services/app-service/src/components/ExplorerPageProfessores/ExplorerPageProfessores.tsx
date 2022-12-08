import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {IAppPage} from '../../etc/app/pages/IAppPage';
import {getServerSidePropsShared} from '../../etc/app/pages/shared/getServerSidePropsShared';
import {buildPageTitle} from '../../etc/app/skeleton/buildPageTitle';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';
import ExplorerUIPageMainContent from '../ExplorerUIPageMainContent/ExplorerUIPageMainContent';
import {ExplorerContextProvider} from "../ExplorerContext/ExplorerContext";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    ...(await getServerSidePropsShared(context)),
  };
};

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
      </UIPage>
    </>
  );
};

export default ExplorerPageProfessores;

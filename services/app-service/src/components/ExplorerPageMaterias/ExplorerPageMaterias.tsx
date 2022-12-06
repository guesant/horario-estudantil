import {GetServerSideProps} from "next";
import Head from "next/head";
import {IAppPage} from "../../etc/domain/app/pages/IAppPage";
import {getSharedServerSideProps} from "../../etc/domain/app/pages/shared/getSharedServerSideProps";
import {buildPageTitle} from "../../etc/domain/app/skeleton/buildPageTitle";
import AppPage from "../UIExplorerPage/AppPage";
import ExplorerMainLayout from "../ExplorerMainLayout/ExplorerMainLayout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    ...(await getSharedServerSideProps(context)),
  };
};

const ExplorerPageMaterias: IAppPage = () => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Matérias")}</title>
        </Head>

        <ExplorerMainLayout>Matérias</ExplorerMainLayout>
      </AppPage>
    </>
  );
};

export default ExplorerPageMaterias;

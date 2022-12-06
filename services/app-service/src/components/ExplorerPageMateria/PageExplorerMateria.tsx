import { GetServerSideProps } from "next";
import Head from "next/head";
import { IAppPage } from "../../etc/domain/app/pages/IAppPage";
import { getSharedServerSideProps } from "../../etc/domain/app/pages/shared/getSharedServerSideProps";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import AppPage from "../AppPage/AppPage";
import LayoutApp from "../LayoutExplorer/LayoutApp";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    ...(await getSharedServerSideProps(context)),
  };
};

const PageExplorerMateria: IAppPage = () => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Materia")}</title>
        </Head>

        <LayoutApp>Materia</LayoutApp>
      </AppPage>
    </>
  );
};

export default PageExplorerMateria;

import { GetServerSideProps } from "next";
import Head from "next/head";
import { IAppPage } from "../../etc/domain/app/pages/IAppPage";
import { getSharedServerSideProps } from "../../etc/domain/app/pages/shared/getSharedServerSideProps";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import AppLink from "../AppLink";
import AppPage from "../AppPage/AppPage";
import LayoutApp from "../LayoutApp/LayoutApp";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    ...(await getSharedServerSideProps(context)),
  };
};

const PageTurma: IAppPage = () => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Turma")}</title>
        </Head>

        <LayoutApp>Turma.</LayoutApp>
      </AppPage>
    </>
  );
};

export default PageTurma;

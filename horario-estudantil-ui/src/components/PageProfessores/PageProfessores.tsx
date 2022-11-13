import Head from "next/head";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import { getSharedServerSideProps } from "../../etc/domain/app/getSharedServerSideProps";
import { IAppPage } from "../../etc/domain/app/IAppPage";
import AppPage from "../AppPage/AppPage";
import LayoutApp from "../LayoutApp/LayoutApp";

const PageProfessores: IAppPage = () => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Professores")}</title>
        </Head>

        <LayoutApp>Professores</LayoutApp>
      </AppPage>
    </>
  );
};

export default PageProfessores;

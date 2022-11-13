import Head from "next/head";
import { IAppPage } from "../../etc/domain/app/IAppPage";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import AppPage from "../AppPage/AppPage";
import LayoutApp from "../LayoutApp/LayoutApp";

const PageTurma: IAppPage = () => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Turma")}</title>
        </Head>

        <LayoutApp>Turma</LayoutApp>
      </AppPage>
    </>
  );
};

export default PageTurma;

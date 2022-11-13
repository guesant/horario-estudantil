import Head from "next/head";
import { IAppPage } from "../../etc/domain/app/IAppPage";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import AppPage from "../AppPage/AppPage";
import LayoutApp from "../LayoutApp/LayoutApp";

const PageMaterias: IAppPage = () => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Materias")}</title>
        </Head>

        <LayoutApp>Materias</LayoutApp>
      </AppPage>
    </>
  );
};

export default PageMaterias;

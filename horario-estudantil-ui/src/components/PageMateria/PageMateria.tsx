import Head from "next/head";
import { IAppPage } from "../../etc/domain/app/IAppPage";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import AppPage from "../AppPage/AppPage";
import LayoutApp from "../LayoutApp/LayoutApp";

const PageMateria: IAppPage = () => {
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

export default PageMateria;

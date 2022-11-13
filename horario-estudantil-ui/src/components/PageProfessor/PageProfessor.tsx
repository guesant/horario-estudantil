import Head from "next/head";
import { IAppPage } from "../../etc/domain/app/IAppPage";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import AppPage from "../AppPage/AppPage";
import LayoutApp from "../LayoutApp/LayoutApp";

const PageProfessor: IAppPage = () => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Professor")}</title>
        </Head>

        <LayoutApp>Professor</LayoutApp>
      </AppPage>
    </>
  );
};

export default PageProfessor;

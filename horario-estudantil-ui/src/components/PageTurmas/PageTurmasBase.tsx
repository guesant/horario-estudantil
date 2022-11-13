import dynamic from "next/dynamic";
import Head from "next/head";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import AppLoading from "../AppLoading/AppLoading";
import AppPage from "../AppPage/AppPage";
import LayoutApp from "../LayoutApp/LayoutApp";

const PageTurmasResults = dynamic(() => import("./PageTurmasResults"), {
  loading: () => <AppLoading />,
});

const PageTurmasBase = () => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Turmas")}</title>
        </Head>

        <LayoutApp>
          <PageTurmasResults />
        </LayoutApp>
      </AppPage>
    </>
  );
};

export default PageTurmasBase;

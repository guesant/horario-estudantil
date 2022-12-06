import dynamic from "next/dynamic";
import Head from "next/head";
import {buildPageTitle} from "../../etc/domain/app/skeleton/buildPageTitle";
import AppLoading from "../UIExplorerLoading/AppLoading";
import AppPage from "../UIExplorerPage/AppPage";
import ExplorerMainLayout from "../ExplorerMainLayout/ExplorerMainLayout";

const PageTurmasResults = dynamic(() => import("../ExplorerPageTurmasResults/ExplorerPageTurmasResults"), {
  loading: () => <AppLoading/>,
});

const ExplorerPageTurmasBase = () => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Turmas")}</title>
        </Head>

        <ExplorerMainLayout>
          <PageTurmasResults/>
        </ExplorerMainLayout>
      </AppPage>
    </>
  );
};

export default ExplorerPageTurmasBase;

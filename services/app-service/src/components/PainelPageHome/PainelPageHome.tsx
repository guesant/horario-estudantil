import {GetServerSideProps} from "next";
import Head from "next/head";
import {IAppPage} from "../../etc/domain/app/pages/IAppPage";
import {getSharedServerSideProps} from "../../etc/domain/app/pages/shared/getSharedServerSideProps";
import {buildPageTitle} from "../../etc/domain/app/skeleton/buildPageTitle";
import ExplorerPageHomeBanner from "../ExplorerPageHomeBanner/ExplorerPageHomeBanner";
import ExplorerMainLayout from "../ExplorerMainLayout/ExplorerMainLayout";
import ExplorerUIPageContent from "../ExplorerUIPageContent";

// export const getServerSideProps: GetServerSideProps = getSharedServerSideProps;

const PainelPageHome: IAppPage = () => {
  return (
    <>
      <Head>
        <title>{buildPageTitle(["Início", "Painel Administrativo"])}</title>
      </Head>

      <main>
        pph
      </main>
    </>
  );
};

PainelPageHome.auth = true;

export default PainelPageHome;

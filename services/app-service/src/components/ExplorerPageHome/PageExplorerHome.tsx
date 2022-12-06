import { GetServerSideProps } from "next";
import Head from "next/head";
import { IAppPage } from "../../etc/domain/app/pages/IAppPage";
import { getSharedServerSideProps } from "../../etc/domain/app/pages/shared/getSharedServerSideProps";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import HomeBanner from "../ExplorerPageHomeBanner/HomeBanner";
import LayoutApp from "../LayoutExplorer/LayoutApp";
import ExplorerUIPageContent from "../ExplorerUIPageContent";

export const getServerSideProps: GetServerSideProps = getSharedServerSideProps;

const Home: IAppPage = () => {
  return (
    <>
      <Head>
        <title>{buildPageTitle("Início")}</title>
      </Head>

      <LayoutApp>
        <ExplorerUIPageContent title={"Início"}>
          <HomeBanner />
        </ExplorerUIPageContent>
      </LayoutApp>
    </>
  );
};

export default Home;

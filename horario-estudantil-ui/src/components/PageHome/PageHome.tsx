import Head from "next/head";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import { getSharedServerSideProps } from "../../etc/domain/app/getSharedServerSideProps";
import { IAppPage } from "../../etc/domain/app/IAppPage";
import LayoutApp from "../LayoutApp/LayoutApp";
import HomeBanner from "../HomeBanner/HomeBanner";

const Home: IAppPage = () => {
  return (
    <>
      <Head>
        <title>{buildPageTitle("Início")}</title>
      </Head>

      <LayoutApp>
        <HomeBanner />
      </LayoutApp>
    </>
  );
};

export default Home;

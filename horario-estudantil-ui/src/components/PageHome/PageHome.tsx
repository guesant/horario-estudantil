import { GetServerSideProps } from "next";
import Head from "next/head";
import { IAppPage } from "../../etc/domain/app/pages/IAppPage";
import { getSharedServerSideProps } from "../../etc/domain/app/pages/shared/getSharedServerSideProps";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import HomeBanner from "../HomeBanner/HomeBanner";
import LayoutApp from "../LayoutApp/LayoutApp";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    ...(await getSharedServerSideProps(context)),
  };
};

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

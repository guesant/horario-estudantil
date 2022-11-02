import { GetServerSideProps } from "next";
import Head from "next/head";
import { buildPageTitle } from "../../helpers/buildPageTitle";
import AppPage from "../AppPage/AppPage";
import LayoutUnidadeEstudantil from "../LayoutUnidadeEstudantil/LayoutUnidadeEstudantil";

type Props = {};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { resolvedUrl } = context;
  return {
    props: {},
    redirect: {
      destination: resolvedUrl + "/turmas",
    },
  };
};

const Page_UE = (props: Props) => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Unidade Estudantil")}</title>
        </Head>

        <LayoutUnidadeEstudantil></LayoutUnidadeEstudantil>
      </AppPage>
    </>
  );
};

export default Page_UE;

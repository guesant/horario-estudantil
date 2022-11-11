import Head from "next/head";
import { buildPageTitle } from "../../helpers/buildPageTitle";
import AppPage from "../AppPage/AppPage";
import LayoutUnidadeEstudantil from "../LayoutUnidadeEstudantil/LayoutUnidadeEstudantil";

type Props = {};

const Page_UE_Professores = (props: Props) => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Professores")}</title>
        </Head>

        <LayoutUnidadeEstudantil>Professores</LayoutUnidadeEstudantil>
      </AppPage>
    </>
  );
};

export default Page_UE_Professores;
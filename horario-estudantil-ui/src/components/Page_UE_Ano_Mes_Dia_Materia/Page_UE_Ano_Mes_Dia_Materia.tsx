import Head from "next/head";
import { buildPageTitle } from "../../helpers/buildPageTitle";
import AppPage from "../AppPage/AppPage";
import LayoutUnidadeEstudantil from "../LayoutUnidadeEstudantil/LayoutUnidadeEstudantil";

type Props = {};

const Page_UE_Ano_Mes_Dia_Materia = (props: Props) => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Materia")}</title>
        </Head>

        <LayoutUnidadeEstudantil>Materia</LayoutUnidadeEstudantil>
      </AppPage>
    </>
  );
};

export default Page_UE_Ano_Mes_Dia_Materia;

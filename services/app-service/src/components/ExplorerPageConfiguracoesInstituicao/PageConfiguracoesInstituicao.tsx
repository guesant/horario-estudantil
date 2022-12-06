import Box from "@mui/material/Box";
import Head from "next/head";
import { IAppPage } from "../../etc/domain/app/pages/IAppPage";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import LayoutApp from "../LayoutExplorer/LayoutApp";
import PortalSelecionarInstituicao from "../ExplorerPortalSelecionarInstituicao/PortalSelecionarInstituicao";

const PageConfiguracoesInstituicao: IAppPage = () => {
  return (
    <>
      <Head>
        <title>
          {buildPageTitle(["Selecionar uma Instituição", "Configurações"])}
        </title>
      </Head>

      <LayoutApp>
        <PortalSelecionarInstituicao />
      </LayoutApp>
    </>
  );
};

export default PageConfiguracoesInstituicao;

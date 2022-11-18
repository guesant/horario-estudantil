import Box from "@mui/material/Box";
import Head from "next/head";
import { IAppPage } from "../../etc/domain/app/pages/IAppPage";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import LayoutApp from "../LayoutApp/LayoutApp";
import PortalSelecionarUnidadeDeEnsino from "../PortalSelecionarUnidadeDeEnsino/PortalSelecionarUnidadeDeEnsino";

const PageConfiguracoesUnidadeDeEnsino: IAppPage = () => {
  return (
    <>
      <Head>
        <title>
          {buildPageTitle(["Selecionar uma Instituição", "Configurações"])}
        </title>
      </Head>

      <LayoutApp>
        <PortalSelecionarUnidadeDeEnsino />
      </LayoutApp>
    </>
  );
};

export default PageConfiguracoesUnidadeDeEnsino;

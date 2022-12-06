import Head from "next/head";
import {IAppPage} from "../../etc/domain/app/pages/IAppPage";
import {buildPageTitle} from "../../etc/domain/app/skeleton/buildPageTitle";
import ExplorerMainLayout from "../ExplorerMainLayout/ExplorerMainLayout";
import ExplorerSelectInstituicao from "../ExplorerSelectInstituicao/ExplorerSelectInstituicao";

const ExplorerPageSettingsInstituicao: IAppPage = () => {
  return (
    <>
      <Head>
        <title>
          {buildPageTitle(["Selecionar Instituição", "Configurações"])}
        </title>
      </Head>

      <ExplorerMainLayout>
        <ExplorerSelectInstituicao/>
      </ExplorerMainLayout>
    </>
  );
};

export default ExplorerPageSettingsInstituicao;

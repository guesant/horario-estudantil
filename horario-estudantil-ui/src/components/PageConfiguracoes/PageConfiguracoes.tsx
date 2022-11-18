import Box from "@mui/material/Box";
import Head from "next/head";
import { IAppPage } from "../../etc/domain/app/pages/IAppPage";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import LayoutApp from "../LayoutApp/LayoutApp";

const PageConfiguracoes: IAppPage = () => {
  return (
    <>
      <Head>
        <title>{buildPageTitle("Configurações")}</title>
      </Head>

      <LayoutApp>
        <Box>...</Box>
      </LayoutApp>
    </>
  );
};

export default PageConfiguracoes;

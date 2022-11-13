import Box from "@mui/material/Box";
import Head from "next/head";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import { getSharedServerSideProps } from "../../etc/domain/app/getSharedServerSideProps";
import { IAppPage } from "../../etc/domain/app/IAppPage";
import LayoutApp from "../LayoutApp/LayoutApp";

const Configuracoes: IAppPage = () => {
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

export default Configuracoes;

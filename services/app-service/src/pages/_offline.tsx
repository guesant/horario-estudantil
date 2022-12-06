import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Head from "next/head";
import React from "react";
import AppContainer from "../components/UIExplorerContainer";
import UIExplorerHeader from "../components/UIExplorerHeader";
import AppPage from "../components/UIExplorerPage/AppPage";
import {buildPageTitle} from "../etc/domain/app/skeleton/buildPageTitle";

type Props = {};

const PageOffline = (props: Props) => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Sem Conexão à Internet")}</title>
        </Head>

        <UIExplorerHeader/>
        <AppContainer>
          <Box sx={{my: 2}}>
            <Typography variant="h2" sx={{my: 2}}>
              Sem Conexão à Internet
            </Typography>
            <Typography>
              Não podemos mostrar esta informação. Certifique-se de estar
              conectado à Internet.
            </Typography>
          </Box>
        </AppContainer>
      </AppPage>
    </>
  );
};

export default PageOffline;

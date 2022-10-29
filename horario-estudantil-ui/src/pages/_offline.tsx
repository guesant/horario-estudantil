import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Head from "next/head";
import React from "react";
import AppContainer from "../components/AppContainer";
import AppHeader from "../components/AppHeader";
import AppPage from "../components/AppPage/AppPage";
import { buildPageTitle } from "../helpers/buildPageTitle";

type Props = {};

const PageOffline = (props: Props) => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Sem Conexão à Internet")}</title>
        </Head>

        <AppHeader />
        <AppContainer>
          <Box sx={{ my: 2 }}>
            <Typography variant="h2" sx={{ my: 2 }}>
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

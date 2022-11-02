import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { buildPageTitle } from "../../helpers/buildPageTitle";
import LayoutBase from "../LayoutBase/LayoutBase";
import { CONFIGURACOES_LAYOUT_ACTIONS } from "./CONFIGURACOES_LAYOUT_ACTIONS";

export default function Configuracoes() {
  return (
    <>
      <Head>
        <title>{buildPageTitle("Configurações")}</title>
      </Head>

      <LayoutBase
        navigationActions={CONFIGURACOES_LAYOUT_ACTIONS}
        SubHeaderProps={{
          children: (
            <>
              <Typography variant="h6">Configurações</Typography>
            </>
          ),
        }}
      >
        <Box>...</Box>
      </LayoutBase>
    </>
  );
}

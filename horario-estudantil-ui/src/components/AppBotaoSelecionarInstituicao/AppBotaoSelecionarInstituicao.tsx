import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button, { ButtonProps } from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import dynamic from "next/dynamic";
import { MouseEventHandler, useCallback, useContext, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import AppLink from "../AppLink";
import { IAppLinkProps } from "../AppLink/AppLink";
import AppLoading from "../AppLoading/AppLoading";
import { AppBotaoSelecionarInstituicaoSelecionadoInformacoes } from "./AppBotaoSelecionarInstituicaoSelecionadoInformacoes";

const PortalSelecionarInstituicao = dynamic(
  () => import("../PortalSelecionarInstituicao"),
  { loading: () => <AppLoading /> }
);

type IAppBotaoSelecionarInstituicaoProps = {
  ButtonProps?: ButtonProps;
};

const AppBotaoSelecionarInstituicao = (
  props: IAppBotaoSelecionarInstituicaoProps
) => {
  const { ButtonProps } = props;
  const { sigla } = useContext(AppContext);

  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();
      setIsModalOpened(true);
    },
    []
  );

  return (
    <>
      <Button
        color="inherit"
        startIcon={<LocationOnIcon />}
        endIcon={<ArrowDropDownIcon />}
        href="/configuracoes/instituicao"
        LinkComponent={(props: IAppLinkProps) => (
          <AppLink ignore={["ue"]} {...props} />
        )}
        {...ButtonProps}
        onClick={handleClick}
        sx={{
          py: 1,
          px: 2,

          fontWeight: "bold",
          textTransform: "none",

          fontSize: {
            sm: "1rem",
            xs: "0.875rem",
          },

          ...ButtonProps?.sx,
        }}
      >
        {sigla === null && "Selecione uma Instituição"}
        {sigla !== null && <AppBotaoSelecionarInstituicaoSelecionadoInformacoes />}
      </Button>

      <Dialog
        fullWidth
        maxWidth="sm"
        scroll="paper"
        open={isModalOpened}
        onClose={() => setIsModalOpened(false)}
      >
        <Box sx={{ height: "100vh", maxHeight: "100%" }}>
          <PortalSelecionarInstituicao />
        </Box>
      </Dialog>
    </>
  );
};

export default AppBotaoSelecionarInstituicao;

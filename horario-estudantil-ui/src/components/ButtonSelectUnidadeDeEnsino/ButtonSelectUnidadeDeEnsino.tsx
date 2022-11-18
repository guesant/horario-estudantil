import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button, { ButtonProps } from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import dynamic from "next/dynamic";
import { MouseEventHandler, useCallback, useContext, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import AppLink from "../AppLink";
import { IAppLinkProps } from "../AppLink/AppLink";
import AppLoading from "../AppLoading/AppLoading";
import { ButtonSelectUnidadeDeEnsinoSelectedInfo } from "./ButtonSelectUnidadeDeEnsinoSelectedInfo";

const PortalSelecionarUnidadeDeEnsino = dynamic(
  () => import("../PortalSelecionarUnidadeDeEnsino"),
  { loading: () => <AppLoading /> }
);

type IButtonSelectUnidadeDeEnsinoProps = {
  ButtonProps?: ButtonProps;
};

const ButtonSelectUnidadeDeEnsino = (
  props: IButtonSelectUnidadeDeEnsinoProps
) => {
  const { ButtonProps } = props;
  const { selectedUE } = useContext(AppContext);

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
        href="/configuracoes/unidade-de-ensino"
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
        {selectedUE === null && "Selecione uma Instituição"}
        {selectedUE !== null && <ButtonSelectUnidadeDeEnsinoSelectedInfo />}
      </Button>

      <Dialog
        fullWidth
        maxWidth="sm"
        scroll="paper"
        open={isModalOpened}
        onClose={() => setIsModalOpened(false)}
      >
        <PortalSelecionarUnidadeDeEnsino />
      </Dialog>
    </>
  );
};

export default ButtonSelectUnidadeDeEnsino;

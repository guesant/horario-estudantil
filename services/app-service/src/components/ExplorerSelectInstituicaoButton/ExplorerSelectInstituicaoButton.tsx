import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button, {ButtonProps} from "@mui/material/Button";
import {forwardRef, MouseEventHandler, useCallback, useContext, useState} from "react";
import {ExplorerContext} from "../ExplorerContext/ExplorerContext";
import UIExplorerLink from "../UIExplorerLink";
import {IUIExplorerLinkProps} from "../UIExplorerLink/UIExplorerLink";
import {ExplorerSelectInstituicaoButtonSelectedInfos} from "./ExplorerSelectInstituicaoButtonSelectedInfos";
import {ExplorerSelectInstituicaoDialog} from "./ExplorerSelectInstituicaoDialog";

type IAppBotaoSelecionarInstituicaoProps = {
  ButtonProps?: ButtonProps;
};

const AppBotaoSelecionarInstituicaoLink = forwardRef<any, IUIExplorerLinkProps>((props, ref) => <UIExplorerLink ref={ref}
                                                                                                                ignore={["ue"]} {...props} />)

AppBotaoSelecionarInstituicaoLink.displayName = AppBotaoSelecionarInstituicaoLink.name;

const ExplorerSelectInstituicaoButton = (
  props: IAppBotaoSelecionarInstituicaoProps
) => {
  const {ButtonProps} = props;
  const {sigla} = useContext(ExplorerContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();
      setIsModalOpen(true);
    },
    []
  );


  return (
    <>
      <Button
        color="inherit"
        startIcon={<LocationOnIcon/>}
        endIcon={<ArrowDropDownIcon/>}
        href="/configuracoes/instituicao"
        LinkComponent={AppBotaoSelecionarInstituicaoLink}
        {...ButtonProps}
        onClick={handleClick}
        sx={{
          py: 1,
          px: 2,

          borderRadius: "0.625rem",

          fontWeight: "bold",
          textTransform: "none",

          fontSize: {
            sm: "1rem",
            xs: "0.875rem",
          },

          ...ButtonProps?.sx,
        }}
      >
        {sigla === null && "Selecionar Instituição"}
        {sigla !== null && <ExplorerSelectInstituicaoButtonSelectedInfos/>}
      </Button>

      <ExplorerSelectInstituicaoDialog isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
    </>
  );
};

export default ExplorerSelectInstituicaoButton;

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button, { ButtonProps } from "@mui/material/Button";
import AppLink from "../AppLink";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { ButtonSelectUnidadeDeEnsinoSelectedInfo } from "./ButtonSelectUnidadeDeEnsinoSelectedInfo";

type IButtonSelectUnidadeDeEnsinoProps = {
  ButtonProps?: ButtonProps;
};

const ButtonSelectUnidadeDeEnsino = (
  props: IButtonSelectUnidadeDeEnsinoProps
) => {
  const { ButtonProps } = props;
  const { selectedUE } = useContext(AppContext);

  return (
    <>
      <Button
        color="inherit"
        {...ButtonProps}
        LinkComponent={AppLink}
        startIcon={<LocationOnIcon />}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          py: 1,
          px: 2,

          fontWeight: "bold",
          textTransform: "none",

          fontSize: {
            xs: "0.875rem",
            sm: "1rem",
          },

          ...ButtonProps?.sx,
        }}
      >
        {selectedUE === null && "Selecione uma Instituição"}
        {selectedUE !== null && <ButtonSelectUnidadeDeEnsinoSelectedInfo />}
      </Button>
    </>
  );
};

export default ButtonSelectUnidadeDeEnsino;

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button, { ButtonProps } from "@mui/material/Button";
import AppLink from "../AppLink";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

type Props = {
  ButtonProps?: ButtonProps;
};

const ButtonSelectUnidadeDeEnsino = (props: Props) => {
  const { ButtonProps } = props;
  const { selectedUnidadeDeEnsino } = useContext(AppContext);

  return (
    <>
      <Button
        color="inherit"
        startIcon={<LocationOnIcon />}
        endIcon={<ArrowDropDownIcon />}
        {...ButtonProps}
        LinkComponent={AppLink}
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
        {selectedUnidadeDeEnsino !== null
          ? "IFRO - Campus Ji-Paraná"
          : "Selecione uma Unidade de Ensino"}
      </Button>
    </>
  );
};

export default ButtonSelectUnidadeDeEnsino;

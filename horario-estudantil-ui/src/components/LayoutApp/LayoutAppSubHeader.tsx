import Box from "@mui/material/Box";
import ButtonSelectSemana from "../ButtonSelectSemana/ButtonSelectSemana";
import ButtonSelectUnidadeDeEnsino from "../ButtonSelectUnidadeDeEnsino/ButtonSelectUnidadeDeEnsino";

const LayoutUnidadeEstudantilSubHeader = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <ButtonSelectUnidadeDeEnsino />
      </Box>

      <ButtonSelectSemana />
    </>
  );
};

export default LayoutUnidadeEstudantilSubHeader;

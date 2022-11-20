import Box from "@mui/material/Box";
import AppBotaoSelecionarData from "../AppBotaoSelecionarData/AppBotaoSelecionarData";
import AppBotaoSelecionarInstituicao from "../AppBotaoSelecionarInstituicao/AppBotaoSelecionarInstituicao";

const LayoutAppSubHeader = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <AppBotaoSelecionarInstituicao />
      </Box>

      <AppBotaoSelecionarData />
    </>
  );
};

export default LayoutAppSubHeader;

import Box from "@mui/material/Box";
import AppBotaoSelecionarData from "../ExplorerBotaoSelecionarData/AppBotaoSelecionarData";
import AppBotaoSelecionarInstituicao from "../ExplorerBotaoSelecionarInstituicao/AppBotaoSelecionarInstituicao";

const LayoutAppSubHeader = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <AppBotaoSelecionarInstituicao />
      </Box>
    </>
  );
};

export default LayoutAppSubHeader;

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import AppBotaoSelecionarInstituicao from "../ExplorerBotaoSelecionarInstituicao/AppBotaoSelecionarInstituicao";

const HomeCallToActionSelectInstituicao = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>


        <Box
          sx={{
            gap: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: { md: "1.5rem", xs: "1.25rem" } }}
          >
            Começe por aqui:
          </Typography>

          <AppBotaoSelecionarInstituicao
            ButtonProps={{
              fullWidth: true,
              color: "success",
              variant: "contained",
              disableElevation: true,
              sx: { py: 1.5, px: 2, fontSize: "1.25rem", borderRadius: "8px" },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HomeCallToActionSelectInstituicao;

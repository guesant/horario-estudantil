import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExplorerSelectInstituicaoButton from "../ExplorerSelectInstituicaoButton/ExplorerSelectInstituicaoButton";

const ExplorerPageHomeBannerCallToActionSelectInstituicao = () => {
  return (
    <>
      <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>


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
            sx={{fontSize: {md: "1.5rem", xs: "1.25rem"}}}
          >
            Comece por aqui:
          </Typography>

          <ExplorerSelectInstituicaoButton
            ButtonProps={{
              fullWidth: true,
              color: "success",
              variant: "contained",
              disableElevation: true,
              sx: {py: 1.5, px: 2, fontSize: "1.25rem", borderRadius: "8px"},
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ExplorerPageHomeBannerCallToActionSelectInstituicao;

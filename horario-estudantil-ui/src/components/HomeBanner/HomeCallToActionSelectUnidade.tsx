import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ButtonSelectUnidadeDeEnsino from "../ButtonSelectUnidadeDeEnsino/ButtonSelectUnidadeDeEnsino";

const HomeCallToActionSelectUnidade = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          variant="h3"
          sx={{ fontSize: { md: "3rem", sm: "2.125rem", xs: "1.95rem" } }}
        >
          Bem-vindo ao <br />
          Horário Estudantil.
        </Typography>

        {/* <Divider />
        <Box
          sx={{
            gap: 1.5,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: { md: "2.125rem", sm: "1.5rem", xs: "1.25rem" } }}
          >
            Agora, redesenhado.
          </Typography>
          <Chip
            clickable
            color="success"
            variant="outlined"
            label="v4.0.0-beta"
          />
        </Box> */}

        <Divider />

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

          <ButtonSelectUnidadeDeEnsino
            ButtonProps={{
              fullWidth: true,
              color: "success",
              sx: { py: 1, px: 2 },
              variant: "contained",
              disableElevation: true,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HomeCallToActionSelectUnidade;

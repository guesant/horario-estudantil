import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ButtonSelectUnidadeDeEnsino from "../ButtonSelectUnidadeDeEnsino/ButtonSelectUnidadeDeEnsino";

const HomeCallToActionSelectUnidade = () => {
  return (
    <>
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
          sx={{
            fontSize: { md: "1.5rem", xs: "1.25rem" },
          }}
        >
          Começe por aqui:
        </Typography>

        <ButtonSelectUnidadeDeEnsino
          ButtonProps={{
            color: "success",
            variant: "contained",
            disableElevation: true,
            sx: { py: 1, px: 2 },
          }}
        />
      </Box>
    </>
  );
};

export default HomeCallToActionSelectUnidade;

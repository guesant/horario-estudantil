import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HomeCallToAction from "./HomeCallToAction";

const HomeBanner = () => {
  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          m: { xs: 3, sm: 4, md: 5 },
          p: { xs: 3, sm: 4, md: 5 },

          borderRadius: 4,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { md: "3rem", xs: "2.125rem" } }}
          >
            Bem-vindo ao <br />
            Horário Estudantil.
          </Typography>

          <Divider />

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
              sx={{ fontSize: { md: "2.125rem", xs: "1.5rem" } }}
            >
              Agora, redesenhado.
            </Typography>

            <Chip
              clickable
              color="success"
              variant="outlined"
              label="v4.0.0-beta"
            />
          </Box>

          <Divider />

          <HomeCallToAction />
        </Box>
      </Paper>
    </>
  );
};

export default HomeBanner;

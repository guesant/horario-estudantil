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
          borderRadius: 4,
          m: { xs: 3, sm: 4, md: 5 },
          p: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <HomeCallToAction />
      </Paper>
    </>
  );
};

export default HomeBanner;

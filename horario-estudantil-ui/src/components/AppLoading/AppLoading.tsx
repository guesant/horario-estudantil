import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {};

const AppLoading = (props: Props) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default AppLoading;

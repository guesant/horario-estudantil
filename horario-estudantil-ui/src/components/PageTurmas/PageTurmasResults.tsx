import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { useContext } from "react";
import AppLoading from "../AppLoading/AppLoading";
import { PageTurmasContext } from "./PageTurmasContext";

const PageTurmasResultsView = dynamic(() => import("./PageTurmasResultsView"), {
  loading: () => <AppLoading />,
});

const PageTurmasResults = () => {
  const {
    categoriasQuery: { loading: isLoading },
  } = useContext(PageTurmasContext);

  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          overflow: "auto",
          flexDirection: "column",
          p: { xs: 2, sm: 3, md: 5 },
        }}
      >
        <Typography variant="h4" sx={{ my: 1 }}>
          Turmas
        </Typography>

        <Divider sx={{ my: 2 }} />

        {isLoading && <AppLoading />}

        {!isLoading && <PageTurmasResultsView />}
      </Box>
    </>
  );
};

export default PageTurmasResults;

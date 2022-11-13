import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { useContext } from "react";
import { buildPageTitle } from "../../etc/domain/app/skeleton/buildPageTitle";
import AppLoading from "../AppLoading/AppLoading";
import AppPage from "../AppPage/AppPage";
import LayoutApp from "../LayoutApp/LayoutApp";
import { PageTurmasContext } from "./PageTurmasContext";
import PageTurmasResultsView from "./PageTurmasResultsView";

const PageTurmasResults = () => {
  const {
    pageTurmasQuery: { loading: isLoading },
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

const PageTurmasBase = () => {
  return (
    <>
      <AppPage>
        <Head>
          <title>{buildPageTitle("Turmas")}</title>
        </Head>

        <LayoutApp>
          <PageTurmasResults />
        </LayoutApp>
      </AppPage>
    </>
  );
};

export default PageTurmasBase;

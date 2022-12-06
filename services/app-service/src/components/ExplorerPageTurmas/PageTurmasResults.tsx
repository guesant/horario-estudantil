import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { useContext } from "react";
import AppLoading from "../AppLoading/AppLoading";
import { PageTurmasContext } from "./PageTurmasContext";
import ExplorerUIPageContent from "../ExplorerUIPageContent";

const PageTurmasResultsView = dynamic(() => import("./PageTurmasResultsView"), {
  loading: () => <AppLoading />,
});

const PageTurmasResults = () => {
  const {
    categoriasQuery: { loading: isLoading },
  } = useContext(PageTurmasContext);

  return (
    <>
      <ExplorerUIPageContent title={"Turmas"}>
        {isLoading && <AppLoading />}

        {!isLoading && <PageTurmasResultsView />}
      </ExplorerUIPageContent>
    </>
  );
};

export default PageTurmasResults;

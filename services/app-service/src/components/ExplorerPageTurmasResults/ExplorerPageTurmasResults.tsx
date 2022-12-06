import dynamic from "next/dynamic";
import {useContext} from "react";
import AppLoading from "../UIExplorerLoading/AppLoading";
import {ExplorerPageTurmasContext} from "../ExplorerPageTurmas/ExplorerPageTurmasContext";
import ExplorerUIPageContent from "../ExplorerUIPageContent";

const PageTurmasResultsView = dynamic(() => import("../ExplorerPageTurmasResultsView/ExplorerPageTurmasResultsView"), {
  loading: () => <AppLoading/>,
});

const ExplorerPageTurmasResults = () => {
  const {
    categoriasQuery: {loading: isLoading},
  } = useContext(ExplorerPageTurmasContext);

  return (
    <>
      <ExplorerUIPageContent title={"Turmas"}>
        {isLoading && <AppLoading/>}
        {!isLoading && <PageTurmasResultsView/>}
      </ExplorerUIPageContent>
    </>
  );
};

export default ExplorerPageTurmasResults;

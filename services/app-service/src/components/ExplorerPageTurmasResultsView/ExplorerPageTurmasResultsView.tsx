import React, {useContext, useMemo} from "react";
import {ExplorerPageTurmasContext, ICategoria} from "../ExplorerPageTurmas/ExplorerPageTurmasContext";
import PageTurmasResultsListNodes
  from "../ExplorerPageTurmasResultsViewListNodes/ExplorerPageTurmasResultsViewListNodes";
import {PageTurmasResultsViewContextProvider} from "./ExplorerPageTurmasResultsViewContext";

type Props = {};

const useAllCategorias = () => {
  const {categorias} = useContext(ExplorerPageTurmasContext);
  return categorias;
};

const getBaseCategorias = (categorias: ICategoria[]) =>
  categorias.filter((categoria) => categoria.categoriaTurmaPai === null);

const ExplorerPageTurmasResultsView = () => {
  const allCategorias = useAllCategorias();

  const baseCategorias = useMemo(
    () => getBaseCategorias(allCategorias),
    [allCategorias]
  );

  return (
    <>
      <PageTurmasResultsViewContextProvider allCategorias={allCategorias}>
        <PageTurmasResultsListNodes categorias={baseCategorias}/>
      </PageTurmasResultsViewContextProvider>
    </>
  );
};

export default ExplorerPageTurmasResultsView;

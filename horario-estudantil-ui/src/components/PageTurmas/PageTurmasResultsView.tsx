import React, { useContext, useMemo } from "react";
import { ICategoria, PageTurmasContext } from "./PageTurmasContext";
import PageTurmasResultsListNodes from "./PageTurmasResultsListNodes";
import { PageTurmasResultsViewContextProvider } from "./PageTurmasResultsViewContext";

type Props = {};

const useAllCategorias = () => {
  const { categorias } = useContext(PageTurmasContext);
  return categorias;
};

const getBaseCategorias = (categorias: ICategoria[]) =>
  categorias.filter((categoria) => categoria.categoriaTurmaPai === null);

const PageTurmasResultsView = (props: Props) => {
  const allCategorias = useAllCategorias();

  const baseCategorias = useMemo(
    () => getBaseCategorias(allCategorias),
    [allCategorias]
  );

  return (
    <>
      <PageTurmasResultsViewContextProvider allCategorias={allCategorias}>
        <PageTurmasResultsListNodes categorias={baseCategorias} />
      </PageTurmasResultsViewContextProvider>
    </>
  );
};

export default PageTurmasResultsView;

import React, { useMemo } from 'react';
import PageTurmasResultsListNodes from '../ExplorerPageTurmasResultsViewListNodes/ExplorerPageTurmasResultsViewListNodes';
import { PageTurmasResultsViewContextProvider } from './ExplorerPageTurmasResultsViewContext';
import { getBaseCategorias } from './getBaseCategorias';
import { useAllCategorias } from './useAllCategorias';
import ExplorerPageTurmasResultsFeedbackNoContent from './ExplorerPageTurmasResultsFeedbackNoContent';

const ExplorerPageTurmasResultsView = () => {
  const allCategorias = useAllCategorias();

  const baseCategorias = useMemo(
    () => getBaseCategorias(allCategorias),
    [allCategorias],
  );

  if (baseCategorias.length === 0) {
    return (
      <>
        <ExplorerPageTurmasResultsFeedbackNoContent />
      </>
    );
  }

  return (
    <>
      <PageTurmasResultsViewContextProvider allCategorias={allCategorias}>
        <PageTurmasResultsListNodes categorias={baseCategorias} />
      </PageTurmasResultsViewContextProvider>
    </>
  );
};

export default ExplorerPageTurmasResultsView;

import dynamic from 'next/dynamic';
import { useContext } from 'react';
import UILoading from '../UILoading/UILoading';
import { ExplorerPageTurmasContext } from '../ExplorerPageTurmas/ExplorerPageTurmasContext';
import ExplorerUIPageMainContent from '../ExplorerUIPageMainContent/ExplorerUIPageMainContent';
import ExplorerPageTurmasResultsFeedbackError from '../ExplorerPageTurmasResultsView/ExplorerPageTurmasResultsFeedbackError';

const PageTurmasResultsView = dynamic(
  () =>
    import('../ExplorerPageTurmasResultsView/ExplorerPageTurmasResultsView'),
  {
    loading: () => <UILoading />,
  },
);

const ExplorerPageTurmasResults = () => {
  const {
    categoriasQuery: { loading: isLoading, error },
  } = useContext(ExplorerPageTurmasContext);

  if (isLoading) {
    return (
      <>
        <ExplorerUIPageMainContent title={'Turmas'}>
          <UILoading />
        </ExplorerUIPageMainContent>
      </>
    );
  }

  if (Boolean(error)) {
    return (
      <>
        <ExplorerUIPageMainContent title={'Turmas'}>
          <ExplorerPageTurmasResultsFeedbackError />
        </ExplorerUIPageMainContent>
      </>
    );
  }

  return (
    <>
      <ExplorerUIPageMainContent title={'Turmas'}>
        <PageTurmasResultsView />
      </ExplorerUIPageMainContent>
    </>
  );
};

export default ExplorerPageTurmasResults;

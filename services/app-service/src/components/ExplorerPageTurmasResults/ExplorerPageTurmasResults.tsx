import dynamic from 'next/dynamic';
import { useContext } from 'react';
import AppLoading from '../UIExplorerLoading/AppLoading';
import { ExplorerPageTurmasContext } from '../ExplorerPageTurmas/ExplorerPageTurmasContext';
import ExplorerUIPageContent from '../ExplorerUIPageContent';
import ExplorerPageTurmasResultsFeedbackError from '../ExplorerPageTurmasResultsView/ExplorerPageTurmasResultsFeedbackError';

const PageTurmasResultsView = dynamic(
  () =>
    import('../ExplorerPageTurmasResultsView/ExplorerPageTurmasResultsView'),
  {
    loading: () => <AppLoading />,
  },
);

const ExplorerPageTurmasResults = () => {
  const {
    categoriasQuery: { loading: isLoading, error },
  } = useContext(ExplorerPageTurmasContext);

  if (isLoading) {
    return (
      <>
        <ExplorerUIPageContent title={'Turmas'}>
          <AppLoading />
        </ExplorerUIPageContent>
      </>
    );
  }

  if (Boolean(error)) {
    return (
      <>
        <ExplorerUIPageContent title={'Turmas'}>
          <ExplorerPageTurmasResultsFeedbackError />
        </ExplorerUIPageContent>
      </>
    );
  }

  return (
    <>
      <ExplorerUIPageContent title={'Turmas'}>
        <PageTurmasResultsView />
      </ExplorerUIPageContent>
    </>
  );
};

export default ExplorerPageTurmasResults;

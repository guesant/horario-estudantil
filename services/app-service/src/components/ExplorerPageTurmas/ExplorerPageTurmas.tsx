import { IAppPage } from '../../etc/pages/IAppPage';
import ExplorerPageTurmasBase from './ExplorerPageTurmasBase';
import { PageTurmasContextProvider } from './ExplorerPageTurmasContext';
import { ExplorerContextProvider } from '../ExplorerContext/ExplorerContext';
import { getExplorerPageTurmasInitialProps } from './GetExplorerPageTurmasInitialProps';

const ExplorerPageTurmas: IAppPage<any> = () => {
  return (
    <>
      <ExplorerContextProvider>
        <PageTurmasContextProvider>
          <ExplorerPageTurmasBase />
        </PageTurmasContextProvider>
      </ExplorerContextProvider>
    </>
  );
};

ExplorerPageTurmas.getInitialProps = getExplorerPageTurmasInitialProps;
export default ExplorerPageTurmas;

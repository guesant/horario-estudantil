import dynamic from 'next/dynamic';
import Head from 'next/head';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import UILoading from '../UILoading/UILoading';
import UIPage from '../UIPage/UIPage';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';

const PageTurmasResults = dynamic(
  () => import('../ExplorerPageTurmasResults/ExplorerPageTurmasResults'),
  {
    loading: () => <UILoading />,
  },
);

const ExplorerPageTurmasBase = () => {
  return (
    <>
      <UIPage>
        <Head>
          <title>{buildPageTitle('Turmas')}</title>
        </Head>

        <ExplorerLayoutMain>
          <PageTurmasResults />
        </ExplorerLayoutMain>
      </UIPage>
    </>
  );
};

export default ExplorerPageTurmasBase;

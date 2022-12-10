import Head from 'next/head';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import PainelLayoutMain from '../PainelLayoutMain/PainelLayoutMain';
import { PAINEL_PAGE_INSTITUICOES_BREADCRUMB_ITEMS } from './PAINEL_PAGE_INSTITUICOES_BREADCRUMB_ITEMS';
import PainelPageInstituicoesViewHeader from './PainelPageInstituicoesViewHeader';

import PainelLayoutBaseContainer from '../PainelLayoutBaseContainer/PainelLayoutBaseContainer';
import dynamic from 'next/dynamic';
import UILoading from '../UILoading/UILoading';

const PainelPageInstituicoesViewResultsTable = dynamic(
  () => import('./PainelPageInstituicoesViewResultsTable'),
  { loading: () => <UILoading color={'secondary'} /> },
);
const PainelPageInstituicoesBase = () => {
  return (
    <>
      <Head>
        <title>
          {buildPageTitle(['Instituições', 'Painel de Administração'])}
        </title>
      </Head>

      <PainelLayoutMain
        breadcrumbItems={PAINEL_PAGE_INSTITUICOES_BREADCRUMB_ITEMS}
      >
        <PainelLayoutBaseContainer>
          <PainelPageInstituicoesViewHeader />
          <PainelPageInstituicoesViewResultsTable />
        </PainelLayoutBaseContainer>
      </PainelLayoutMain>
    </>
  );
};

export default PainelPageInstituicoesBase;

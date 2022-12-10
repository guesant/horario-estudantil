import Head from 'next/head';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import PainelLayoutMain from '../PainelLayoutMain/PainelLayoutMain';
import { PAINEL_PAGE_INSTITUICOES_NOVO_BREADCRUMB_ITEMS } from './PAINEL_PAGE_INSTITUICOES_NOVO_BREADCRUMB_ITEMS';
import PainelPageInstituicoesNovoHeader from '../PainelPageInstituicoesNovoHeader/PainelPageInstituicoesNovoHeader';
import PainelLayoutBaseContainer from '../PainelLayoutBaseContainer/PainelLayoutBaseContainer';
import PainelPageInstituicoesNovoForm from '../PainelPageInstituicoesNovoForm/PainelPageInstituicoesNovoForm';

const PainelPageInstituicoesNovoBase = () => {
  return (
    <>
      <Head>
        <title>
          {buildPageTitle(['Nova Instituição', 'Painel de Administração'])}
        </title>
      </Head>

      <PainelLayoutMain
        breadcrumbItems={PAINEL_PAGE_INSTITUICOES_NOVO_BREADCRUMB_ITEMS}
      >
        <PainelLayoutBaseContainer>
          <PainelPageInstituicoesNovoHeader />

          <PainelPageInstituicoesNovoForm />
        </PainelLayoutBaseContainer>
      </PainelLayoutMain>
    </>
  );
};

export default PainelPageInstituicoesNovoBase;

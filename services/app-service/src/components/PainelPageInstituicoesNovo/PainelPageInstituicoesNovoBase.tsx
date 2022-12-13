import Head from 'next/head';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import PainelLayoutMain from '../PainelLayoutMain/PainelLayoutMain';
import { PAINEL_PAGE_INSTITUICOES_NOVO_BREADCRUMB_ITEMS } from './PAINEL_PAGE_INSTITUICOES_NOVO_BREADCRUMB_ITEMS';
import PainelPageInstituicoesNovoHeader from '../PainelPageInstituicoesNovoHeader/PainelPageInstituicoesNovoHeader';
import PainelLayoutBaseContainer from '../PainelLayoutBaseContainer/PainelLayoutBaseContainer';
import PainelInstituicaoInfoGeneralEdit from '../PainelInstituicaoInfoGeneralEdit/PainelInstituicaoInfoGeneralEdit';
import { PainelInstituicaoInfoGeneralEditContextProvider } from '../PainelInstituicaoInfoGeneralEdit/PainelInstituicaoInfoGeneralEditContext';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const PainelPageInstituicoesNovoBase = () => {
  const router = useRouter();

  const handleSave = useCallback(
    async ({ id }: { id: number }) => {
      await router.push(`/dashboard/instituicoes/${id}`);
    },
    [router],
  );

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

          <PainelInstituicaoInfoGeneralEditContextProvider
            handleSave={handleSave}
          >
            <PainelInstituicaoInfoGeneralEdit />
          </PainelInstituicaoInfoGeneralEditContextProvider>
        </PainelLayoutBaseContainer>
      </PainelLayoutMain>
    </>
  );
};

export default PainelPageInstituicoesNovoBase;

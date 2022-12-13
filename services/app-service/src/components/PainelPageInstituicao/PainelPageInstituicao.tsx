import Head from 'next/head';
import { IAppPage } from '../../etc/pages/IAppPage';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import PainelLayoutMain from '../PainelLayoutMain/PainelLayoutMain';
import PainelPageInstituicaoTabs from '../PainelPageInstituicaoTabs/PainelPageInstituicaoTabs';
import { PainelPageInstituicaoContextProvider } from './PainelPageInstituicaoContext';

const PainelPageInstituicao: IAppPage = () => {
  return (
    <>
      <PainelPageInstituicaoContextProvider>
        <Head>
          <title>
            {buildPageTitle(['Instituição', 'Painel de Administração'])}
          </title>
        </Head>

        <PainelLayoutMain>
          <PainelPageInstituicaoTabs />
        </PainelLayoutMain>
      </PainelPageInstituicaoContextProvider>
    </>
  );
};

PainelPageInstituicao.auth = true;

export default PainelPageInstituicao;

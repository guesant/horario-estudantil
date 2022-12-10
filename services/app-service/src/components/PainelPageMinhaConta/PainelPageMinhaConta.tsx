import Head from 'next/head';
import { IAppPage } from '../../etc/pages/IAppPage';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import PainelLayoutMain from '../PainelLayoutMain/PainelLayoutMain';

const PainelPageMinhaConta: IAppPage = () => {
  return (
    <>
      <Head>
        <title>
          {buildPageTitle(['Minha Conta', 'Painel de Administração'])}
        </title>
      </Head>

      <PainelLayoutMain>TBI.</PainelLayoutMain>
    </>
  );
};

PainelPageMinhaConta.auth = true;

export default PainelPageMinhaConta;

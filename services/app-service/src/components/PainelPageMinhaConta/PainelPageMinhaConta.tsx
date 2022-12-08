import Head from 'next/head';
import { IAppPage } from '../../etc/app/pages/IAppPage';
import { buildPageTitle } from '../../etc/app/skeleton/buildPageTitle';
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

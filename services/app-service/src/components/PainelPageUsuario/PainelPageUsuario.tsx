import Head from 'next/head';
import { IAppPage } from '../../etc/pages/IAppPage';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import PainelLayoutMain from '../PainelLayoutMain/PainelLayoutMain';

const PainelPageUsuario: IAppPage = () => {
  return (
    <>
      <Head>
        <title>{buildPageTitle(['Usuário', 'Painel de Administração'])}</title>
      </Head>

      <PainelLayoutMain>TBI.</PainelLayoutMain>
    </>
  );
};

PainelPageUsuario.auth = true;

export default PainelPageUsuario;

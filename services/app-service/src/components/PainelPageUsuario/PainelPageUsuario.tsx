import Head from 'next/head';
import { IAppPage } from '../../etc/app/pages/IAppPage';
import { buildPageTitle } from '../../etc/app/skeleton/buildPageTitle';
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

import Head from 'next/head';
import { IAppPage } from '../../etc/pages/IAppPage';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import PainelLayoutMain from '../PainelLayoutMain/PainelLayoutMain';

const PainelPageUsuarios: IAppPage = () => {
  return (
    <>
      <Head>
        <title>{buildPageTitle(['Usuários', 'Painel de Administração'])}</title>
      </Head>

      <PainelLayoutMain>TBI.</PainelLayoutMain>
    </>
  );
};

PainelPageUsuarios.auth = true;
export default PainelPageUsuarios;

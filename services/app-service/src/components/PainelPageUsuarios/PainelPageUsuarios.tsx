import Head from 'next/head';
import { IAppPage } from '../../etc/app/pages/IAppPage';
import { buildPageTitle } from '../../etc/app/skeleton/buildPageTitle';
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

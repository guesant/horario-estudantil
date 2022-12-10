import Head from 'next/head';
import { IAppPage } from '../../etc/pages/IAppPage';
import { buildPageTitle } from '../../etc/skeleton/buildPageTitle';
import PainelLayoutMain from '../PainelLayoutMain/PainelLayoutMain';

const PainelPageHome: IAppPage = () => {
  return (
    <>
      <Head>
        <title>{buildPageTitle(['Painel de Administração'])}</title>
      </Head>

      <PainelLayoutMain>TBI.</PainelLayoutMain>
    </>
  );
};

PainelPageHome.auth = true;

export default PainelPageHome;

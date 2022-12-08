import Head from 'next/head';
import { IAppPage } from '../../etc/app/pages/IAppPage';
import { buildPageTitle } from '../../etc/app/skeleton/buildPageTitle';
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

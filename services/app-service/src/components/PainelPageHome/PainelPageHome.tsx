import Head from 'next/head';
import { IAppPage } from '../../etc/domain/app/pages/IAppPage';
import { buildPageTitle } from '../../etc/domain/app/skeleton/buildPageTitle';

// export const getServerSideProps: GetServerSideProps = getSharedServerSideProps;

const PainelPageHome: IAppPage = () => {
  return (
    <>
      <Head>
        <title>{buildPageTitle(['Painel de Administração'])}</title>
      </Head>

      <main>pph</main>
    </>
  );
};

PainelPageHome.auth = true;

export default PainelPageHome;

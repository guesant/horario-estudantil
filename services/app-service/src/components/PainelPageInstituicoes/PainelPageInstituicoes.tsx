import Head from 'next/head';
import { IAppPage } from '../../etc/app/pages/IAppPage';
import { buildPageTitle } from '../../etc/app/skeleton/buildPageTitle';
import PainelLayoutMain from '../PainelLayoutMain/PainelLayoutMain';
import Typography from '@mui/material/Typography';

const PainelPageInstituicoes: IAppPage = () => {
  return (
    <>
      <Head>
        <title>
          {buildPageTitle(['Instituições', 'Painel de Administração'])}
        </title>
      </Head>

      <PainelLayoutMain>
        <Typography variant={'h4'}>Instituições</Typography>
      </PainelLayoutMain>
    </>
  );
};

PainelPageInstituicoes.auth = true;

export default PainelPageInstituicoes;

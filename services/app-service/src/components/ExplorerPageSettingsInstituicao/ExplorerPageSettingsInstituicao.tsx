import Head from 'next/head';
import { IAppPage } from '../../etc/app/pages/IAppPage';
import { buildPageTitle } from '../../etc/app/skeleton/buildPageTitle';
import ExplorerLayoutMain from '../ExplorerLayoutMain/ExplorerLayoutMain';
import ExplorerSelectInstituicao from '../ExplorerSelectInstituicao/ExplorerSelectInstituicao';

const ExplorerPageSettingsInstituicao: IAppPage = () => {
  return (
    <>
      <Head>
        <title>
          {buildPageTitle(['Selecionar Instituição', 'Configurações'])}
        </title>
      </Head>

      <ExplorerLayoutMain>
        <ExplorerSelectInstituicao />
      </ExplorerLayoutMain>
    </>
  );
};

export default ExplorerPageSettingsInstituicao;

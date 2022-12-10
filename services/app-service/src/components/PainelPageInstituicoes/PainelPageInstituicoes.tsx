import { IAppPage } from '../../etc/pages/IAppPage';
import PainelPageInstituicoesBase from './PainelPageInstituicoesBase';

const PainelPageInstituicoes: IAppPage = () => {
  return (
    <>
      <PainelPageInstituicoesBase />
    </>
  );
};

PainelPageInstituicoes.auth = true;

export default PainelPageInstituicoes;

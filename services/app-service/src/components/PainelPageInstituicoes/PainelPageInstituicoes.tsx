import { IAppPage } from '../../etc/pages/IAppPage';
import PainelPageInstituicoesBase from './PainelPageInstituicoesBase';
import { PainelPageInstituicoesContextProvider } from './PainelPageInstituicoesContext';

const PainelPageInstituicoes: IAppPage = () => {
  return (
    <>
      <PainelPageInstituicoesContextProvider>
        <PainelPageInstituicoesBase />
      </PainelPageInstituicoesContextProvider>
    </>
  );
};

PainelPageInstituicoes.auth = true;

export default PainelPageInstituicoes;

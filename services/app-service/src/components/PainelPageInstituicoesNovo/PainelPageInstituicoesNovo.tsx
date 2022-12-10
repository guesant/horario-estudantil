import { IAppPage } from '../../etc/pages/IAppPage';
import PainelPageInstituicoesNovoBase from './PainelPageInstituicoesNovoBase';

const PainelPageInstituicoesNovo: IAppPage = () => {
  return (
    <>
      <PainelPageInstituicoesNovoBase />
    </>
  );
};

PainelPageInstituicoesNovo.auth = true;

export default PainelPageInstituicoesNovo;

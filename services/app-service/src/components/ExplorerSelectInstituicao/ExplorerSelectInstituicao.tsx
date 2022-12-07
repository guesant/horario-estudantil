import ExplorerSelectInstituicaoBase from './ExplorerSelectInstituicaoBase';
import { PortalSelecionarInstituicaoContextProvider } from './ExplorerSelectInstituicaoContext';

const ExplorerSelectInstituicao = () => {
  return (
    <>
      <PortalSelecionarInstituicaoContextProvider>
        <ExplorerSelectInstituicaoBase />
      </PortalSelecionarInstituicaoContextProvider>
    </>
  );
};

export default ExplorerSelectInstituicao;

import PortalSelecionarInstituicaoBase from "./PortalSelecionarInstituicaoBase";
import { PortalSelecionarInstituicaoContextProvider } from "./PortalSelecionarInstituicaoContext";

const PortalSelecionarInstituicao = () => {
  return (
    <>
      <PortalSelecionarInstituicaoContextProvider>
        <PortalSelecionarInstituicaoBase />
      </PortalSelecionarInstituicaoContextProvider>
    </>
  );
};

export default PortalSelecionarInstituicao;

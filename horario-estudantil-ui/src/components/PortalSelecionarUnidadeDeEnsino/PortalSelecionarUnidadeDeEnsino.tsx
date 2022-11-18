import PortalSelecionarUnidadeDeEnsinoBase from "./PortalSelecionarUnidadeDeEnsinoBase";
import { PortalSelecionarUnidadeDeEnsinoContextProvider } from "./PortalSelecionarUnidadeDeEnsinoContext";

const PortalSelecionarUnidadeDeEnsino = () => {
  return (
    <>
      <PortalSelecionarUnidadeDeEnsinoContextProvider>
        <PortalSelecionarUnidadeDeEnsinoBase />
      </PortalSelecionarUnidadeDeEnsinoContextProvider>
    </>
  );
};

export default PortalSelecionarUnidadeDeEnsino;

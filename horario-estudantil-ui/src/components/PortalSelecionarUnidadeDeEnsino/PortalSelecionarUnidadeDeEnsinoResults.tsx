import Alert from "@mui/material/Alert";
import { useContext } from "react";
import { PortalSelecionarUnidadeDeEnsinoContext } from "./PortalSelecionarUnidadeDeEnsinoContext";
import PortalSelecionarUnidadeDeEnsinoResultsList from "./PortalSelecionarUnidadeDeEnsinoResultsList";

const PortalSelecionarUnidadeDeEnsinoResults = () => {
  const { isLoading, isError } = useContext(
    PortalSelecionarUnidadeDeEnsinoContext
  );

  if (isLoading) {
    return (
      <>
        <Alert severity="info">Buscando resultados...</Alert>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Alert severity="error">
          Não foi possível carregar os resultados no momento.
        </Alert>
      </>
    );
  }

  return (
    <>
      <PortalSelecionarUnidadeDeEnsinoResultsList />
    </>
  );
};

export default PortalSelecionarUnidadeDeEnsinoResults;

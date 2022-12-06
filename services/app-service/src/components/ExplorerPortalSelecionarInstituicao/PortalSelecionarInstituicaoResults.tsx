import Alert from "@mui/material/Alert";
import { useContext } from "react";
import { PortalSelecionarInstituicaoContext } from "./PortalSelecionarInstituicaoContext";
import PortalSelecionarInstituicaoResultsList from "./PortalSelecionarInstituicaoResultsList";

const PortalSelecionarInstituicaoResults = () => {
  const { isLoading, isError } = useContext(
    PortalSelecionarInstituicaoContext
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
      <PortalSelecionarInstituicaoResultsList />
    </>
  );
};

export default PortalSelecionarInstituicaoResults;

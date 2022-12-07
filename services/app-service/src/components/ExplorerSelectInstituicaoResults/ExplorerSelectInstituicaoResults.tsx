import Alert from '@mui/material/Alert';
import { useContext } from 'react';
import { ExplorerSelectInstituicaoContext } from '../ExplorerSelectInstituicao/ExplorerSelectInstituicaoContext';
import ExplorerSelectInstituicaoResultsList from './ExplorerSelectInstituicaoResultsList';

const ExplorerSelectInstituicaoResults = () => {
  const { isLoading, isError } = useContext(ExplorerSelectInstituicaoContext);

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
          Não foi possível carregar os resultados neste momento.
        </Alert>
      </>
    );
  }

  return (
    <>
      <ExplorerSelectInstituicaoResultsList />
    </>
  );
};

export default ExplorerSelectInstituicaoResults;

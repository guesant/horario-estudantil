import Alert from '@mui/material/Alert';
import React from 'react';

const ExplorerPageTurmasResultsFeedbackError = () => {
  return (
    <>
      <Alert severity={'error'}>
        Não foi possível buscar as turmas desta instituição.
      </Alert>
    </>
  );
};

export default ExplorerPageTurmasResultsFeedbackError;

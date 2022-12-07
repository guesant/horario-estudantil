import Alert from '@mui/material/Alert';
import React from 'react';

const ExplorerPageTurmasResultsFeedbackNoContent = () => {
  return (
    <>
      <Alert severity={'info'}>
        Nenhuma turma está associada a esta instituição.{' '}
      </Alert>
    </>
  );
};

export default ExplorerPageTurmasResultsFeedbackNoContent;

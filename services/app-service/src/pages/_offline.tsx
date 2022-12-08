import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Head from 'next/head';
import React from 'react';
import ExplorerUIContainer from '../components/ExplorerUIContainer';
import ExplorerLayoutBaseHeader from '../components/ExplorerLayoutBaseHeader';
import UIPage from '../components/UIPage/UIPage';
import { buildPageTitle } from '../etc/app/skeleton/buildPageTitle';

type Props = {};

const PageOffline = (props: Props) => {
  return (
    <>
      <UIPage>
        <Head>
          <title>{buildPageTitle('Sem Conexão à Internet')}</title>
        </Head>

        <ExplorerLayoutBaseHeader />

        <ExplorerUIContainer>
          <Box sx={{ my: 2 }}>
            <Typography variant="h2" sx={{ my: 2 }}>
              Sem Conexão à Internet
            </Typography>
            <Typography>
              Não podemos mostrar esta informação. Certifique-se de estar
              conectado à Internet.
            </Typography>
          </Box>
        </ExplorerUIContainer>
      </UIPage>
    </>
  );
};

export default PageOffline;

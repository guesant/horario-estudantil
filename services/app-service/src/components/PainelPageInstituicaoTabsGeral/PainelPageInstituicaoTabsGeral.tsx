import Box from '@mui/material/Box';
import { useContext } from 'react';
import { PainelPageInstituicaoContext } from '../PainelPageInstituicao/PainelPageInstituicaoContext';
import { PainelInstituicaoInfoGeneralContextProvider } from '../PainelInstituicaoInfoGeneral/PainelInstituicaoInfoGeneralContext';
import PainelInstituicaoInfoGeneralRender from '../PainelInstituicaoInfoGeneral/PainelInstituicaoInfoGeneralRender';

const PainelPageInstituicaoTabsGeral = () => {
  const { id_ins } = useContext(PainelPageInstituicaoContext);

  return (
    <>
      <Box sx={{ p: 5 }}>
        <PainelInstituicaoInfoGeneralContextProvider id_ins={id_ins}>
          <PainelInstituicaoInfoGeneralRender />
        </PainelInstituicaoInfoGeneralContextProvider>
      </Box>
    </>
  );
};

export default PainelPageInstituicaoTabsGeral;

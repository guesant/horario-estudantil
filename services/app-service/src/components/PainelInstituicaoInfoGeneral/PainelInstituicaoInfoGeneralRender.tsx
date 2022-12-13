import { useContext } from 'react';
import { PainelInstituicaoInfoGeneralContext } from './PainelInstituicaoInfoGeneralContext';
import { IPainelInstituicaoInfoGeneralMode } from './IPainelInstituicaoInfoGeneralMode';
import dynamic from 'next/dynamic';

const PainelInstituicaoInfoGeneralRenderEdit = dynamic(
  () => import('./PainelInstituicaoInfoGeneralRenderEdit'),
);

const PainelInstituicaoInfoGeneralRenderView = dynamic(
  () => import('./PainelInstituicaoInfoGeneralRenderView'),
);

const PainelInstituicaoInfoGeneralRender = () => {
  const { mode } = useContext(PainelInstituicaoInfoGeneralContext);

  if (mode === IPainelInstituicaoInfoGeneralMode.EDIT) {
    return (
      <>
        <PainelInstituicaoInfoGeneralRenderEdit />
      </>
    );
  }

  if (mode === IPainelInstituicaoInfoGeneralMode.VIEW) {
    return (
      <>
        <PainelInstituicaoInfoGeneralRenderView />
      </>
    );
  }

  return null;
};

export default PainelInstituicaoInfoGeneralRender;

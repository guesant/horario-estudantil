import { useContext} from 'react';
import { PainelInstituicaoInfoGeneralContext } from './PainelInstituicaoInfoGeneralContext';
import PainelInstituicaoInfoGeneralView from '../PainelInstituicaoInfoGeneralView/PainelInstituicaoInfoGeneralView';
import { PainelInstituicaoInfoGeneralViewContextProvider } from '../PainelInstituicaoInfoGeneralView/PainelInstituicaoInfoGeneralViewContext';
import { IPainelInstituicaoInfoGeneralMode } from './IPainelInstituicaoInfoGeneralMode';

const PainelInstituicaoInfoGeneralRenderView = () => {
  const { id_ins, setMode, handleDelete } = useContext(PainelInstituicaoInfoGeneralContext);

  return (
    <>
      <PainelInstituicaoInfoGeneralViewContextProvider
        id_ins={id_ins}
        handleDelete={handleDelete}
        handleEdit={() => setMode(IPainelInstituicaoInfoGeneralMode.EDIT)}
      >
        <PainelInstituicaoInfoGeneralView />
      </PainelInstituicaoInfoGeneralViewContextProvider>
    </>
  );
};

export default PainelInstituicaoInfoGeneralRenderView;

import { useContext } from 'react';
import { PainelInstituicaoInfoGeneralContext } from './PainelInstituicaoInfoGeneralContext';
import { PainelInstituicaoInfoGeneralEditContextProvider } from '../PainelInstituicaoInfoGeneralEdit/PainelInstituicaoInfoGeneralEditContext';
import PainelInstituicaoInfoGeneralEdit from '../PainelInstituicaoInfoGeneralEdit/PainelInstituicaoInfoGeneralEdit';
import { IPainelInstituicaoInfoGeneralMode } from './IPainelInstituicaoInfoGeneralMode';

const PainelInstituicaoInfoGeneralRenderEdit = () => {
  const { id_ins, setMode } = useContext(PainelInstituicaoInfoGeneralContext);

  const handleChangeMode = () => {
    setMode(IPainelInstituicaoInfoGeneralMode.VIEW);
  };

  return (
    <>
      <PainelInstituicaoInfoGeneralEditContextProvider
        id_ins={id_ins}
        handleSave={handleChangeMode}
        handleCancel={handleChangeMode}
      >
        <PainelInstituicaoInfoGeneralEdit />
      </PainelInstituicaoInfoGeneralEditContextProvider>
    </>
  );
};

export default PainelInstituicaoInfoGeneralRenderEdit;

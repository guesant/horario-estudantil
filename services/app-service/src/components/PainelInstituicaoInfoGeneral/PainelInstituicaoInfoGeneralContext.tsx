import { createContext, PropsWithChildren, useState } from 'react';
import { IPainelInstituicaoInfoGeneralMode } from './IPainelInstituicaoInfoGeneralMode';

type IPainelInstituicaoInfoGeneralContext = {
  id_ins: number;

  mode: IPainelInstituicaoInfoGeneralMode | null;

  setMode: (value: IPainelInstituicaoInfoGeneralMode | null) => void;
};

export const PainelInstituicaoInfoGeneralContext = createContext(
  {} as IPainelInstituicaoInfoGeneralContext,
);

export const PainelInstituicaoInfoGeneralContextProvider = (
  props: PropsWithChildren<{ id_ins: number }>,
) => {
  const { id_ins, children } = props;

  const [mode, setMode] = useState<IPainelInstituicaoInfoGeneralMode | null>(
    IPainelInstituicaoInfoGeneralMode.VIEW,
  );

  return (
    <PainelInstituicaoInfoGeneralContext.Provider
      value={{ id_ins, mode, setMode }}
    >
      {children}
    </PainelInstituicaoInfoGeneralContext.Provider>
  );
};

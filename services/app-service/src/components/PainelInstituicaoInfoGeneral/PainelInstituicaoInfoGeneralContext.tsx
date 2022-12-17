import { createContext, PropsWithChildren, useCallback, useState } from 'react';
import { IPainelInstituicaoInfoGeneralMode } from './IPainelInstituicaoInfoGeneralMode';
import { useMutation } from '@apollo/client';
import { DELETE_INSTITUICAO } from '../../graphql/mutations/DELETE_INSTITUICAO';
import { DeleteInstituicaoMutation } from '../../graphql/__generated__/graphql';
import { useRouter } from 'next/router';
import { router } from 'next/client';

type IPainelInstituicaoInfoGeneralContext = {
  id_ins: number;

  mode: IPainelInstituicaoInfoGeneralMode | null;

  setMode: (value: IPainelInstituicaoInfoGeneralMode | null) => void;

  handleDelete: () => Promise<void>;
};

export const PainelInstituicaoInfoGeneralContext = createContext(
  {} as IPainelInstituicaoInfoGeneralContext,
);

const DELETE_CONFIRM_MESSAGE =
  'Deseja realmente excluir esta instituição e tudo relacionado a ela?';

export const PainelInstituicaoInfoGeneralContextProvider = (
  props: PropsWithChildren<{ id_ins: number }>,
) => {
  const { id_ins, children } = props;

  const { push } = useRouter();

  const [mode, setMode] = useState<IPainelInstituicaoInfoGeneralMode | null>(
    IPainelInstituicaoInfoGeneralMode.VIEW,
  );

  const [deleteInstituicao] =
    useMutation<DeleteInstituicaoMutation>(DELETE_INSTITUICAO);

  const handleDelete = useCallback(async () => {
    if (confirm(DELETE_CONFIRM_MESSAGE)) {
      const success = await deleteInstituicao({ variables: { id: id_ins } });

      if (success) {
        await push('/dashboard/instituicoes');
      }
    }
  }, [deleteInstituicao, id_ins, push]);

  return (
    <PainelInstituicaoInfoGeneralContext.Provider
      value={{ id_ins, mode, setMode, handleDelete }}
    >
      {children}
    </PainelInstituicaoInfoGeneralContext.Provider>
  );
};

import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
} from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { instituicaoSchema } from '../../etc/zod/instituicaoSchema';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_INSTITUICAO } from '../../graphql/fragments/CREATE_INSTITUICAO';
import { INSTITUICAO_GENERAL_INFO } from '../../graphql/fragments/INSTITUICAO_GENERAL_INFO';
import { InstituicaoGeneralInfoQuery } from '../../graphql/__generated__/graphql';
import { UPDATE_INSTITUICAO } from '../../graphql/fragments/UPDATE_INSTITUICAO';

export type IPainelInstituicaoInfoGeneralEditContext = {
  canSubmit: boolean;

  isBusy: boolean;

  handleCancel: (() => void) | null;
};

export const PainelInstituicaoInfoGeneralEditContext = createContext(
  {} as IPainelInstituicaoInfoGeneralEditContext,
);

type IPainelInstituicaoInfoGeneralEditProviderProps = {
  id_ins?: number;

  handleCancel?: () => void;

  handleSave?: (options: { id: number }) => void;
};

type IFormData = Pick<
  InstituicaoGeneralInfoQuery['instituicao'],
  'nome' | 'apelido' | 'sigla'
>;

export const PainelInstituicaoInfoGeneralEditContextProvider: FC<
  PropsWithChildren<IPainelInstituicaoInfoGeneralEditProviderProps>
> = (props) => {
  const {
    children,
    id_ins = null,
    handleCancel = null,
    handleSave = null,
  } = props;

  const instituicaoQuery = useQuery<InstituicaoGeneralInfoQuery>(
    INSTITUICAO_GENERAL_INFO,
    {
      skip: !id_ins,
      variables: { id: id_ins },
      fetchPolicy: 'cache-and-network',
    },
  );

  const instituicaoQueryData = instituicaoQuery.data?.instituicao;

  const [createInstituicao] = useMutation(CREATE_INSTITUICAO);
  const [updateInstituicao] = useMutation(UPDATE_INSTITUICAO);

  const methods = useForm<IFormData>({
    mode: 'onChange',
    resolver: zodResolver(instituicaoSchema),
  });

  const { reset } = methods;

  const submitData = useCallback(
    async (id_ins: number | null, formData: IFormData) => {
      const { nome, apelido, sigla } = formData;

      const data = { nome, apelido, sigla };

      const runHandleSave = async (id: number) => handleSave?.({ id });

      if (id_ins === null) {
        const response = await createInstituicao({
          variables: { ...data },
        });

        const instituicao = response.data?.createInstituicao;

        if (instituicao) {
          const { id } = instituicao;
          await runHandleSave(id);
        }
      } else {
        await updateInstituicao({
          variables: { id: id_ins, ...data },
        });

        await runHandleSave(id_ins);
      }
    },
    [handleSave, createInstituicao, updateInstituicao],
  );

  const onSubmit = async (formData: IFormData) => {
    await submitData(id_ins, formData);
  };

  useEffect(() => {
    if (instituicaoQueryData) {
      reset(instituicaoQueryData);
    }
  }, [instituicaoQueryData, reset]);

  const isBusy =
    methods.formState.isValidating || methods.formState.isSubmitting;

  const canSubmit =
    !instituicaoQuery.loading &&
    methods.formState.isValid &&
    methods.formState.isDirty &&
    !isBusy;

  return (
    <PainelInstituicaoInfoGeneralEditContext.Provider
      value={{ canSubmit, isBusy, handleCancel }}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </PainelInstituicaoInfoGeneralEditContext.Provider>
  );
};

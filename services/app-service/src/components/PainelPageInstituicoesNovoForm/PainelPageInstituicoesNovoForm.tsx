import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { instituicaoSchema } from '../../etc/zod/instituicaoSchema';
import { useMutation } from '@apollo/client';
import { CREATE_INSTITUICAO } from '../../graphql/fragments/CREATE_INSTITUICAO';
import { FormField } from './FormField';
import { useRouter } from 'next/router';

const PainelPageInstituicoesNovoForm = () => {
  const router = useRouter();

  const [createInstituicao] = useMutation(CREATE_INSTITUICAO);

  const methods = useForm({
    resolver: zodResolver(instituicaoSchema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: any) => {
    const { nome, apelido, sigla } = formData;

    const response = await createInstituicao({
      variables: { nome, apelido, sigla },
    });

    const responseData = response.data;

    if (responseData) {
      const {
        createInstituicao: { id },
      } = responseData;

      await router.push(`/dashboard/instituicoes/${id}`);
    }
  };

  const canSubmit =
    methods.formState.isValid &&
    methods.formState.isDirty &&
    !methods.formState.isValidating &&
    !methods.formState.isSubmitting;

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box
            sx={(theme) => ({
              gap: 2,
              display: 'flex',
              flexDirection: 'column',
              maxWidth: theme.spacing(70),
            })}
          >
            <Box>
              <FormField
                field={'nome'}
                label={'Nome'}
                aboutText={'Nome completo desta instituição.'}
              />
            </Box>

            <Box>
              <FormField
                field={'apelido'}
                label={'Apelido'}
                aboutText="Nome abreviado."
              />
            </Box>

            <Box>
              <FormField
                field={'sigla'}
                label={'Sigla'}
                aboutText="A sigla é utilizada para identificar esta instituição, sem espaço e geralmente separada por hífens (-)."
              />
            </Box>

            <Box sx={{ display: 'flex' }}>
              <Box sx={{ flex: 1 }}></Box>

              <Button
                disableElevation
                type={'submit'}
                color={'secondary'}
                variant={'contained'}
                disabled={!canSubmit}
              >
                Salvar
              </Button>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </>
  );
};

export default PainelPageInstituicoesNovoForm;

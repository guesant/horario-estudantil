import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SaveIconRounded from '@mui/icons-material/SaveRounded';
import { UIFormField } from '../UIFormField/UIFormField';
import { useContext } from 'react';
import { PainelInstituicaoInfoGeneralEditContext } from './PainelInstituicaoInfoGeneralEditContext';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const PainelInstituicaoInfoGeneralEdit = () => {
  const { canSubmit, isBusy, handleCancel } = useContext(
    PainelInstituicaoInfoGeneralEditContext,
  );

  return (
    <>
      <Box
        sx={(theme) => ({
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: theme.spacing(70),
        })}
      >
        <Box>
          <UIFormField
            name={'nome'}
            label={'Nome'}
            aboutText={'Nome completo desta instituição.'}
          />
        </Box>

        <Box>
          <UIFormField
            name={'apelido'}
            label={'Apelido'}
            aboutText="Nome abreviado."
          />
        </Box>

        <Box>
          <UIFormField
            name={'sigla'}
            label={'Sigla'}
            aboutText="A sigla é utilizada para identificar esta instituição, sem espaço e geralmente separada por hífens (-)."
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box sx={{ flex: 1 }}></Box>

          {handleCancel && (
            <Button
              type={'button'}
              disableElevation
              color={'secondary'}
              disabled={isBusy}
              variant={'outlined'}
              onClick={handleCancel}
              startIcon={<CancelRoundedIcon />}
            >
              Cancelar
            </Button>
          )}

          <Button
            type={'submit'}
            disableElevation
            color={'secondary'}
            variant={'contained'}
            disabled={!canSubmit}
            startIcon={<SaveIconRounded />}
          >
            Salvar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PainelInstituicaoInfoGeneralEdit;

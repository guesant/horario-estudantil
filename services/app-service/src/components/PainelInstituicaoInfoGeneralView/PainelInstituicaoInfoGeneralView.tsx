import { Fragment, useContext, useMemo } from 'react';
import { PainelInstituicaoInfoGeneralViewContext } from './PainelInstituicaoInfoGeneralViewContext';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const PainelInstituicaoInfoGeneralView = () => {
  const { instituicaoData, handleEdit, handleDelete } = useContext(
    PainelInstituicaoInfoGeneralViewContext,
  );

  const FIELDS = useMemo(() => {
    if (!instituicaoData) {
      return [];
    }

    const { nome, apelido, sigla } = instituicaoData;

    return [
      {
        label: 'Nome',
        value: nome,
      },
      {
        label: 'Apelido',
        value: apelido,
      },
      {
        label: 'Sigla',
        value: sigla,
      },
    ];
  }, [instituicaoData]);

  if (!instituicaoData) {
    return null;
  }

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
        {FIELDS.map(({ label, value }) => (
          <Fragment key={label}>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ mb: 0.5 }} variant={'body2'}>
                {label}
              </Typography>

              <Typography variant={'body1'} fontWeight={'bold'}>
                {value}
              </Typography>
            </Box>
          </Fragment>
        ))}

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box sx={{ flex: 1 }}></Box>

          {handleDelete && (
            <Button
              type={'button'}
              disableElevation
              color={'error'}
              variant={'outlined'}
              onClick={handleDelete}
              startIcon={<DeleteRoundedIcon />}
            >
              Deletar
            </Button>
          )}

          {handleEdit && (
            <Button
              type={'button'}
              disableElevation
              color={'secondary'}
              variant={'contained'}
              onClick={handleEdit}
              startIcon={<EditRoundedIcon />}
            >
              Editar
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default PainelInstituicaoInfoGeneralView;

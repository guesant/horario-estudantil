import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PainelPageInstituicoesNovoHeader = () => {
  return (
    <>
      <Box
        sx={{
          gap: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography noWrap variant={'h4'}>
          Nova Instituição
        </Typography>
      </Box>
    </>
  );
};

export default PainelPageInstituicoesNovoHeader;

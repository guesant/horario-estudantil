import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const PainelPageInstituicoesHeader = () => {
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
          Instituições
        </Typography>

        <Box sx={{ flex: 1 }}></Box>

        <Button
          color={'secondary'}
          sx={{ flexShrink: 0 }}
          disableElevation
          variant="contained"
          LinkComponent={Link}
          startIcon={<AddRoundedIcon />}
          href={'/dashboard/instituicoes/novo'}
        >
          Novo
        </Button>
      </Box>
    </>
  );
};

export default PainelPageInstituicoesHeader;

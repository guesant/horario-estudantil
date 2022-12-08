import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { ExplorerContext } from '../ExplorerContext/ExplorerContext';
import { ExplorerSelectInstituicaoButtonSelectedInfos } from './ExplorerSelectInstituicaoButtonSelectedInfos';
import Link from 'next/link';
import { ExplorerDialogSelectInstituicaoContext } from '../ExplorerDialogSelectInstituicaoContext/ExplorerDialogSelectInstituicaoContext';

type IAppBotaoSelecionarInstituicaoProps = {
  ButtonProps?: ButtonProps;
};

const ExplorerSelectInstituicaoButton = (
  props: IAppBotaoSelecionarInstituicaoProps,
) => {
  const { ButtonProps } = props;
  const { sigla } = useContext(ExplorerContext);

  const { href, handleClick } = useContext(
    ExplorerDialogSelectInstituicaoContext,
  );

  return (
    <>
      <Button
        href={href}
        color="inherit"
        startIcon={<LocationOnIcon />}
        endIcon={<ArrowDropDownIcon />}
        LinkComponent={Link}
        {...ButtonProps}
        onClick={handleClick}
        sx={{
          py: 1,
          px: 2,

          fontWeight: 'bold',
          textTransform: 'none',

          borderRadius: '0.625rem',

          fontSize: {
            sm: '1rem',
            xs: '0.875rem',
          },

          maxWidth: '100%',

          ...ButtonProps?.sx,
        }}
      >
        <Box
          sx={{
            flex: 1,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {sigla === null && 'Selecionar Instituição'}
          {sigla !== null && <ExplorerSelectInstituicaoButtonSelectedInfos />}
        </Box>
      </Button>
    </>
  );
};

export default ExplorerSelectInstituicaoButton;

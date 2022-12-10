import Box from '@mui/material/Box';
import UILink from '../UILink';
import LogoIcon from '@mui/icons-material/CalendarMonthRounded';
import Typography from '@mui/material/Typography';

export type IUIHeaderBrandProps = {
  href?: string;
  component?: any;
};

const UIHeaderBrand = (props: IUIHeaderBrandProps) => {
  const { href = '/', component = UILink } = props;

  return (
    <>
      <Box
        href={href}
        component={component}
        sx={{
          display: 'flex',
          color: 'inherit',
          alignItems: 'center',
          justifySelf: 'start',
          textDecoration: 'none',
        }}
      >
        <LogoIcon sx={{ mr: 1 }} />

        <Typography
          noWrap
          variant="h6"
          component="div"
          sx={{ color: 'inherit', textDecoration: 'none' }}
        >
          Horário Estudantil
        </Typography>
      </Box>
    </>
  );
};

export default UIHeaderBrand;

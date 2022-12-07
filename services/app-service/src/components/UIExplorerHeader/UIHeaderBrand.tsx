import Box from "@mui/material/Box";
import UIExplorerLink from "../UIExplorerLink";
import LogoIcon from "@mui/icons-material/CalendarMonth";
import Typography from "@mui/material/Typography";

const UIHeaderBrand = () => {
  return <>
    <Box
      href="/"
      component={UIExplorerLink}
      sx={{
        display: 'flex',
        color: 'inherit',
        alignItems: 'center',
        justifySelf: 'start',
        textDecoration: 'none',
      }}
    >
      <LogoIcon sx={{mr: 1}}/>

      <Typography
        noWrap
        variant="h6"
        sx={{color: 'inherit', textDecoration: 'none'}}
      >
        Horário Estudantil
      </Typography>
    </Box>
  </>
}

export default UIHeaderBrand
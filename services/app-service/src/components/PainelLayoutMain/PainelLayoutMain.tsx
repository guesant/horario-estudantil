import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import PainelLayoutBaseHeader from '../PainelLayoutBaseHeader';
import PainelLayoutMainNavigationDrawer from './PainelLayoutMainNavigationDrawer';

const drawerWidth = 240;

export type IPainelLayoutMainProps = {
  children?: any;
};

const PainelLayoutMain = (props: IPainelLayoutMainProps) => {
  const { children } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => void setMobileOpen(!mobileOpen);

  const drawer = <PainelLayoutMainNavigationDrawer />;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <PainelLayoutBaseHeader
        AppBarProps={{
          position: 'fixed',
          color: 'secondary' as any,
          sx: {
            ml: { sm: `${drawerWidth}px` },
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          },
        }}
        beforeBrand={
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </>
        }
      />

      <Box
        component="nav"
        aria-label="mailbox folders"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          open={mobileOpen}
          variant="temporary"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        sx={{
          p: 3,
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        component="main"
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};

export default PainelLayoutMain;

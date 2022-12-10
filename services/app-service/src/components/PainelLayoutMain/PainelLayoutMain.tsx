import * as React from 'react';
import { createElement } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuRounded';
import Toolbar from '@mui/material/Toolbar';
import PainelLayoutBaseHeader from '../PainelLayoutBaseHeader';
import PainelLayoutMainNavigationDrawer from './PainelLayoutMainNavigationDrawer';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MUILink from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { IPainelLayoutBreadcrumbItem } from './IPainelLayoutBreadcrumbItem';
import UILink from '../UILink';

const drawerWidth = 240;

export type IPainelLayoutMainProps = {
  children?: any;

  breadcrumbItems?: IPainelLayoutBreadcrumbItem[];
};

const PainelLayoutMain = (props: IPainelLayoutMainProps) => {
  const { children, breadcrumbItems } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => void setMobileOpen(!mobileOpen);

  const drawer = <PainelLayoutMainNavigationDrawer />;

  return (
    <>
      <Box
        sx={{ display: 'flex', flex: 1, height: '100%', overflow: 'hidden' }}
      >
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
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'column',
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          <Box
            sx={{
              flex: 1,
              height: '100%',
              display: 'flex',
              overflow: 'auto',
              flexDirection: 'column',
            }}
          >
            {breadcrumbItems && (
              <>
                <Box sx={{ mx: 3, my: 2 }}>
                  <Breadcrumbs aria-label="breadcrumb">
                    {breadcrumbItems.map((breadcrumbItem, idx, arr) => {
                      const isLastItem = idx === arr.length - 1;

                      const { label, icon, href } = breadcrumbItem;

                      const key = label;

                      const content = (
                        <>
                          {icon &&
                            createElement(icon, {
                              sx: { mr: 0.5 },
                              fontSize: 'inherit',
                            })}

                          {label}
                        </>
                      );

                      if (href && !isLastItem) {
                        return (
                          <MUILink
                            key={key}
                            href={href}
                            color="inherit"
                            component={UILink}
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                          >
                            {content}
                          </MUILink>
                        );
                      }

                      return (
                        <Typography
                          key={key}
                          color="text.primary"
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          {content}
                        </Typography>
                      );
                    })}
                  </Breadcrumbs>
                </Box>

                <Divider />
              </>
            )}

            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PainelLayoutMain;

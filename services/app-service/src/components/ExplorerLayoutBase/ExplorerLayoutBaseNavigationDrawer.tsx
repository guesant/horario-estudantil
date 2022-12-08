import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import UILink from '../UILink';
import { createElement, useMemo } from 'react';
import { IExplorerLayoutBaseAction } from '../ExplorerLayoutBaseAction/IExplorerLayoutBaseAction';
import { useRouteMatch } from '../../hooks/useRouteMatch';
import ExplorerSelectInstituicaoButton from '../ExplorerSelectInstituicaoButton/ExplorerSelectInstituicaoButton';

export type IExplorerLayoutBaseNavigationDrawer = {
  actions?: IExplorerLayoutBaseAction[];
};

const drawerWidth = {
  lg: 280,
  md: 240,
  sm: 230,
};

const ExplorerLayoutBaseNavigationDrawer = (
  props: IExplorerLayoutBaseNavigationDrawer,
) => {
  const { match } = useRouteMatch();

  const { actions = [] } = props;

  const navActions = useMemo(() => actions, [actions]);

  return (
    <>
      <Drawer
        open
        anchor="left"
        variant="permanent"
        sx={{
          height: '100%',
          width: drawerWidth,

          '& .MuiDrawer-paper': {
            position: 'static',
            width: drawerWidth,
            boxSizing: 'border-box',
            borderLeft: '1px solid',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        <Divider />

        <List
          sx={{
            py: 2,
            gap: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ListItem sx={{ px: 2 }} disablePadding>
            <ExplorerSelectInstituicaoButton
              ButtonProps={{
                variant: 'outlined',
                color: 'success',
                sx: { px: 2.5, py: 1.5 },
                size: 'large',
                fullWidth: true,
              }}
            />
          </ListItem>

          <Box>
            <Divider sx={{ my: 1 }} />
          </Box>

          {navActions.map((action, idx) => {
            if (action.type === 'item') {
              const { isMatched, realTarget } = match(
                action?.route?.target ?? null,
              );

              if (!realTarget) {
                return null;
              }

              return (
                <ListItem sx={{ px: 2 }} key={action.label} disablePadding>
                  <UILink
                    href={realTarget}
                    style={{
                      width: '100%',
                      color: 'inherit',
                      display: 'block',
                      textDecoration: 'none',
                    }}
                  >
                    <ListItemButton
                      disableRipple
                      selected={isMatched}
                      sx={{ borderRadius: 2 }}
                    >
                      <ListItemIcon>{createElement(action.icon)}</ListItemIcon>
                      <ListItemText primary={action.label} />
                    </ListItemButton>
                  </UILink>
                </ListItem>
              );
            }

            if (action.type === 'space') {
              return <Box key={idx} sx={{ flex: 1 }} />;
            }

            if (action.type === 'divider') {
              return (
                <Box key={idx}>
                  <Divider sx={{ my: 1 }} />
                </Box>
              );
            }

            return null;
          })}
        </List>
      </Drawer>
    </>
  );
};

export default ExplorerLayoutBaseNavigationDrawer;

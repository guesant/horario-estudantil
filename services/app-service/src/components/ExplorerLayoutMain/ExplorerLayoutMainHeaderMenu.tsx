import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuList from '@mui/material/MenuList';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import Link from 'next/link';
import { EXPLORER_LAYOUT_MAIN_ITEM_HEIGHT } from './EXPLORER_LAYOUT_MAIN_ITEM_HEIGHT';

const ExplorerLayoutMainHeaderMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/*<IconButton color="inherit">*/}
      {/*  <SearchIcon />*/}
      {/*</IconButton>*/}

      <IconButton onClick={handleClick} color="inherit">
        <MoreVertIcon />
      </IconButton>

      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          style: {
            maxHeight: EXPLORER_LAYOUT_MAIN_ITEM_HEIGHT * 4.5,
          },
        }}
      >
        <MenuList>
          <Link
            href="/dashboard"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <MenuItem>
              {/*<ListItemIcon>*/}
              {/*  <SettingsIcon/>*/}
              {/*</ListItemIcon>*/}
              <ListItemText>Painel de Administração</ListItemText>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default ExplorerLayoutMainHeaderMenu;

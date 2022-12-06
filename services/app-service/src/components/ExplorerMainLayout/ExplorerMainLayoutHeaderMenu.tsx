import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import MenuList from "@mui/material/MenuList";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import {ITEM_HEIGHT} from "../UIExplorerHeader/UIExplorerHeader";
import Link from "next/link";

const ExplorerMainLayoutHeaderMenu = () => {
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
      <IconButton color="inherit">
        <SearchIcon/>
      </IconButton>

      <IconButton onClick={handleClick} color="inherit">
        <MoreVertIcon/>
      </IconButton>

      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
          },
        }}
      >
        <MenuList>
          <Link
            href="/painel"
            style={{textDecoration: "none", color: "inherit"}}
          >
            <MenuItem>
              {/*<ListItemIcon>*/}
              {/*  <SettingsIcon/>*/}
              {/*</ListItemIcon>*/}
              <ListItemText>Painel Administrativo</ListItemText>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default ExplorerMainLayoutHeaderMenu;

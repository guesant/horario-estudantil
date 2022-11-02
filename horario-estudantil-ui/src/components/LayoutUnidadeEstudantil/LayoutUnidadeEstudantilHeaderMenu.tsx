import EditLocationIcon from "@mui/icons-material/EditLocation";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import MenuList from "@mui/material/MenuList";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { ITEM_HEIGHT } from "../AppHeader/AppHeader";
import Link from "next/link";

const LayoutUnidadeEstudantilHeaderMenu = () => {
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
        <SearchIcon />
      </IconButton>

      <IconButton onClick={handleClick} color="inherit">
        <MoreVertIcon />
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
        <MenuList dense>
          <Link style={{ textDecoration: "none", color: "inherit" }} href="/">
            <MenuItem>
              <ListItemIcon>
                <EditLocationIcon />
              </ListItemIcon>
              <ListItemText>Alterar Unidade</ListItemText>
            </MenuItem>
          </Link>

          <Divider />

          <Link
            href="/configuracoes"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>

              <ListItemText>Configurações</ListItemText>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default LayoutUnidadeEstudantilHeaderMenu;

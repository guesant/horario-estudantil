import EditLocationIcon from "@mui/icons-material/EditLocation";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuList from "@mui/material/MenuList";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { ITEM_HEIGHT } from "../AppHeader/AppHeader";

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
      <IconButton onClick={handleClick} color="inherit">
        <MoreVertIcon />
      </IconButton>

      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: {
            // minWidth: "100%",
            // width: "20ch",
            maxHeight: ITEM_HEIGHT * 4.5,
          },
        }}
      >
        <MenuList dense>
          <MenuItem disableRipple>
            <ListItemIcon>
              <EditLocationIcon />
            </ListItemIcon>
            <ListItemText>Alterar Unidade</ListItemText>
          </MenuItem>

          <Divider />

          <MenuItem disableRipple>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText>Configurações</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default LayoutUnidadeEstudantilHeaderMenu;

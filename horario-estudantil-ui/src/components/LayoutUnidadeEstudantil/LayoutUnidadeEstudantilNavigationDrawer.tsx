import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {
  ActionDisplay,
  getActions,
  useActionRouter,
} from "./LAYOUT_UNIDADE_ESTUDANTIL_ACTIONS";
import { drawerWidth } from "./LayoutUnidadeEstudantil";
import Link from "next/link";

const LayoutUnidadeEstudantilNavigationDrawer = () => {
  const { match } = useActionRouter();

  return (
    <>
      <Drawer
        open
        anchor="left"
        variant="permanent"
        sx={{
          height: "100%",
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            position: "static",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Divider />

        <List
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            gap: 0.5,
          }}
        >
          {getActions(ActionDisplay.DESKTOP).map((action, idx) => {
            if (action.type === "item") {
              const { isMatch, realTarget } = match(action);

              return (
                <ListItem key={action.label} disablePadding>
                  <Link
                    href={realTarget ?? "#"}
                    style={{
                      width: "100%",
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <ListItemButton
                      disableRipple
                      selected={isMatch}
                      sx={{ borderRadius: 2 }}
                    >
                      <ListItemIcon>{action.icon}</ListItemIcon>
                      <ListItemText primary={action.label} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            }

            if (action.type === "space") {
              return <Box key={idx} sx={{ flex: 1 }} />;
            }

            return null;
          })}
        </List>
      </Drawer>
    </>
  );
};

export default React.memo(LayoutUnidadeEstudantilNavigationDrawer);

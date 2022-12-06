import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppLink from "../AppLink";
import { useMemo } from "react";
import { IAction } from "./interfaces/IAction";
import { useActionRouter } from "./interfaces/useActionRouter";

export type LayoutBaseNavigationDrawerProps = {
  actions?: IAction[];
};

const drawerWidth = {
  lg: 280,
  md: 240,
  sm: 230,
};

const LayoutBaseNavigationDrawer = (props: LayoutBaseNavigationDrawerProps) => {
  const { match } = useActionRouter();

  const { actions = [] } = props;

  const navActions = useMemo(() => actions, [actions]);

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
            borderLeft: "1px solid",
            borderRight: "1px solid",
            borderColor: "divider",
          },
        }}
      >
        <Divider />

        <List
          sx={{
            py: 2,
            gap: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navActions.map((action, idx) => {
            if (action.type === "item") {
              const { isMatch, realTarget } = match(action);

              return (
                <ListItem sx={{ px: 2 }} key={action.label} disablePadding>
                  <AppLink
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
                  </AppLink>
                </ListItem>
              );
            }

            if (action.type === "space") {
              return <Box key={idx} sx={{ flex: 1 }} />;
            }

            if (action.type === "divider") {
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

export default LayoutBaseNavigationDrawer;

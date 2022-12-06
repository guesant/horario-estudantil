// import LogoIcon from "@mui/icons-material/Today";
import LogoIcon from "@mui/icons-material/CalendarMonth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import AppContainer from "../AppContainer";
import AppLink from "../AppLink/AppLink";
import AppHeaderSearch from "./AppHeaderSearch";

export const ITEM_HEIGHT = 48;

export type AppHeaderProps = {
  menu?: ReactNode;
};

const AppHeader = (props: AppHeaderProps) => {
  const { menu } = props;

  return (
    <>
      <AppBar color={"success" as any} position="static" elevation={0}>
        <AppContainer>
          <Toolbar
            disableGutters
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              justifyContent: { xs: "space-between", sm: "normal" },
            }}
          >
            <Box
              href="/"
              component={AppLink}
              sx={{
                // flex: 1,

                display: "flex",
                alignItems: "center",
                // justifyContent: "center",

                // gridRow: "1/-1",
                // gridColumn: "1/-1",

                justifySelf: "start",

                // justifySelf: {
                //   xs: "center",
                //   sm: "start",
                // },

                textDecoration: "none",
                color: "inherit",
              }}
            >
              <LogoIcon sx={{ mr: 1 }} />
              <Typography
                noWrap
                variant="h6"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Horário Estudantil
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <AppHeaderSearch />
            </Box>

            <Box
              sx={{
                gridColumn: "-2/-1",
                gridRow: "1/-1",
                display: { xs: "initial", sm: "none" },
              }}
            >
              {menu}
            </Box>
          </Toolbar>
        </AppContainer>
      </AppBar>
    </>
  );
};

export default AppHeader;

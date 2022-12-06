import Button from "@mui/material/Button";
import LogoIcon from "@mui/icons-material/CalendarMonth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {ReactNode} from "react";
import AppContainer from "../UIExplorerContainer";
import UIExplorerLink from "../UIExplorerLink/UIExplorerLink";
import AppHeaderSearch from "./AppHeaderSearch";
import Link from "next/link";

export const ITEM_HEIGHT = 48;

export type AppHeaderProps = {
  menu?: ReactNode;
};

const UIExplorerHeader = (props: AppHeaderProps) => {
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
              justifyContent: {xs: "space-between", sm: "normal"},
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifySelf: "start",
              }}
            >
              <Box href="/" component={UIExplorerLink}
                   sx={{
                     display: "flex",
                     alignItems: "center",
                     justifySelf: "start",
                     textDecoration: "none",
                     color: "inherit",
                   }}
              >
                <LogoIcon sx={{mr: 1}}/>
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

              <Box sx={{display: {xs: "none", sm: "block"}}}>
                <AppHeaderSearch />
              </Box>
            </Box>


            <Box
              sx={{
                gridRow: "1/-1",
                gridColumn: "-2/-1",
                display: {xs: "initial", sm: "none"},
              }}
            >
              {menu}
            </Box>

            <Button component={Link} href={"/painel"} color="inherit">Painel Administrativo</Button>
          </Toolbar>
        </AppContainer>
      </AppBar>
    </>
  );
};

export default UIExplorerHeader;

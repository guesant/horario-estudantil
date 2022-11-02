import Box from "@mui/material/Box";
import * as React from "react";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";
import AppPageContent from "../AppPageContent/AppPageContent";
import LayoutUnidadeEstudantilNavigationDrawer from "./LayoutUnidadeEstudantilNavigationDrawer";
import LayoutUnidadeEstudantilSubHeader from "./LayoutUnidadeEstudantilSubHeader";
import LayoutUnidadeEstudantilNavigationTabs from "./LayoutUnidadeEstudantilNavigationTabs";
import LayoutUnidadeEstudantilHeaderMenu from "./LayoutUnidadeEstudantilHeaderMenu";

export const drawerWidth = 260;

type Props = {
  children: React.ReactNode;
};

const LayoutUnidadeEstudantil = (props: Props) => {
  const { children } = props;

  return (
    <>
      <AppHeader menu={<LayoutUnidadeEstudantilHeaderMenu />} />

      <AppPageContent>
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <LayoutUnidadeEstudantilSubHeader />

          <Box sx={{ overflow: "auto", height: "100%" }}>
            <AppContainer disableGutters sx={{ height: "100%" }}>
              <Box
                sx={{
                  height: "100%",
                  display: "grid",
                  gridTemplateRows: "1fr auto",
                  gridTemplateColumns: "auto 1fr",
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    gridRow: "1/-1",
                    gridColumn: "1/2",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <LayoutUnidadeEstudantilNavigationDrawer />
                </Box>

                <Box sx={{ gridColumnEnd: "-1" }}>{children}</Box>

                <Box
                  sx={{
                    gridRow: "2/-1",
                    gridColumn: "1/-1",
                    display: { xs: "block", sm: "none" },
                  }}
                >
                  <LayoutUnidadeEstudantilNavigationTabs />
                </Box>
              </Box>
            </AppContainer>
          </Box>
        </Box>
      </AppPageContent>
    </>
  );
};

export default LayoutUnidadeEstudantil;

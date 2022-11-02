import AppHeader, { AppHeaderProps } from "../AppHeader";
import AppPage from "../AppPage/AppPage";
import AppPageContent from "../AppPageContent/AppPageContent";
import LayoutBaseSubHeader, {
  ILayoutBaseSubHeaderProps,
} from "./LayoutBaseSubHeader";
import Box from "@mui/material/Box";
import AppContainer from "../AppContainer";
import LayoutBaseNavigationDrawer, {
  LayoutBaseNavigationDrawerProps,
} from "./LayoutBaseNavigationDrawer";
import LayoutBaseNavigationTabs, {
  ILayoutBaseNavigationTabsProps,
} from "./LayoutBaseNavigationTabs";
import { ListSubheaderProps } from "@mui/material";
import { ActionDisplay, IAction } from "./interfaces/IAction";
import { useMemo } from "react";
import { getActionsForDisplay } from "./interfaces/getActionsForDisplay";

export type LayoutBaseProps = {
  AppHeaderProps?: AppHeaderProps;

  SubHeaderProps?: ILayoutBaseSubHeaderProps;

  NavigationDrawerProps?: LayoutBaseNavigationDrawerProps;

  NavigationTabsProps?: ILayoutBaseNavigationTabsProps;

  navigationActions?: IAction[];

  children?: React.ReactNode;
};

const LayoutBase = (props: LayoutBaseProps) => {
  const {
    AppHeaderProps,
    SubHeaderProps,
    NavigationDrawerProps,
    NavigationTabsProps,
    children,
    navigationActions = [],
  } = props;

  const navigationDrawerActions = useMemo(
    () =>
      NavigationDrawerProps?.actions ??
      getActionsForDisplay(navigationActions, ActionDisplay.DRAWER),
    [NavigationDrawerProps, navigationActions]
  );

  const navigationTabsActions = useMemo(
    () =>
      NavigationTabsProps?.actions ??
      getActionsForDisplay(navigationActions, ActionDisplay.TABS),
    [NavigationTabsProps, navigationActions]
  );

  return (
    <>
      <AppPage>
        <AppHeader {...AppHeaderProps} />

        <AppPageContent>
          <Box
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <LayoutBaseSubHeader {...SubHeaderProps} />

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
                    <LayoutBaseNavigationDrawer
                      {...NavigationDrawerProps}
                      actions={navigationDrawerActions}
                    />
                  </Box>

                  <Box sx={{ gridColumnEnd: "-1" }}>{children}</Box>

                  <Box
                    sx={{
                      gridRow: "2/-1",
                      gridColumn: "1/-1",
                      display: { xs: "block", sm: "none" },
                    }}
                  >
                    <LayoutBaseNavigationTabs
                      {...NavigationTabsProps}
                      actions={navigationTabsActions}
                    />
                  </Box>
                </Box>
              </AppContainer>
            </Box>
          </Box>
        </AppPageContent>
      </AppPage>
    </>
  );
};

export default LayoutBase;

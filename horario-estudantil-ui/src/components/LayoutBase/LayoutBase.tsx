import Box from "@mui/material/Box";
import { useMemo } from "react";
import AppContainer from "../AppContainer";
import AppHeader, { AppHeaderProps } from "../AppHeader";
import AppPage from "../AppPage/AppPage";
import AppPageContent from "../AppPageContent/AppPageContent";
import { getActionsForDisplay } from "./interfaces/getActionsForDisplay";
import { ActionDisplay, IAction } from "./interfaces/IAction";
import LayoutBaseNavigationDrawer, {
  LayoutBaseNavigationDrawerProps,
} from "./LayoutBaseNavigationDrawer";
import LayoutBaseNavigationTabs, {
  ILayoutBaseNavigationTabsProps,
} from "./LayoutBaseNavigationTabs";
import LayoutBaseSubHeader, {
  ILayoutBaseSubHeaderProps,
} from "./LayoutBaseSubHeader";

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
            sx={{
              height: "100%",
              display: "flex",
              overflow: "hidden",
              flexDirection: "column",
            }}
          >
            <LayoutBaseSubHeader {...SubHeaderProps} />

            <AppContainer
              disableGutters
              sx={{ height: "100%", overflow: "hidden" }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  overflow: "hidden",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <LayoutBaseNavigationDrawer
                    {...NavigationDrawerProps}
                    actions={navigationDrawerActions}
                  />
                </Box>

                <Box
                  sx={{
                    flex: "1 1",
                    overflow: "auto",

                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {children}
                </Box>

                <Box
                  sx={{
                    flexShrink: 0,
                    display: { xs: "block", md: "none" },
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
        </AppPageContent>
      </AppPage>
    </>
  );
};

export default LayoutBase;

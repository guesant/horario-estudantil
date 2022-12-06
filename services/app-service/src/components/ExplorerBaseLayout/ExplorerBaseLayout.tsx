import Box from "@mui/material/Box";
import {useMemo} from "react";
import AppContainer from "../UIExplorerContainer";
import UIExplorerHeader, {AppHeaderProps} from "../UIExplorerHeader";
import AppPage from "../UIExplorerPage/AppPage";
import AppPageContent from "../UIExplorerPageContent/AppPageContent";
import {getActionsForDisplay} from "./interfaces/getActionsForDisplay";
import {ActionDisplay, IAction} from "./interfaces/IAction";
import ExplorerBaseLayoutNavigationDrawer, {LayoutBaseNavigationDrawerProps,} from "./ExplorerBaseLayoutNavigationDrawer";
import ExplorerBaseLayoutNavigationTabs, {ILayoutBaseNavigationTabsProps,} from "./ExplorerBaseLayoutNavigationTabs";
import ExplorerBaseLayoutSubHeader, {ILayoutBaseSubHeaderProps,} from "./ExplorerBaseLayoutSubHeader";

export type LayoutBaseProps = {
  children?: React.ReactNode;

  AppHeaderProps?: AppHeaderProps;

  SubHeaderProps?: ILayoutBaseSubHeaderProps;

  NavigationDrawerProps?: LayoutBaseNavigationDrawerProps;

  NavigationTabsProps?: ILayoutBaseNavigationTabsProps;

  navigationActions?: IAction[];
};

const ExplorerBaseLayout = (props: LayoutBaseProps) => {
  const {
    children,
    AppHeaderProps,
    SubHeaderProps,
    NavigationDrawerProps,
    NavigationTabsProps,
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
        <UIExplorerHeader {...AppHeaderProps} />

        <AppPageContent>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              overflow: "hidden",
              flexDirection: "column",
            }}
          >
            <ExplorerBaseLayoutSubHeader {...SubHeaderProps} />

            <AppContainer
              disableGutters
              sx={{height: "100%", overflow: "hidden"}}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  overflow: "hidden",
                  flexDirection: {xs: "column", md: "row"},
                }}
              >
                <Box
                  sx={{
                    display: {xs: "none", md: "block"},
                  }}
                >
                  <ExplorerBaseLayoutNavigationDrawer
                    {...NavigationDrawerProps}
                    actions={navigationDrawerActions}
                  />
                </Box>

                <Box
                  sx={{
                    flex: "1 1",
                    display: "flex",
                    overflow: "auto",
                    flexDirection: "column",
                  }}
                >
                  {children}
                </Box>

                <Box
                  sx={{
                    flexShrink: 0,
                    display: {xs: "block", md: "none"},
                  }}
                >
                  <ExplorerBaseLayoutNavigationTabs
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

export default ExplorerBaseLayout;

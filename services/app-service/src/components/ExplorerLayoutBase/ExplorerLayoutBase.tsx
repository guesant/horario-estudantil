import Box from '@mui/material/Box';
import { useMemo } from 'react';
import ExplorerUIContainer from '../ExplorerUIContainer';
import ExplorerLayoutBaseHeader, {
  IExplorerLayoutBaseHeader,
} from '../ExplorerLayoutBaseHeader';
import UIPage from '../UIPage/UIPage';
import UIPageContent from '../UIPageContent/UIPageContent';
import { getActionsForDisplay } from './interfaces/getActionsForDisplay';
import { ActionDisplay, IAction } from './interfaces/IAction';
import ExplorerLayoutBaseNavigationDrawer, {
  IExplorerLayoutBaseNavigationDrawer,
} from './ExplorerLayoutBaseNavigationDrawer';
import ExplorerLayoutBaseNavigationTabs, {
  IExplorerLayoutBaseNavigationTabsProps,
} from './ExplorerLayoutBaseNavigationTabs';
import ExplorerLayoutBaseSubHeader, {
  IExplorerLayoutBaseSubHeaderProps,
} from './ExplorerLayoutBaseSubHeader';

export type IExplorerLayoutBaseProps = {
  children?: React.ReactNode;

  HeaderProps?: IExplorerLayoutBaseHeader;

  SubHeaderProps?: IExplorerLayoutBaseSubHeaderProps;

  NavigationDrawerProps?: IExplorerLayoutBaseNavigationDrawer;

  NavigationTabsProps?: IExplorerLayoutBaseNavigationTabsProps;

  navigationActions?: IAction[];
};

const ExplorerLayoutBase = (props: IExplorerLayoutBaseProps) => {
  const {
    children,
    HeaderProps,
    SubHeaderProps,
    NavigationTabsProps,
    NavigationDrawerProps,
    navigationActions = [],
  } = props;

  const navigationDrawerActions = useMemo(
    () =>
      NavigationDrawerProps?.actions ??
      getActionsForDisplay(navigationActions, ActionDisplay.DRAWER),
    [NavigationDrawerProps, navigationActions],
  );

  const navigationTabsActions = useMemo(
    () =>
      NavigationTabsProps?.actions ??
      getActionsForDisplay(navigationActions, ActionDisplay.TABS),
    [NavigationTabsProps, navigationActions],
  );

  return (
    <>
      <UIPage>
        <ExplorerLayoutBaseHeader {...HeaderProps} />

        <UIPageContent>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              overflow: 'hidden',
              flexDirection: 'column',
            }}
          >
            <ExplorerLayoutBaseSubHeader {...SubHeaderProps} />

            <ExplorerUIContainer
              disableGutters
              sx={{ height: '100%', overflow: 'hidden' }}
            >
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  overflow: 'hidden',
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  <ExplorerLayoutBaseNavigationDrawer
                    {...NavigationDrawerProps}
                    actions={navigationDrawerActions}
                  />
                </Box>

                <Box
                  sx={{
                    flex: '1 1',
                    display: 'flex',
                    overflow: 'auto',
                    flexDirection: 'column',
                  }}
                >
                  {children}
                </Box>

                <Box
                  sx={{
                    flexShrink: 0,
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <ExplorerLayoutBaseNavigationTabs
                    {...NavigationTabsProps}
                    actions={navigationTabsActions}
                  />
                </Box>
              </Box>
            </ExplorerUIContainer>
          </Box>
        </UIPageContent>
      </UIPage>
    </>
  );
};

export default ExplorerLayoutBase;

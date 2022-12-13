import * as React from 'react';
import ExplorerLayoutBase from '../ExplorerLayoutBase/ExplorerLayoutBase';
import ExplorerLayoutMainHeaderMenu from './ExplorerLayoutMainHeaderMenu';
import ExplorerLayoutMainSubHeader from './ExplorerLayoutMainSubHeader';
import Box from '@mui/material/Box';
import UIPage from '../UIPage/UIPage';
import { useLayoutAppNavigationActions } from './NavigationActions/useLayoutAppNavigationActions';

export type LayoutAppProps = {
  children?: React.ReactNode;
};

const ExplorerLayoutMain = (props: LayoutAppProps) => {
  const { children } = props;

  const { navigationActions } = useLayoutAppNavigationActions();

  return (
    <>
      <UIPage>
        <ExplorerLayoutBase
          navigationActions={navigationActions}
          HeaderProps={{
            afterBrand: (
              <>
                {/*<Box sx={{ display: { xs: 'none', sm: 'block' } }}>*/}
                {/*  <UIHeaderSearch />*/}
                {/*</Box>*/}

                <Box sx={{ flex: '1 1' }}></Box>

                <ExplorerLayoutMainHeaderMenu />
              </>
            ),
          }}
          SubHeaderProps={{
            children: <ExplorerLayoutMainSubHeader />,
            WrapperProps: {
              sx: { display: { xs: 'none', md: 'none' } },
            },
          }}
        >
          {children}
        </ExplorerLayoutBase>
      </UIPage>
    </>
  );
};

export default ExplorerLayoutMain;

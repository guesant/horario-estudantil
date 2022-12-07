import * as React from 'react';
import ExplorerBaseLayout from '../ExplorerBaseLayout/ExplorerBaseLayout';
import ExplorerMainLayoutHeaderMenu from './ExplorerMainLayoutHeaderMenu';
import ExplorerMainLayoutSubHeader from './ExplorerMainLayoutSubHeader';
import { useLayoutAppNavigationActions } from './NavigationActions/useLayoutAppNavigationActions';
import Box from "@mui/material/Box";
import UIHeaderSearch from "../UIExplorerHeader/UIHeaderSearch";
import Button from "@mui/material/Button";
import Link from "next/link";

export type LayoutAppProps = {
  children?: React.ReactNode;
};

const ExplorerMainLayout = (props: LayoutAppProps) => {
  const { children } = props;

  const { navigationActions } = useLayoutAppNavigationActions();

  return (
    <>
      <ExplorerBaseLayout
        navigationActions={navigationActions}

        HeaderProps={{
          afterBrand: <>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <UIHeaderSearch />
            </Box>

            <Box sx={{ flex: '1 1' }}></Box>

            <Box sx={{ display: { xs: 'initial', sm: 'none' } }}>
              <ExplorerMainLayoutHeaderMenu />
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'block' }, flexShrink: 0 }}>
              <Button component={Link} href={'/dashboard'} color="inherit">
                Painel de Administração
              </Button>
            </Box>
          </>
        }}

        SubHeaderProps={{
          children: <ExplorerMainLayoutSubHeader />,
          WrapperProps: {
            sx: { display: { xs: 'none', sm: 'block' } },
          },
        }}

      >
        {children}
      </ExplorerBaseLayout>
    </>
  );
};

export default ExplorerMainLayout;

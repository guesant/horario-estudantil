import * as React from "react";
import ExplorerBaseLayout from "../ExplorerBaseLayout/ExplorerBaseLayout";
import ExplorerMainLayoutHeaderMenu from "./ExplorerMainLayoutHeaderMenu";
import ExplorerMainLayoutSubHeader from "./ExplorerMainLayoutSubHeader";
import {useLayoutAppNavigationActions} from "./NavigationActions/useLayoutAppNavigationActions";

export type LayoutAppProps = {
  children?: React.ReactNode;
};

const ExplorerMainLayout = (props: LayoutAppProps) => {
  const {children} = props;

  const {navigationActions} = useLayoutAppNavigationActions();

  return (
    <>
      <ExplorerBaseLayout
        navigationActions={navigationActions}
        SubHeaderProps={{
          children: <ExplorerMainLayoutSubHeader/>,
          WrapperProps: {
            // sx: {display: {xs: "none", sm: "block"}}
          }
        }}
        AppHeaderProps={{
          menu: <ExplorerMainLayoutHeaderMenu/>,
        }}
      >
        {children}
      </ExplorerBaseLayout>
    </>
  );
};

export default ExplorerMainLayout;

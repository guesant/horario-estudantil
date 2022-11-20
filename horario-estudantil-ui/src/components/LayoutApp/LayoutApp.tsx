import * as React from "react";
import LayoutBase from "../LayoutBase/LayoutBase";
import LayoutAppHeaderMenu from "./LayoutAppHeaderMenu";
import LayoutAppSubHeader from "./LayoutAppSubHeader";
import { useLayoutAppNavigationActions } from "./NavigationActions/useLayoutAppNavigationActions";

export type LayoutAppProps = {
  children?: React.ReactNode;
};

const LayoutApp = (props: LayoutAppProps) => {
  const { children } = props;

  const { navigationActions } = useLayoutAppNavigationActions();

  return (
    <>
      <LayoutBase
        navigationActions={navigationActions}
        SubHeaderProps={{
          children: <LayoutAppSubHeader />,
        }}
        AppHeaderProps={{
          menu: <LayoutAppHeaderMenu />,
        }}
      >
        {children}
      </LayoutBase>
    </>
  );
};

export default LayoutApp;

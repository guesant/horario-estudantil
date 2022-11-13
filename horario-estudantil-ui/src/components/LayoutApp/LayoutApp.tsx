import * as React from "react";
import LayoutBase from "../LayoutBase/LayoutBase";
import LayoutUnidadeEstudantilHeaderMenu from "./LayoutAppHeaderMenu";
import LayoutUnidadeEstudantilSubHeader from "./LayoutAppSubHeader";
import { useLayoutAppNavigationActions } from "./NavigationActions/useLayoutAppNavigationActions";

export type LayoutUnidadeEstudantilProps = {
  children?: React.ReactNode;
};

const LayoutApp = (props: LayoutUnidadeEstudantilProps) => {
  const { children } = props;

  const { navigationActions } = useLayoutAppNavigationActions();

  return (
    <>
      <LayoutBase
        navigationActions={navigationActions}
        SubHeaderProps={{
          children: <LayoutUnidadeEstudantilSubHeader />,
        }}
        AppHeaderProps={{
          menu: <LayoutUnidadeEstudantilHeaderMenu />,
        }}
      >
        {children}
      </LayoutBase>
    </>
  );
};

export default LayoutApp;

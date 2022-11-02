import * as React from "react";
import LayoutBase from "../LayoutBase/LayoutBase";
import LayoutUnidadeEstudantilHeaderMenu from "./LayoutUnidadeEstudantilHeaderMenu";
import LayoutUnidadeEstudantilSubHeader from "./LayoutUnidadeEstudantilSubHeader";
import { LAYOUT_UNIDADE_ESTUDANTIL_ACTIONS } from "./LAYOUT_UNIDADE_ESTUDANTIL_ACTIONS";

export type LayoutUnidadeEstudantilProps = {
  children?: React.ReactNode;
};

const LayoutUnidadeEstudantil = (props: LayoutUnidadeEstudantilProps) => {
  const { children } = props;

  return (
    <>
      <LayoutBase
        navigationActions={LAYOUT_UNIDADE_ESTUDANTIL_ACTIONS}
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

export default LayoutUnidadeEstudantil;

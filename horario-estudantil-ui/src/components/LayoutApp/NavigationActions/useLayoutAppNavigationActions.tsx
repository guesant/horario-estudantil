import { useContext, useMemo } from "react";
import { AppContext } from "../../AppContext/AppContext";
import {
  ActionDisplay,
  ActionType,
  IAction,
} from "../../LayoutBase/interfaces/IAction";
import { ACTION_HOME } from "./ACTION_HOME";
import { ACTION_SETTINGS } from "./ACTION_SETTINGS";
import { getActionsForInstituicao } from "./getActionsForInstituicao";

export const ACTION_DIVIDER: IAction = {
  type: ActionType.DIVIDER,
  display: ActionDisplay.DRAWER,
};

const ACTION_SPACE: IAction = {
  type: ActionType.SPACE,
  display: ActionDisplay.DRAWER,
};

export const useLayoutAppNavigationActions = () => {
  const { sigla } = useContext(AppContext);

  const navigationActions: IAction[] = useMemo(
    () =>
      [
        ACTION_HOME,

        ...getActionsForInstituicao(sigla),

        ACTION_DIVIDER,

        ACTION_SPACE,

        ACTION_DIVIDER,

        ACTION_SETTINGS,
      ] as IAction[],
    [sigla]
  );

  return { navigationActions };
};

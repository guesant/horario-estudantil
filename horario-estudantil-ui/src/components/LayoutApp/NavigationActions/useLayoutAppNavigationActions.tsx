import { useContext, useMemo } from "react";
import { AppContext } from "../../AppContext/AppContext";
import {
  ActionDisplay,
  ActionType,
  IAction,
} from "../../LayoutBase/interfaces/IAction";
import { ACTION_HOME } from "./ACTION_HOME";
import { ACTION_SETTINGS } from "./ACTION_SETTINGS";
import { getActionsForUnidadeDeEnsino } from "./getActionsForUnidadeDeEnsino";

export const ACTION_DIVIDER: IAction = {
  type: ActionType.DIVIDER,
  display: ActionDisplay.DRAWER,
};

const ACTION_SPACE: IAction = {
  type: ActionType.SPACE,
  display: ActionDisplay.DRAWER,
};

export const useLayoutAppNavigationActions = () => {
  const { selectedUE: selectedUnidadeDeEnsino } = useContext(AppContext);

  const navigationActions: IAction[] = useMemo(
    () =>
      [
        ACTION_HOME,

        ...getActionsForUnidadeDeEnsino(selectedUnidadeDeEnsino),

        ACTION_DIVIDER,

        ACTION_SPACE,

        ACTION_DIVIDER,

        ACTION_SETTINGS,
      ] as IAction[],
    [selectedUnidadeDeEnsino]
  );

  return { navigationActions };
};

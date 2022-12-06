import {ActionDisplay, IAction} from "./IAction";

export const getActionsForDisplay = (
  actions: IAction[],
  display = ActionDisplay.BOTH
) => actions.filter((i) => i.display & display);

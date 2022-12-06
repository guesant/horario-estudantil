import {ActionDisplay, ActionType} from "./IAction";

export type IActionDivider = {
  type: ActionType.DIVIDER;
  display: ActionDisplay;
};

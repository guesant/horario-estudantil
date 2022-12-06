import { ActionDisplay, ActionType } from "./IAction";

export type IActionItem = {
  type: ActionType.ITEM;

  icon: any;
  label: string;
  display: ActionDisplay;
  route?: {
    target: string;
    exact?: boolean;
  };
};

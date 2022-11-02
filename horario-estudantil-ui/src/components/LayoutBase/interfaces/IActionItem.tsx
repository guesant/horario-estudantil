import { ActionDisplay } from "./IAction";

export type IActionItem = {
  type?: "item";

  icon: any;
  label: string;
  display: ActionDisplay;
  route?: {
    target: string;
    exact?: boolean;
  };
};

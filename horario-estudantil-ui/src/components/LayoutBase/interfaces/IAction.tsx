import { IActionItem } from "./IActionItem";

export type IAction = IActionItem | IActionSpace;

export enum ActionDisplay {
  TABS = 0b00000001,
  DRAWER = 0b00000010,
  BOTH = 0b00000011,
}

export enum ActionType {
  ITEM = "item",
  SPACE = "space",
}

export type IActionSpace = { type: "space"; display: ActionDisplay };

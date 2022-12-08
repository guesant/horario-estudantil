import { IActionDivider } from './IActionDivider';
import { IActionItem } from './IActionItem';
import { IActionSpace } from './IActionSpace';

export type IAction = IActionItem | IActionSpace | IActionDivider;

export enum ActionDisplay {
  TABS = 0b00000001,
  DRAWER = 0b00000010,
  BOTH = 0b00000011,
}

export enum ActionType {
  ITEM = 'item',
  SPACE = 'space',
  DIVIDER = 'divider',
}

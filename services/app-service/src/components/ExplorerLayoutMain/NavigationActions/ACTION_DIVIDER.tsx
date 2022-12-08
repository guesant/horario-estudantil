import {
  ActionDisplay,
  ActionType,
  IAction,
} from '../../ExplorerLayoutBase/interfaces/IAction';

export const ACTION_DIVIDER: IAction = {
  type: ActionType.DIVIDER,
  display: ActionDisplay.DRAWER,
};

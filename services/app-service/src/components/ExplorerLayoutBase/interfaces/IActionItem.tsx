import { ActionDisplay, ActionType } from './IAction';
import { SvgIcon } from '@mui/material';

export type IActionItem = {
  type: ActionType.ITEM;

  icon: typeof SvgIcon;

  label: string;

  display: ActionDisplay;

  route?: {
    target: string;
    exact?: boolean;
  };

  tabOptions?: {
    hideTabsOnActive?: boolean;
  };
};

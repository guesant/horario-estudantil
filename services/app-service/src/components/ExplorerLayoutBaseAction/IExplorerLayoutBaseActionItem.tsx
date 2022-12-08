import { SvgIcon } from '@mui/material';
import { IExplorerLayoutBaseActionDisplay } from './IExplorerLayoutBaseActionDisplay';
import { IExplorerLayoutBaseActionType } from './IExplorerLayoutBaseActionType';

export type IExplorerLayoutBaseActionItem = {
  type: IExplorerLayoutBaseActionType.ITEM;

  display: IExplorerLayoutBaseActionDisplay;

  icon: typeof SvgIcon;

  label: string;

  route?: {
    target: string;
  };

  tabOptions?: {
    hideTabsOnActive?: boolean;
  };
};

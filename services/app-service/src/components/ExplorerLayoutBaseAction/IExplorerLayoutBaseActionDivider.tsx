import { IExplorerLayoutBaseActionDisplay } from './IExplorerLayoutBaseActionDisplay';
import { IExplorerLayoutBaseActionType } from './IExplorerLayoutBaseActionType';

export type IExplorerLayoutBaseActionDivider = {
  type: IExplorerLayoutBaseActionType.DIVIDER;
  display: IExplorerLayoutBaseActionDisplay;
};

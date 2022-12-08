import { IExplorerLayoutBaseActionDisplay } from './IExplorerLayoutBaseActionDisplay';
import { IExplorerLayoutBaseActionType } from './IExplorerLayoutBaseActionType';

export type IExplorerLayoutBaseActionSpace = {
  type: IExplorerLayoutBaseActionType.SPACE;
  display: IExplorerLayoutBaseActionDisplay;
};

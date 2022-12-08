import { IExplorerLayoutBaseActionDivider } from './IExplorerLayoutBaseActionDivider';
import { IExplorerLayoutBaseActionItem } from './IExplorerLayoutBaseActionItem';
import { IExplorerLayoutBaseActionSpace } from './IExplorerLayoutBaseActionSpace';

export type IExplorerLayoutBaseAction =
  | IExplorerLayoutBaseActionItem
  | IExplorerLayoutBaseActionSpace
  | IExplorerLayoutBaseActionDivider;

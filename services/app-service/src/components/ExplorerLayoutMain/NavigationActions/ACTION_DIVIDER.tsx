import { IExplorerLayoutBaseAction } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseAction';
import { IExplorerLayoutBaseActionDisplay } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseActionDisplay';
import { IExplorerLayoutBaseActionType } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseActionType';

export const ACTION_DIVIDER: IExplorerLayoutBaseAction = {
  type: IExplorerLayoutBaseActionType.DIVIDER,
  display: IExplorerLayoutBaseActionDisplay.DRAWER,
};

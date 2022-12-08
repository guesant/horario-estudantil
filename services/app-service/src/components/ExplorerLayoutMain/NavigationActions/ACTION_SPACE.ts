import { IExplorerLayoutBaseAction } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseAction';
import { IExplorerLayoutBaseActionDisplay } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseActionDisplay';
import { IExplorerLayoutBaseActionType } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseActionType';

export const ACTION_SPACE: IExplorerLayoutBaseAction = {
  type: IExplorerLayoutBaseActionType.SPACE,
  display: IExplorerLayoutBaseActionDisplay.DRAWER,
};

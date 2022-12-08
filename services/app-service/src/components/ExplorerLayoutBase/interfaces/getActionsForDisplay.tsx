import { IExplorerLayoutBaseAction } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseAction';
import { IExplorerLayoutBaseActionDisplay } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseActionDisplay';

export const getActionsForDisplay = (
  actions: IExplorerLayoutBaseAction[],
  display = IExplorerLayoutBaseActionDisplay.BOTH,
) => actions.filter((i) => i.display & display);

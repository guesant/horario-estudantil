import HomeIcon from '@mui/icons-material/HomeRounded';
import { IExplorerLayoutBaseAction } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseAction';
import { IExplorerLayoutBaseActionDisplay } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseActionDisplay';
import { IExplorerLayoutBaseActionType } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseActionType';

export const ACTION_HOME: IExplorerLayoutBaseAction = {
  type: IExplorerLayoutBaseActionType.ITEM,
  display: IExplorerLayoutBaseActionDisplay.BOTH,

  label: 'Início',
  icon: HomeIcon,

  route: {
    target: '/(h/:sigla_ins)',
  },

  tabOptions: {
    hideTabsOnActive: true,
  },
};

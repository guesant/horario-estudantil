import ClassIcon from '@mui/icons-material/Class';
import GroupsIcon from '@mui/icons-material/Groups';
import HailIcon from '@mui/icons-material/Hail';
import { IExplorerLayoutBaseAction } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseAction';
import { ACTION_DIVIDER } from './ACTION_DIVIDER';
import { IExplorerLayoutBaseActionDisplay } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseActionDisplay';
import { IExplorerLayoutBaseActionType } from '../../ExplorerLayoutBaseAction/IExplorerLayoutBaseActionType';

export const getActionsForInstituicao = (
  sigla: string | null,
): IExplorerLayoutBaseAction[] => {
  if (!sigla) {
    return [];
  }

  return [
    ACTION_DIVIDER,

    {
      type: IExplorerLayoutBaseActionType.ITEM,
      display: IExplorerLayoutBaseActionDisplay.BOTH,

      label: 'Turmas',
      icon: GroupsIcon,

      route: {
        target: '/h/:sigla_ins/turmas(/*rest)',
      },
    },

    {
      type: IExplorerLayoutBaseActionType.ITEM,
      display: IExplorerLayoutBaseActionDisplay.BOTH,

      label: 'Matérias',
      icon: ClassIcon,

      route: {
        target: '/h/:sigla_ins/materias(/*rest)',
      },
    },

    {
      type: IExplorerLayoutBaseActionType.ITEM,
      display: IExplorerLayoutBaseActionDisplay.BOTH,

      label: 'Professores',
      icon: HailIcon,

      route: {
        target: '/h/:sigla_ins/professores(/*rest)',
      },
    },
  ];
};

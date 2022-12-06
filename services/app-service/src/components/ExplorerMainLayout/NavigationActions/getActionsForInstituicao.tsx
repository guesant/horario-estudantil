import ClassIcon from "@mui/icons-material/Class";
import GroupsIcon from "@mui/icons-material/Groups";
import HailIcon from "@mui/icons-material/Hail";
import {ActionDisplay, ActionType, IAction,} from "../../ExplorerBaseLayout/interfaces/IAction";
import {ACTION_DIVIDER} from "./ACTION_DIVIDER";

export const getActionsForInstituicao = (
  sigla: string | null
): IAction[] => {
  if (!sigla) {
    return [];
  }

  return [
    ACTION_DIVIDER,

    {
      type: ActionType.ITEM,
      display: ActionDisplay.BOTH,

      label: "Turmas",
      icon: GroupsIcon,

      route: {
        target: "/h/turmas",
      },
    },

    {
      type: ActionType.ITEM,
      display: ActionDisplay.BOTH,

      label: "Matérias",
      icon: ClassIcon,

      route: {
        target: "/h/materias",
      },
    },

    {
      type: ActionType.ITEM,
      display: ActionDisplay.BOTH,

      label: "Professores",
      icon: HailIcon,

      route: {
        target: "/h/professores",
      },
    },
  ];
};

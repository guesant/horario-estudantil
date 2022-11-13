import ClassIcon from "@mui/icons-material/Class";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import {
  ActionDisplay,
  ActionType,
  IAction,
} from "../../LayoutBase/interfaces/IAction";
import { ACTION_DIVIDER } from "./useLayoutAppNavigationActions";

export const getActionsForUnidadeDeEnsino = (
  unidadeDeEnsino: string | null
): IAction[] => {
  if (!unidadeDeEnsino) {
    return [];
  }

  return [
    ACTION_DIVIDER,

    {
      type: ActionType.ITEM,
      display: ActionDisplay.BOTH,

      label: "Turmas",
      icon: <GroupsIcon />,

      route: {
        target: "/h/turmas",
      },
    },

    {
      type: ActionType.ITEM,
      display: ActionDisplay.BOTH,

      label: "Matérias",
      icon: <ClassIcon />,

      route: {
        target: "/h/materias",
      },
    },

    {
      type: ActionType.ITEM,
      display: ActionDisplay.BOTH,

      label: "Professores",
      icon: <SchoolIcon />,

      route: {
        target: "/h/professores",
      },
    },
  ];
};

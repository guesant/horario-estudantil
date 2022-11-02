import ClassIcon from "@mui/icons-material/Class";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import { ActionDisplay, IAction } from "../LayoutBase/interfaces/IAction";

export const LAYOUT_UNIDADE_ESTUDANTIL_ACTIONS: IAction[] = [
  {
    type: "item",
    icon: <GroupsIcon />,
    label: "Turma",
    display: ActionDisplay.BOTH,

    route: {
      target: "/h/[ue]/turmas",
    },
  },

  {
    type: "item",
    icon: <ClassIcon />,
    label: "Matéria",
    display: ActionDisplay.BOTH,

    route: {
      target: "/h/[ue]/materias",
    },
  },

  {
    type: "item",
    icon: <SchoolIcon />,
    label: "Professor",
    display: ActionDisplay.BOTH,

    route: {
      target: "/h/[ue]/professores",
    },
  },

  {
    type: "space",
    display: ActionDisplay.DRAWER,
  },

  {
    type: "item",
    icon: <SettingsIcon />,
    label: "Configurações",
    display: ActionDisplay.DRAWER,

    route: {
      target: "/configuracoes",
    },
  },
];

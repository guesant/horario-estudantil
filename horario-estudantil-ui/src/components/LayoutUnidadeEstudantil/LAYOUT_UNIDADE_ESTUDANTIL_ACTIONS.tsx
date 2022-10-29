import ClassIcon from "@mui/icons-material/Class";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import * as React from "react";
import { useRouter } from "next/router";

export enum ActionDisplay {
  MOBILE = 0b00000001,
  DESKTOP = 0b00000010,
  BOTH = 0b00000011,
}

export enum ActionType {
  ITEM = "item",
  SPACE = "space",
}

export type IActionItem = {
  type?: "item";
  icon: any;
  label: string;
  display: ActionDisplay;

  route?: {
    target: string;
  };
};

export type IActionSpace = { type: "space"; display: ActionDisplay };

export type IAction = IActionItem | IActionSpace;

export const useActionRouter = () => {
  const router = useRouter();

  const { pathname, query } = router;

  const match = React.useCallback(
    (action: IActionItem) => {
      const route = action.route;
      if (route) {
        const { target } = route;

        const isMatch = Boolean(target) && pathname.startsWith(target!);

        const realTarget = (Object.entries(query) as [string, string][]).reduce(
          (url, [k, v]) => url.replace(`[${k}]`, v),
          target
        );

        return { isMatch, realTarget };
      }

      return { isMatch: false, realTarget: null };
    },
    [pathname, query]
  );

  return { match };
};

export const LAYOUT_UNIDADE_ESTUDANTIL_ACTIONS: IAction[] = [
  {
    type: "item",
    icon: <GroupsIcon />,
    label: "Turma",
    display: ActionDisplay.BOTH,

    route: {
      target: "/h/[ue]/[ano]/[mes]/[dia]/turma",
    },
  },

  {
    type: "item",
    icon: <ClassIcon />,
    label: "Matéria",
    display: ActionDisplay.BOTH,

    route: {
      target: "/h/[ue]/[ano]/[mes]/[dia]/materia",
    },
  },

  {
    type: "item",
    icon: <SchoolIcon />,
    label: "Professor",
    display: ActionDisplay.BOTH,

    route: {
      target: "/h/[ue]/[ano]/[mes]/[dia]/professor",
    },
  },

  {
    type: "item",
    icon: <DashboardCustomizeIcon />,
    label: "Customizado",
    display: ActionDisplay.DESKTOP,

    route: {
      target: "/h/[ue]/[ano]/[mes]/[dia]/customizado",
    },
  },

  {
    type: "space",
    display: ActionDisplay.DESKTOP,
  },

  {
    type: "item",
    icon: <SettingsIcon />,
    label: "Configurações",
    display: ActionDisplay.DESKTOP,

    route: {
      target: "/configuracoes",
    },
  },
];

export const getActions = (display = ActionDisplay.BOTH) =>
  LAYOUT_UNIDADE_ESTUDANTIL_ACTIONS.filter((i) => i.display & display);

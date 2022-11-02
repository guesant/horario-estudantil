import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { ActionDisplay, IAction } from "../LayoutBase/interfaces/IAction";

export const HOME_LAYOUT_ACTIONS_HOME: IAction = {
  type: "item",
  icon: <HomeIcon />,
  label: "Início",
  display: ActionDisplay.BOTH,

  route: {
    target: "/",
    exact: true,
  },
};

export const HOME_LAYOUT_ACTIONS: IAction[] = [
  HOME_LAYOUT_ACTIONS_HOME,

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

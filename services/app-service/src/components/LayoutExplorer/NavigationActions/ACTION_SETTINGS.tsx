import SettingsIcon from "@mui/icons-material/Settings";
import {
  ActionDisplay,
  ActionType,
  IAction,
} from "../../LayoutBase/interfaces/IAction";

export const ACTION_SETTINGS: IAction = {
  type: ActionType.ITEM,
  icon: <SettingsIcon />,
  label: "Configurações",
  display: ActionDisplay.DRAWER,

  route: {
    target: "/configuracoes",
  },
};

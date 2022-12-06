import HomeIcon from "@mui/icons-material/Home";
import {
  ActionDisplay,
  ActionType,
  IAction,
} from "../../LayoutBase/interfaces/IAction";

export const ACTION_HOME: IAction = {
  type: ActionType.ITEM,
  display: ActionDisplay.BOTH,

  label: "Início",
  icon: <HomeIcon />,

  route: {
    target: "/",
    exact: true,
  },
};

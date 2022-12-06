import { styled } from "@mui/material/styles";
import MuiTab, { TabProps } from "@mui/material/Tab";
import * as React from "react";

const AppLayoutTab = styled((props: TabProps) => (
  <MuiTab iconPosition="bottom" disableRipple {...props} />
))(({ theme }) => ({
  minWidth: 0,

  minHeight: 0,

  textTransform: "none",

  fontWeight: theme.typography.fontWeightRegular,

  color: theme.palette.action.active,

  [theme.breakpoints.down("sm")]: {
    fontSize: "3.5vw",

    padding: theme.spacing(1.25, 0.25),

    "& .MuiTab-iconWrapper": {
      fontSize: "6vw",
      marginTop: theme.spacing(0.7),
    },
  },

  "&:hover": {
    color: theme.palette.success.light,
    opacity: 1,
  },

  "&.Mui-selected": {
    color: theme.palette.success.main,
    fontWeight: theme.typography.fontWeightMedium,
  },

  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

export default AppLayoutTab;

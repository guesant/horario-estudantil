import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppLink from "../AppLink";
import { Fragment, useContext, useMemo } from "react";
import { AppContext } from "../AppContext/AppContext";
import ButtonSelectUnidadeDeEnsino from "../ButtonSelectUnidadeDeEnsino/ButtonSelectUnidadeDeEnsino";
import { getActionsForUnidadeDeEnsino } from "../LayoutApp/NavigationActions/getActionsForUnidadeDeEnsino";
import { ActionType } from "../LayoutBase/interfaces/IAction";
import { IActionItem } from "../LayoutBase/interfaces/IActionItem";

const useCoreActions = () => {
  const { selectedUE: selectedUnidadeDeEnsino } = useContext(AppContext);

  const actions = useMemo(
    () =>
      getActionsForUnidadeDeEnsino(selectedUnidadeDeEnsino).filter(
        (i) => i.type === ActionType.ITEM
      ) as IActionItem[],
    [selectedUnidadeDeEnsino]
  );

  return actions;
};

const HomeCallToActionUnidadeActions = () => {
  const actions = useCoreActions();

  return (
    <>
      <Box
        sx={{
          gap: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { md: "1.5rem", xs: "1.25rem" },
          }}
        >
          Começe por aqui:
        </Typography>

        <ButtonSelectUnidadeDeEnsino
          ButtonProps={{
            variant: "outlined",
            color: "success",
            sx: { py: 0.5, px: 1.5 },
          }}
        />

        <Box
          sx={{
            gap: 1,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {actions.map(({ label, icon, route }) => (
            <Fragment key={label}>
              <Button
                color="success"
                startIcon={icon}
                disableElevation
                variant="contained"
                {...(route
                  ? {
                      href: route.target,
                      LinkComponent: AppLink,
                    }
                  : {})}
                sx={{ py: 1, px: 2, textTransform: "none" }}
              >
                {label}
              </Button>
            </Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default HomeCallToActionUnidadeActions;

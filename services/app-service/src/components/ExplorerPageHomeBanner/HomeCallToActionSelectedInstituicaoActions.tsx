import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fragment, useContext, useMemo } from "react";
import { AppContext } from "../AppContext/AppContext";
import AppLink from "../AppLink";
import AppBotaoSelecionarInstituicao from "../ExplorerBotaoSelecionarInstituicao/AppBotaoSelecionarInstituicao";
import { getActionsForInstituicao } from "../LayoutExplorer/NavigationActions/getActionsForInstituicao";
import { ActionType } from "../LayoutBase/interfaces/IAction";
import { IActionItem } from "../LayoutBase/interfaces/IActionItem";
import Divider from "@mui/material/Divider";

const useCoreActions = () => {
  const { sigla } = useContext(AppContext);

  const actions = useMemo(
    () =>
      getActionsForInstituicao(sigla).filter(
        (i) => i.type === ActionType.ITEM
      ) as IActionItem[],
    [sigla]
  );

  return actions;
};

const HomeCallToActionSelectedInstituicaoActions = () => {
  const actions = useCoreActions();

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <AppBotaoSelecionarInstituicao
          ButtonProps={{
            color: "success",
            variant: "outlined",
            sx: { py: 0.95, px: 1.5 },
          }}
        />

        <Divider />

        <Box
          sx={{
            gap: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              gap: 1,

              width: "100%",

              display: "flex",

              flexWrap: "wrap",

              alignItems: {
                xs: "stretch",
                sm: "center",
              },

              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            {actions.map(({ label, icon, route }) => (
              <Fragment key={label}>
                <Button
                  color="success"
                  startIcon={icon}
                  disableElevation
                  variant="contained"
                  sx={{
                    py: 1.75,
                    flex: 1,
                    px: 2.15,
                    fontSize: "1rem",
                    textTransform: "none",
                  }}
                  {...(route
                    ? {
                        href: route.target,
                        LinkComponent: AppLink,
                      }
                    : {})}
                >
                  {label}
                </Button>
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeCallToActionSelectedInstituicaoActions;

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {createElement, Fragment, useContext, useMemo} from "react";
import {ExplorerContext} from "../ExplorerContext/ExplorerContext";
import UIExplorerLink from "../UIExplorerLink";
import ExplorerSelectInstituicaoButton from "../ExplorerSelectInstituicaoButton/ExplorerSelectInstituicaoButton";
import {getActionsForInstituicao} from "../ExplorerMainLayout/NavigationActions/getActionsForInstituicao";
import {ActionType} from "../ExplorerBaseLayout/interfaces/IAction";
import {IActionItem} from "../ExplorerBaseLayout/interfaces/IActionItem";
import Divider from "@mui/material/Divider";

const useCoreActions = () => {
  const {sigla} = useContext(ExplorerContext);

  const actions = useMemo(
    () =>
      getActionsForInstituicao(sigla).filter(
        (i) => i.type === ActionType.ITEM
      ) as IActionItem[],
    [sigla]
  );

  return actions;
};

const ExplorerPageHomeBannerCallToActionInstituicaoActions = () => {
  const actions = useCoreActions();

  return (
    <>
      <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
        <ExplorerSelectInstituicaoButton
          ButtonProps={{
            color: "success",
            variant: "outlined",
            sx: {
              // py: 0.95, px: 1.5,
              py: 1.75,
              px: 2.15,

              fontSize: "1rem",
            },
          }}
        />

        <Divider/>

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
            {actions.map(({label, icon, route}) => (
              <Fragment key={label}>
                <Button
                  color="success"
                  disableElevation
                  variant="contained"

                  startIcon={createElement(icon, {   sx: { fontSize: "1.85rem !important" } })}
                  sx={{
                    flex: 1,

                    py: 2,
                    px: 2.15,

                    fontSize: "1.125rem",
                    textTransform: "none",
                    borderRadius: "0.625rem",

                    display: "flex",
                    alignItems:"center",
                    flexDirection:"column",
                    gap: 1,


                    '& .MuiButton-startIcon': {

                      margin: "0 !important"
                    }
                  }}
                  {...(route
                    ? {
                      href: route.target,
                      LinkComponent: UIExplorerLink,
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

export default ExplorerPageHomeBannerCallToActionInstituicaoActions;

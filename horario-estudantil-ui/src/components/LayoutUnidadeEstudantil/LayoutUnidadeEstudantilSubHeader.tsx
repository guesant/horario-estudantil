import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import AppContainer from "../AppContainer";

const LayoutUnidadeEstudantilSubHeader = () => {
  return (
    <>
      <Box
        sx={{
          py: "0.2rem",
          bgcolor: "success.dark",
          color: "success.contrastText",
        }}
      >
        <AppContainer>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.3 }}>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <Button
                disableRipple
                color="inherit"
                startIcon={<LocationOnIcon />}
                endIcon={<ArrowDropDownIcon />}
                sx={{
                  py: 1,
                  px: 2,

                  fontWeight: "bold",
                  textTransform: "none",

                  fontSize: {
                    xs: "0.875rem",
                    sm: "1rem",
                  },
                }}
              >
                IFRO - Campus Ji-Paraná
              </Button>
            </Box>
            <Button
              disableRipple
              color="inherit"
              startIcon={<CalendarViewWeekIcon />}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                py: 1,
                px: 2,

                fontWeight: "bold",
                textTransform: "none",

                fontSize: {
                  xs: "0.875rem",
                  sm: "1rem",
                },

                flex: {
                  xs: 1,
                  sm: "none",
                },
              }}
            >
              Semana 31/10 a 05/11
            </Button>
          </Box>
        </AppContainer>
      </Box>
    </>
  );
};
export default LayoutUnidadeEstudantilSubHeader;

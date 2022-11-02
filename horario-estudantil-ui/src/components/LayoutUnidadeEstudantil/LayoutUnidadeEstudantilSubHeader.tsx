import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";

const LayoutUnidadeEstudantilSubHeader = () => {
  return (
    <>
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
          href="/"
          LinkComponent={Link}
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
    </>
  );
};

export default LayoutUnidadeEstudantilSubHeader;

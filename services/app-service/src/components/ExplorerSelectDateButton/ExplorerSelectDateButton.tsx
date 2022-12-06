import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import Button from "@mui/material/Button";

type IExplorerSelectDateButtonProps = {};

const ExplorerSelectDateButton = (props: IExplorerSelectDateButtonProps) => {
  const {} = props;

  return (
    <>
      <Button
        color="inherit"
        endIcon={<ArrowDropDownIcon/>}
        startIcon={<CalendarViewWeekIcon/>}
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

export default ExplorerSelectDateButton;

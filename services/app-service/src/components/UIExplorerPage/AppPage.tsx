import Box from "@mui/material/Box";

type Props = {
  children: any;
};

const AppPage = (props: Props) => {
  const {children} = props;

  return (
    <Box
      className={"app-page"}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default AppPage;

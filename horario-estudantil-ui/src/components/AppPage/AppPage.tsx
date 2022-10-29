import Box from "@mui/material/Box";

type Props = {
  children: any;
};

const AppPage = (props: Props) => {
  const { children } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};

export default AppPage;

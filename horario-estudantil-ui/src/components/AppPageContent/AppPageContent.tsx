import Box from "@mui/material/Box";

type Props = {
  children: any;
};

const AppPageContent = (props: Props) => {
  const { children } = props;

  return <Box sx={{ flex: 1 }}>{children}</Box>;
};

export default AppPageContent;

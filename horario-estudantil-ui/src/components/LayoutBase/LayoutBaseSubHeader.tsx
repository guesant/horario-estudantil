import Box from "@mui/material/Box";
import AppContainer from "../AppContainer";

export type ILayoutBaseSubHeaderProps = {
  children?: React.ReactNode;
};

const LayoutBaseSubHeader = (props: ILayoutBaseSubHeaderProps) => {
  const { children } = props;

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
          <Box
            sx={{
              gap: 0.3,
              display: "flex",
              flexWrap: "wrap",
              minHeight: "2.75rem",
              alignItems: "center",
            }}
          >
            {children}
          </Box>
        </AppContainer>
      </Box>
    </>
  );
};

export default LayoutBaseSubHeader;

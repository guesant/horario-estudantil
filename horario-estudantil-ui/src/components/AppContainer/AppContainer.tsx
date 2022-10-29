import Container, { ContainerProps } from "@mui/material/Container";

type Props = {
  children: React.ReactNode;
} & ContainerProps;

const AppContainer = (props: Props) => {
  const { children, sx, ...otherProps } = props;

  return (
    <>
      <Container
        maxWidth="lg"
        {...otherProps}
        sx={{ marginLeft: "auto", marginRight: "auto", ...sx }}
      >
        {children}
      </Container>
    </>
  );
};

export default AppContainer;

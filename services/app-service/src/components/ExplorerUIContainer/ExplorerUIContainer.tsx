import Container, { ContainerProps } from '@mui/material/Container';

export type IExplorerUIContainer = {
  children?: React.ReactNode;

  enabled?: boolean;
} & ContainerProps;

const ExplorerUIContainer = (props: IExplorerUIContainer) => {
  const { children, sx, enabled = true, ...otherProps } = props;

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <>
      <Container
        maxWidth="lg"
        {...otherProps}
        sx={{ marginLeft: 'auto', marginRight: 'auto', ...sx }}
      >
        {children}
      </Container>
    </>
  );
};

export default ExplorerUIContainer;

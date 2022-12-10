import Container from '@mui/material/Container';

export type IPainelLayoutBaseContainerProps = {
  children?: any;
};

const PainelLayoutBaseContainer = (props: IPainelLayoutBaseContainerProps) => {
  const { children } = props;

  return (
    <Container
      sx={{
        p: 3,
        gap: 3,
        marginLeft: 0,
        height: '100%',
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      }}
    >
      {children}
    </Container>
  );
};

export default PainelLayoutBaseContainer;

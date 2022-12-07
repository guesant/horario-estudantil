import Box, { BoxProps } from '@mui/material/Box';
import AppContainer from '../UIExplorerContainer';

export type ILayoutBaseSubHeaderProps = {
  children?: React.ReactNode;

  WrapperProps?: BoxProps;
};

const ExplorerBaseLayoutSubHeader = (props: ILayoutBaseSubHeaderProps) => {
  const { children, WrapperProps } = props;

  return (
    <>
      <Box
        {...WrapperProps}
        sx={{
          py: '0.2rem',
          bgcolor: 'success.dark',
          color: 'success.contrastText',
          ...WrapperProps?.sx,
        }}
      >
        <AppContainer>
          <Box
            sx={{
              gap: 0.3,
              display: 'flex',
              flexWrap: 'wrap',
              minHeight: '2.75rem',
              alignItems: 'center',
            }}
          >
            {children}
          </Box>
        </AppContainer>
      </Box>
    </>
  );
};

export default ExplorerBaseLayoutSubHeader;

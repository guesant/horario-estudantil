import Box, { BoxProps } from '@mui/material/Box';
import ExplorerUIContainer from '../ExplorerUIContainer';

export type IExplorerLayoutBaseSubHeaderProps = {
  children?: React.ReactNode;

  WrapperProps?: BoxProps;
};

const ExplorerLayoutBaseSubHeader = (
  props: IExplorerLayoutBaseSubHeaderProps,
) => {
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
        <ExplorerUIContainer>
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
        </ExplorerUIContainer>
      </Box>
    </>
  );
};

export default ExplorerLayoutBaseSubHeader;

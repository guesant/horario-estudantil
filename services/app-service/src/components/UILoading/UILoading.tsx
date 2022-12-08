import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {};

const UILoading = (props: Props) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color="success" />
    </Box>
  );
};

export default UILoading;
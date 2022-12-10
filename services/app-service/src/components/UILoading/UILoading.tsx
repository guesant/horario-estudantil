import Box from '@mui/material/Box';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';

type Props = {
  color?: CircularProgressProps['color'];
};

const UILoading = (props: Props) => {
  const { color } = props;

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color={color ?? 'success'} />
    </Box>
  );
};

export default UILoading;

import Paper from '@mui/material/Paper';
import ExplorerPageHomeBannerCallToAction from '../ExplorerPageHomeBannerCallToAction/ExplorerPageHomeBannerCallToAction';

const ExplorerPageHomeBanner = () => {
  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          borderRadius: 4,
          my: { xs: 1, sm: 1, md: 2 },
          p: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <ExplorerPageHomeBannerCallToAction />
      </Paper>
    </>
  );
};

export default ExplorerPageHomeBanner;

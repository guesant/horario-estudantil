import { styled } from '@mui/material/styles';
import MuiTabs from '@mui/material/Tabs';

const AppLayoutTabs = styled(MuiTabs)(({ theme }) => ({
  borderTop: '1px solid #e8e8e8',

  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.success.main,
    bottom: 'unset',
    top: 0,
  },
}));

export default AppLayoutTabs;

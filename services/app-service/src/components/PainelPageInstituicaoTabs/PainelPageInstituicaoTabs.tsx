import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabPanel } from './TabPanel';
import { PAINEL_PAGE_INSTITUICAO_TABS } from './PAINEL_PAGE_INSTITUICAO_TABS';

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

function PainelPageInstituicaoTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          scrollButtons
          allowScrollButtonsMobile
          variant="scrollable"
          textColor="secondary"
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {PAINEL_PAGE_INSTITUICAO_TABS.map((tab, idx) => (
            <Tab
              key={tab.label}
              icon={tab.icon}
              value={tab.value}
              label={tab.label}
              iconPosition={'start'}
              {...a11yProps(idx)}
            />
          ))}
        </Tabs>
      </Box>

      {}

      {PAINEL_PAGE_INSTITUICAO_TABS.map((tab) => (
        <TabPanel key={tab.value} value={value} index={tab.value}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
}

export default PainelPageInstituicaoTabs;

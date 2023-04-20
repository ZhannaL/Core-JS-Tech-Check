import { Box, Paper, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Closure } from './Closure/Closure';
import { EventDelegation } from './EventDelegation/EventDelegation';
import { EventLoop } from './EventLoop/EventLoop';
import { Hoisting } from './Hoisting/Hoisting';
import { This } from './This/This';
import Timer from './Timer/Timer';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index} style={{ width: '83%' }}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const tabStyle = {
  fontWeight: 'bold',
  '&.Mui-selected': {
    bgcolor: '#def3f3',
    borderRadius: '25px 0 0 25px',
  },
} as const;

export const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      width="100%"
      height="100%"
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider', width: '17%' }}
      >
        <Tab sx={tabStyle} label="EventLoop" />
        <Tab sx={tabStyle} label="Closure" />
        <Tab sx={tabStyle} label="EventDelegation" />
        <Tab sx={tabStyle} label="This" />
        <Tab sx={tabStyle} label="Hoisting" />
        <Tab sx={tabStyle} label="Timer" />
        <Tab sx={tabStyle} label="Item Seven" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <EventLoop></EventLoop>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Closure></Closure>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EventDelegation></EventDelegation>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <React.StrictMode>
          <This></This>
        </React.StrictMode>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Hoisting></Hoisting>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Timer></Timer>
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
};

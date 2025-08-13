'use client';
import PropTypes from 'prop-types';
import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ProgressCard from '@/components/cards/ProgressCard';
import { TabsType } from '@/enum';
import { getRadiusStyles } from '@/utils/getRadiusStyles';

/***************************  TABS - DATA  ***************************/

const sevenDaysData = [
  { title: 'Direct', value: '16,890', progress: { value: 45 } },
  { title: 'Google.com', value: '4,909', progress: { value: 56 } },
  { title: 'Remix.com', value: '550', progress: { value: 74 } },
  { title: 'dev.to', value: '140', progress: { value: 25 } },
  { title: 'acpc.api.ic.io', value: '8,675', progress: { value: 45 } },
  { title: 'wewe.uv.us', value: '4,900', progress: { value: 95 } }
];

const monthData = [
  { title: 'Direct', value: '67,560', progress: { value: 75 } },
  { title: 'Google.com', value: '19,636', progress: { value: 45 } },
  { title: 'Remix.com', value: '2,220', progress: { value: 10 } },
  { title: 'dev.to', value: '560', progress: { value: 89 } },
  { title: 'acpc.api.ic.io', value: '34,700', progress: { value: 95 } },
  { title: 'wewe.uv.us', value: '19,600', progress: { value: 74 } }
];

const yearData = [
  { title: 'Direct', value: '8,10,720', progress: { value: 52 } },
  { title: 'Google.com', value: '2,35,632', progress: { value: 45 } },
  { title: 'Remix.com', value: '26,640', progress: { value: 85 } },
  { title: 'dev.to', value: '6,720', progress: { value: 42 } },
  { title: 'acpc.api.ic.io', value: '4,16,400', progress: { value: 55 } },
  { title: 'wewe.uv.us', value: '2,35,200', progress: { value: 45 } }
];

const routesData = [
  { title: 'Home', value: '16,890', progress: { value: 15 } },
  { title: 'Pricing', value: '4,909', progress: { value: 78 } },
  { title: 'Change-log', value: '550', progress: { value: 25 } },
  { title: 'Feature', value: '140', progress: { value: 47 } },
  { title: 'Service', value: '8,675', progress: { value: 20 } },
  { title: 'Pricing', value: '4,900', progress: { value: 74 } }
];

const pageData = [
  { title: 'Home', value: '67,560', progress: { value: 45 } },
  { title: 'Pricing', value: '19,636', progress: { value: 25 } },
  { title: 'Change-log', value: '2,220', progress: { value: 74 } },
  { title: 'Feature', value: '560', progress: { value: 44 } },
  { title: 'Service', value: '34,700', progress: { value: 41 } },
  { title: 'Pricing', value: '19,600', progress: { value: 95 } }
];

const affiliateData = [
  { title: 'No-Refference', value: '16,890', progress: { value: 44 } },
  { title: 'Medium', value: '4,909', progress: { value: 90 } },
  { title: 'remaixblock.com', value: '550', progress: { value: 20 } },
  { title: 'remaix-pge-block-hero', value: '140', progress: { value: 85 } },
  { title: 'remaix-pge-block-banner', value: '8,675', progress: { value: 75 } },
  { title: 'dev.io', value: '4,900', progress: { value: 78 } }
];

const campaignData = [
  { title: 'No-Refference', value: '67,560', progress: { value: 25 } },
  { title: 'Medium', value: '19,636', progress: { value: 74 } },
  { title: 'remaixblock.com', value: '2,220', progress: { value: 65 } },
  { title: 'remaix-pge-block-hero', value: '560', progress: { value: 45 } },
  { title: 'remaix-pge-block-banner', value: '34,700', progress: { value: 85 } },
  { title: 'dev.io', value: '19,600', progress: { value: 47 } }
];

const marketingData = [
  { title: 'No-Refference', value: '8,10,720', progress: { value: 41 } },
  { title: 'Medium', value: '2,35,632', progress: { value: 35 } },
  { title: 'remaixblock.com', value: '26,640', progress: { value: 55 } },
  { title: 'remaix-pge-block-hero', value: '6,720', progress: { value: 75 } },
  { title: 'remaix-pge-block-banner', value: '4,16,400', progress: { value: 100 } },
  { title: 'dev.io', value: '2,35,200', progress: { value: 20 } }
];

/***************************  TABS - A11Y  ***************************/

function a11yProps(value) {
  return { value: value, id: `simple-tab-${value}`, 'aria-controls': `simple-tabpanel-${value}` };
}

/***************************  TABS - PANEL  ***************************/

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 1.5 }}>{children}</Box>}
    </div>
  );
}

/***************************  TABS - CONTENT  ***************************/

function TabContent({ data }) {
  return (
    <Stack sx={{ gap: 1.25 }}>
      {data.map((item, index) => (
        <ProgressCard key={index} {...item} />
      ))}
    </Stack>
  );
}

/***************************  CARDS - BORDER WITH RADIUS  ***************************/

export function applyBorderWithRadius(radius, theme) {
  return {
    overflow: 'hidden',
    '--Grid-borderWidth': '1px',
    borderTop: 'var(--Grid-borderWidth) solid',
    borderLeft: 'var(--Grid-borderWidth) solid',
    borderColor: 'divider',
    '& > div': {
      overflow: 'hidden',
      borderRight: 'var(--Grid-borderWidth) solid',
      borderBottom: 'var(--Grid-borderWidth) solid',
      borderColor: 'divider',
      [theme.breakpoints.only('xs')]: {
        '&:first-of-type': getRadiusStyles(radius, 'topLeft', 'topRight'),
        '&:last-of-type': getRadiusStyles(radius, 'bottomLeft', 'bottomRight')
      },
      [theme.breakpoints.between('sm', 'md')]: {
        '&:nth-of-type(1)': getRadiusStyles(radius, 'topLeft'),
        '&:nth-of-type(2)': getRadiusStyles(radius, 'topRight'),
        '&:nth-of-type(3)': getRadiusStyles(radius, 'bottomLeft', 'bottomRight')
      },
      [theme.breakpoints.up('md')]: {
        '&:first-of-type': getRadiusStyles(radius, 'topLeft', 'bottomLeft'),
        '&:last-of-type': getRadiusStyles(radius, 'topRight', 'bottomRight')
      }
    }
  };
}

/***************************  CARDS - TOP REFERRERS  ***************************/
export default function TopReferrers() {
  const theme = useTheme();
  const [httpReferrers, setHttpReferrers] = useState('days');
  const [pages, setPages] = useState('routes');
  const [sources, setSources] = useState('affiliate');

  // Separate handleChange functions
  const handleHTTPReferrers = (event, newValue) => {
    setHttpReferrers(newValue);
  };

  const handlePages = (event, newValue) => {
    setPages(newValue);
  };

  const handleSources = (event, newValue) => {
    setSources(newValue);
  };

  return (
    <>
      <Grid container sx={{ borderRadius: 4, boxShadow: theme.customShadows.section, ...applyBorderWithRadius(16, theme) }}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Stack sx={{ gap: 2.5, p: 3 }}>
            <Typography variant="subtitle1">Top HTTP Referrers</Typography>
            <Box>
              <Tabs
                variant="fullWidth"
                value={httpReferrers}
                onChange={handleHTTPReferrers}
                aria-label="basic tabs example"
                type={TabsType.SEGMENTED}
              >
                <Tab label="Last 7 days" {...a11yProps('days')} />
                <Tab label="Last Month" {...a11yProps('month')} />
                <Tab label="Last Year" {...a11yProps('year')} />
              </Tabs>
              <TabPanel value={httpReferrers} index="days">
                <TabContent data={sevenDaysData} />
              </TabPanel>
              <TabPanel value={httpReferrers} index="month">
                <TabContent data={monthData} />
              </TabPanel>
              <TabPanel value={httpReferrers} index="year">
                <TabContent data={yearData} />
              </TabPanel>
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Stack sx={{ gap: 2.5, p: 3 }}>
            <Typography variant="subtitle1">Top Pages</Typography>
            <Box>
              <Tabs variant="fullWidth" value={pages} onChange={handlePages} aria-label="basic tabs example" type={TabsType.SEGMENTED}>
                <Tab label="Routes" {...a11yProps('routes')} />
                <Tab label="Pages" {...a11yProps('pages')} />
              </Tabs>
              <TabPanel value={pages} index="routes">
                <TabContent data={routesData} />
              </TabPanel>
              <TabPanel value={pages} index="pages">
                <TabContent data={pageData} />
              </TabPanel>
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack sx={{ gap: 2.5, p: 3 }}>
            <Typography variant="subtitle1">Top Sources</Typography>
            <Box>
              <Tabs variant="fullWidth" value={sources} onChange={handleSources} aria-label="basic tabs example" type={TabsType.SEGMENTED}>
                <Tab label="Affiliate" {...a11yProps('affiliate')} />
                <Tab label="Campaign" {...a11yProps('campaign')} />
                <Tab label="Marketing" {...a11yProps('marketing')} />
              </Tabs>
              <TabPanel value={sources} index="affiliate">
                <TabContent data={affiliateData} />
              </TabPanel>
              <TabPanel value={sources} index="campaign">
                <TabContent data={campaignData} />
              </TabPanel>
              <TabPanel value={sources} index="marketing">
                <TabContent data={marketingData} />
              </TabPanel>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.any,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  other: PropTypes.any
};

TabContent.propTypes = { data: PropTypes.array };

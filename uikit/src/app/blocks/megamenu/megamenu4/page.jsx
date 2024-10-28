// @mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { MegaMenu4 } from '@/blocks/mega-menu';
import { MenuPopper } from '@/components/navbar';
import { Themes } from '@/config';
import { BUY_NOW_URL } from '@/path';

/***************************  MEGAMENU 4 - FOOTER  ***************************/

function footerData() {
  return (
    <Stack direction={{ sm: 'row' }} sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}>
      <Stack sx={{ gap: 1 }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
          <Typography variant="h5">New landing demos are coming soon!</Typography>
          <Chip
            label={<Typography variant="caption">Coming Soon</Typography>}
            size="small"
            sx={{
              bgcolor: 'background.default',
              '& .MuiChip-label': { px: 1.5, py: 0.5 },
              display: { xs: 'none', sm: 'inline-flex' }
            }}
            icon={
              <CardMedia component="img" image="/assets/images/shared/celebration.svg" sx={{ width: 16, height: 16 }} alt="celebration" />
            }
          />
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          SaasAble offers 200+ customizable blocks, empowering you to effortlessly design and build landing pages tailored to your product
          or service needs.
        </Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{ display: { xs: 'none', sm: 'inline-flex' }, minWidth: 92, px: { xs: 2 }, py: 1.25 }}
        href={BUY_NOW_URL}
        target="_blank"
      >
        Buy Now
      </Button>
    </Stack>
  );
}

/***************************  MEGAMENU 4 - DATA  ***************************/

const data = {
  menuItems: [
    {
      title: 'CRM',
      theme: Themes.THEME_CRM,
      image: '/assets/images/mega-menu/crm-light.svg',
      status: 'Pro'
    },
    {
      title: 'AI',
      theme: Themes.THEME_AI,
      image: '/assets/images/mega-menu/ai-light.svg',
      status: 'Pro'
    },
    {
      title: 'Crypto',
      theme: Themes.THEME_CRYPTO,
      image: '/assets/images/mega-menu/crypto-light.svg',
      status: 'Pro'
    },
    {
      title: 'Hosting',
      theme: Themes.THEME_HOSTING,
      image: '/assets/images/mega-menu/hosting-light.svg',
      status: 'Pro'
    },
    {
      title: 'PMS',
      theme: Themes.THEME_PMS,
      image: '/assets/images/mega-menu/pms-light.svg',
      status: 'Pro'
    },
    {
      title: 'HRM',
      theme: Themes.THEME_HRM,
      image: '/assets/images/mega-menu/hrm-light.svg',
      status: 'Pro'
    },
    {
      title: 'Plugin',
      theme: Themes.THEME_PLUGIN,
      image: '/assets/images/mega-menu/plugin-light.svg',
      status: 'Pro'
    }
  ],
  footerData: footerData()
};

/***************************  BLOCK - MEGAMENU 4  ***************************/

export default function BlockMegamenu4() {
  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Box sx={{ my: 4 }}>
        <MenuPopper toggleProps={{ children: 'Mega Menu 4' }} defaultOpen popperWidth={936} offset={8}>
          <MegaMenu4 {...data} />
        </MenuPopper>
      </Box>
    </Stack>
  );
}

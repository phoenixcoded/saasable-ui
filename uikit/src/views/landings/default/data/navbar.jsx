// @mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { Themes } from '@/config';
import { MegaMenuType } from '@/enum';
import { SECTION_PATH } from '@/routes/Path';

/***************************  MEGAMENU 4 - FOOTER  ***************************/

function footerData() {
  return (
    <Stack direction={{ sm: 'row' }} sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}>
      <Stack sx={{ gap: 1 }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
          <Typography variant="h5">We are coming with many more Landing</Typography>
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
          Quia delectus dolorum temporibus est quasi nisi. Temporibus molestiae quae.
        </Typography>
      </Stack>
      <Button variant="contained" sx={{ display: { xs: 'none', sm: 'inline-flex' }, minWidth: 92, px: { xs: 2 }, py: 1.25 }}>
        Buy Now
      </Button>
    </Stack>
  );
}

/***************************  MEGAMENU 5 - BANNER  ***************************/

function bannerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">New Features Ahead</Typography>}
            icon={
              <CardMedia component="img" image="/assets/images/shared/celebration.svg" sx={{ width: 16, height: 16 }} alt="celebration" />
            }
            size="small"
            sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 }, '& .MuiChip-icon': { ml: 1.25 } }}
          />
          <Typography variant="h5">Exciting Dashboard on the Way!</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Experience enhanced functionality with our upcoming admin template designed to elevate your next project.
        </Typography>
      </Stack>
      <Button href={SECTION_PATH} variant="contained" sx={{ minWidth: 92, px: { xs: 2 }, py: 1.25 }}>
        Discover More
      </Button>
    </Stack>
  );
}

/***************************  DEFAULT - NAVBAR  ***************************/

export const navbar = {
  settingBtn: true,
  secondaryBtn: { children: 'Try Pro Version' },
  primaryBtn: { children: 'Buy Now' },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    {
      id: 'landings',
      title: 'Landings',
      megaMenu: {
        type: MegaMenuType.MEGAMENU4,
        popperOffsetX: 195,
        toggleBtn: { children: 'Landings' },
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
      }
    },
    { id: 'components', title: 'Components', link: SECTION_PATH },
    {
      id: 'pages',
      title: 'Pages',
      megaMenu: {
        type: MegaMenuType.MEGAMENU5,
        toggleBtn: { children: 'Pages' },
        popperWidth: 860,
        menuItems: [
          {
            title: 'General',
            itemsList: [
              { title: 'About', status: 'Pro' },
              { title: 'Career', status: 'Pro' },
              { title: 'Privacy Policy', link: { href: '/privacy-policy', target: '_blank' } },
              { title: 'Contact Us', link: { href: '/contact', target: '_blank' } },
              { title: 'FAQs', status: 'Pro' },
              { title: 'Pricing', status: 'Pro' }
            ]
          },
          {
            title: 'Maintenance',
            itemsList: [
              { title: 'Coming Soon', status: 'Pro' },
              { title: 'Error 404', link: { href: '/blocks/error404', target: '_blank' } },
              { title: 'Error 500', link: { href: '/blocks/error500', target: '_blank' } },
              { title: 'Under Maintenance', status: 'Pro' }
            ]
          },
          {
            title: 'External',
            itemsList: [
              { title: 'Blog', link: { href: 'https://blog.saasable.io/', target: '_blank' } },
              { title: 'Documentation', link: { href: 'https://phoenixcoded.gitbook.io/saasable', target: '_blank' } },
              { title: 'Support', link: { href: 'https://phoenixcoded.authordesk.app/', target: '_blank' } },
              { title: 'Discord' },
              { title: 'Terms & Conditions', link: { href: 'https://mui.com/store/terms/', target: '_blank' } }
            ]
          }
        ],
        bannerData: bannerData()
      }
    },
    { id: 'docus', title: 'Docs', link: 'https://phoenixcoded.gitbook.io/saasable', target: '_blank', icon: 'tabler-pin-invoke' }
  ]
};

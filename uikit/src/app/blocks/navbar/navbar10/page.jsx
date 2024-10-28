//@mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { Other2 } from '@/blocks/other';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import { MegaMenuType } from '@/enum';
import { ADMIN_PATH, DOCS_URL } from '@/path';

/***************************  MEGAMENU 5 - BANNER  ***************************/

function bannerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">SaasAble Admin Template</Typography>}
            icon={
              <CardMedia component="img" image="/assets/images/shared/celebration.svg" sx={{ width: 16, height: 16 }} alt="celebration" />
            }
            size="small"
            sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 }, '& .MuiChip-icon': { ml: 1.25 } }}
          />
          <Typography variant="h5">Exciting Dashboard on the Way!</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Effortlessly manage your app’s backend with customizable admin dashboards that enhance productivity.
        </Typography>
      </Stack>
      <Button href={ADMIN_PATH} target="_blank" variant="contained" sx={{ minWidth: 92, px: { xs: 2 }, py: 1.25 }}>
        View Dashboard
      </Button>
    </Stack>
  );
}

/***************************  NAVBAR 10 - DATA  ***************************/

const navItems = [
  { id: 'overview', title: 'Overview' },
  { id: 'products', title: 'Products' },
  { id: 'pricing', title: 'Pricing' },
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
            { title: 'Documentation', link: { href: DOCS_URL, target: '_blank' } },
            { title: 'Support', link: { href: 'https://support.phoenixcoded.net/', target: '_blank' } },
            {
              title: 'Discord',
              link: { href: 'https://discord.com/invite/2WpeGsQH98', target: '_blank' }
            },
            { title: 'Terms & Conditions', link: { href: 'https://mui.com/store/terms/', target: '_blank' } }
          ]
        }
      ],
      bannerData: bannerData()
    }
  },
  { id: 'help', title: 'Help', icon: 'tabler-help' }
];

/***************************  BLOCK - NAVBAR 10  ***************************/

export default function BlockNavbar10() {
  return (
    <>
      <Navbar10>
        <NavbarContent10 {...{ navItems }} />
      </Navbar10>
      <Other2 />
    </>
  );
}

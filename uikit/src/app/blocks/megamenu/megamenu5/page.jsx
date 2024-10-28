// @mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { MegaMenu5 } from '@/blocks/mega-menu';
import { MenuPopper } from '@/components/navbar';
import { ADMIN_PATH, DOCS_URL } from '@/path';

/***************************  MEGAMENU 5 - BANNER  ***************************/

function bannerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">SaasAble Admin</Typography>}
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

/***************************  MEGAMENU 5 - DATA  ***************************/

const data = {
  menuItems: [
    {
      title: 'General',
      itemsList: [
        { title: 'About', status: 'Pro' },
        { title: 'Career', status: 'Pro' },
        { title: 'FAQs', status: 'Pro' },
        { title: 'Privacy Policy', link: { href: '/privacy-policy', target: '_blank' } },
        { title: 'Contact Us', link: { href: '/contact', target: '_blank' } },
        { title: 'Coming Soon', status: 'Pro' },
        { title: 'Error 404', link: { href: '/blocks/error404', target: '_blank' } }
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
};

/***************************  BLOCK - MEGAMENU 5  ***************************/

export default function BlockMegamenu5() {
  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Box sx={{ my: 4 }}>
        <MenuPopper toggleProps={{ children: 'Mega Menu 5' }} defaultOpen popperWidth={750} offset={8}>
          <MegaMenu5 {...data} />
        </MenuPopper>
      </Box>
    </Stack>
  );
}

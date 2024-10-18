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

/***************************  MEGAMENU 5 - BANNER  ***************************/

function bannerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">Coming Soon</Typography>}
            icon={
              <CardMedia component="img" image="/assets/images/shared/celebration.svg" sx={{ width: 16, height: 16 }} alt="celebration" />
            }
            size="small"
            sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 }, '& .MuiChip-icon': { ml: 1.25 } }}
          />
          <Typography variant="h5">We are coming with many more landings</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Discover tailored solutions to elevate your business. Stay ahead with our latest updates and insights.
        </Typography>
      </Stack>
      <Button variant="contained" sx={{ minWidth: 92, px: { xs: 2 }, py: 1.25 }}>
        Explore Now
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
        { title: 'About', link: { href: '/', target: '_blank' } },
        { title: 'Career' },
        { title: 'FAQs' },
        { title: 'Privacy Policy' },
        { title: 'Contact Us' },
        { title: 'Coming Soon' },
        { title: '404' }
      ]
    },
    {
      title: 'External',
      itemsList: [{ title: 'Blog' }, { title: 'Documentation' }, { title: 'Support' }, { title: 'Discord' }, { title: 'Tutorials' }]
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
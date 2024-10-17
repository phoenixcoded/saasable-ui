'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';

/***************************  SITEMAP - DATA  ***************************/

const menuItems = [
  {
    id: 'use-case',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Use Case',
    menu: [
      {
        label: 'Business Analytics',
        link: { href: '#' }
      },
      {
        label: 'Marketing Automation',
        link: { href: '#' }
      },
      {
        label: 'Collaboration Suites',
        link: { href: '#' }
      },
      {
        label: 'Project Management',
        link: { href: '#' }
      }
    ]
  },
  {
    id: 'product',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Product',
    menu: [
      {
        label: 'Home',
        link: { href: '#' }
      },
      {
        label: 'About',
        link: { href: '#' }
      },
      {
        label: 'Pricing',
        link: { href: '#' }
      },
      {
        label: 'Blog',
        link: { href: '#' }
      },
      {
        label: 'Intigration',
        link: { href: '#' }
      },
      {
        label: 'Feature',
        link: { href: '#' }
      }
    ]
  },
  {
    id: 'company',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Company',
    menu: [
      {
        label: 'About',
        link: { href: '#' }
      },
      {
        label: 'Career',
        link: { href: '#' }
      },
      {
        label: 'Use case',
        link: { href: '#' }
      },
      {
        label: 'Integration',
        link: { href: '#' }
      }
    ]
  }
];

/***************************  FOOTER - SITEMAP  ***************************/

export default function Sitemap({ list, isMenuDesign }) {
  const theme = useTheme();

  const menuItemStyle = {
    color: 'text.secondary',
    justifyContent: 'flex-start',
    px: 0,
    minHeight: { xs: 36, sm: 40 },
    '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
    '&.Mui-focusVisible': { bgcolor: 'transparent', ...generateFocusVisibleStyles(theme.palette.primary.main) }
  };

  return (
    <Grid container spacing={{ xs: 2.5, md: 4 }} sx={{ justifyContent: 'space-between' }}>
      {(list || menuItems).map((item, index) => (
        <Grid key={index} {...item.grid}>
          <Stack sx={{ alignItems: 'flex-start', gap: { md: 3 } }}>
            <Typography variant="h4">{item.title}</Typography>
            <MenuList>
              {item?.menu &&
                item?.menu.map((menu, i) => (
                  <MenuItem
                    key={i}
                    disableRipple
                    sx={{ ...menuItemStyle, ...(isMenuDesign && { ...theme.typography.caption2, fontWeight: 400, my: 0.25 }) }}
                    {...(menu.link && { component: NextLink, ...menu.link })}
                    tabIndex={0}
                  >
                    {menu.label}
                  </MenuItem>
                ))}
            </MenuList>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

Sitemap.propTypes = { list: PropTypes.array, isMenuDesign: PropTypes.bool };

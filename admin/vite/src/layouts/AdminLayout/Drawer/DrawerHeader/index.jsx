import PropTypes from 'prop-types';
// @mui
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { handlerDrawerOpen, useGetMenuMaster } from '@/states/menu';
import Logo from '@/components/logo';

// @assets
import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarRightCollapse } from '@tabler/icons-react';

/***************************  DRAWER HEADER  ***************************/

export default function DrawerHeader({ open }) {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  return (
    <Box sx={{ width: 1, px: 2, py: { xs: 2, md: 2.5 } }}>
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: open ? 'space-between' : 'center', height: 36 }}>
        {open && <Logo />}
        <IconButton
          aria-label="open drawer"
          onClick={() => handlerDrawerOpen(!drawerOpen)}
          size="small"
          color="secondary"
          variant="outlined"
        >
          {!drawerOpen ? <IconLayoutSidebarRightCollapse size={20} /> : <IconLayoutSidebarLeftCollapse size={20} />}
        </IconButton>
      </Stack>
    </Box>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };

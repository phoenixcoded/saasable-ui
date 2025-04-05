import { useMemo } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

// @project
import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';
import { handlerDrawerOpen, useGetMenuMaster } from '@/states/menu';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from '@/config';

// @assets
import { IconMenu2 } from '@tabler/icons-react';

/***************************  ADMIN LAYOUT - HEADER  ***************************/

export default function Header() {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  // Memoized header content to avoid unnecessary re-renders
  const headerContent = useMemo(() => <HeaderContent />, []);

  // Common header content
  const mainHeader = (
    <Toolbar sx={{ minHeight: { xs: 68, md: 76 } }}>
      <IconButton
        aria-label="open drawer"
        onClick={() => handlerDrawerOpen(!drawerOpen)}
        size="small"
        color="secondary"
        variant="outlined"
        sx={{ display: { xs: 'inline-flex', lg: 'none' }, mr: 1 }}
      >
        <IconMenu2 size={20} />
      </IconButton>
      {headerContent}
    </Toolbar>
  );

  // AppBar props, including styles that vary based on drawer state and screen size
  const appBar = {
    color: 'inherit',
    position: 'fixed',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
      zIndex: 1200,
      width: { xs: '100%', lg: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : `calc(100% - ${MINI_DRAWER_WIDTH}px)` }
    }
  };

  return (
    <>
      {!downLG ? (
        <AppBarStyled open={drawerOpen} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
}

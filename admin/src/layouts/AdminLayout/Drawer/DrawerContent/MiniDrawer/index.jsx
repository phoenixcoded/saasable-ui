// @mui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import menuItems from '@/menu';
import NavGroup from './NavGroup';

/***************************  DRAWER CONTENT - MINI DRAWER  ***************************/

export default function MiniDrawer() {
  const navGroups = menuItems.items.map((item, index) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={index} item={item} />;
      default:
        return (
          <Typography key={index} variant="h6" color="error" align="center">
            Error
          </Typography>
        );
    }
  });

  return <Box sx={{ transition: 'all 0.3s ease-in-out' }}>{navGroups}</Box>;
}

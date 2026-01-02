// @mui
import IconButton from '@mui/material/IconButton';

// @assets
import { IconSun } from '@tabler/icons-react';

// @third-party
import { useSnackbar } from 'notistack';

/***************************  HEADER - THEME MODE SWITCHER  ***************************/

export default function ThemeModeSwitcher() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('Upgrade to pro for theme mode');
  };

  return (
    <IconButton variant="outlined" color="secondary" size="small" onClick={handleClick} aria-label="show theme mode">
      <IconSun size={16} />
    </IconButton>
  );
}

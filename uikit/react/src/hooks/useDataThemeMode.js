import { useEffect } from 'react';

// @project
import { useTheme } from '@mui/material/styles';

/***************************  HOOKS - DATA THEME MODE  ***************************/

export default function useDataThemeMode() {
  const theme = useTheme();

  useEffect(() => {
    const myElement = document.getElementsByTagName('html');
    myElement[0]?.setAttribute('data-theme-mode', theme.palette.mode);
  }, [theme.palette.mode]);
}

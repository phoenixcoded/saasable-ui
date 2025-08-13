// @mui
import { alpha } from '@mui/material/styles';

/***************************  OVERRIDES - BACKDROP  ***************************/

export default function Backdrop(theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[900], 0.2)
        }
      }
    }
  };
}

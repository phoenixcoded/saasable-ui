// @project
import { withAlpha } from '@/utils/colorUtils';

/***************************  OVERRIDES - BACKDROP  ***************************/

export default function Backdrop(theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: withAlpha(theme.vars.palette.grey[900], 0.2)
        }
      }
    }
  };
}

// @project
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';

/*************************** OVERRIDES - LINK ***************************/

export default function Link(theme) {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
        root: {
          position: 'relative',
          '&:focus-visible': generateFocusVisibleStyles(theme.vars.palette.primary.main)
        }
      }
    }
  };
}

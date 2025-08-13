// @mui
import { alpha } from '@mui/material/styles';

/***************************  OVERRIDES - TAB  ***************************/

export default function Tab(theme) {
  return {
    MuiTab: {
      defaultProps: {
        disableFocusRipple: true
      },
      styleOverrides: {
        root: {
          ...theme.typography.h6,
          fontWeight: 400,
          minWidth: 'auto',
          minHeight: 42,
          padding: '10px 16px',
          color: alpha(theme.palette.text.secondary, 0.6),
          '&:hover': {
            color: theme.palette.text.secondary
          },
          '&:focus-visible': {
            boxShadow: 'none',
            backgroundColor: alpha(theme.palette.grey[500], 0.25)
          },
          '&.Mui-disabled': {
            color: alpha(theme.palette.text.secondary, 0.3),
            pointerEvents: 'auto',
            cursor: 'not-allowed',
            '&:hover': {
              color: alpha(theme.palette.text.secondary, 0.3),
              backgroundColor: 'transparent'
            }
          },
          '& .MuiTouchRipple-root span': {
            backgroundColor: alpha(theme.palette.secondary.main, 0.3)
          }
        },
        textColorSecondary: {
          '&.Mui-selected': {
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: alpha(theme.palette.grey[200], 0.25)
            }
          }
        }
      }
    }
  };
}

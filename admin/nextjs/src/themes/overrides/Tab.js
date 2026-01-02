// @project
import { withAlpha } from '@/utils/colorUtils';

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
          color: withAlpha(theme.vars.palette.text.secondary, 0.6),
          '&:hover': {
            color: theme.vars.palette.text.secondary
          },
          '&:focus-visible': {
            boxShadow: 'none',
            backgroundColor: withAlpha(theme.vars.palette.grey[500], 0.25)
          },
          '&.Mui-disabled': {
            color: withAlpha(theme.vars.palette.text.secondary, 0.3),
            pointerEvents: 'auto',
            cursor: 'not-allowed',
            '&:hover': {
              color: withAlpha(theme.vars.palette.text.secondary, 0.3),
              backgroundColor: 'transparent'
            }
          },
          '& .MuiTouchRipple-root span': {
            backgroundColor: withAlpha(theme.vars.palette.secondary.main, 0.3)
          }
        },
        textColorSecondary: {
          '&.Mui-selected': {
            color: theme.vars.palette.text.primary,
            '&:hover': {
              backgroundColor: withAlpha(theme.vars.palette.grey[200], 0.25)
            }
          }
        }
      }
    }
  };
}

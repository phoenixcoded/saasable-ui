// @mui
import { alpha } from '@mui/material/styles';

// @project
import { TabsType } from '@/enum';

const segmentedBorderRadius = 8;

/***************************  OVERRIDES - TABS  ***************************/

export default function Tabs(theme) {
  return {
    MuiTabs: {
      defaultProps: {
        indicatorColor: 'secondary',
        textColor: 'secondary'
      },

      styleOverrides: {
        root: {
          minHeight: 42,
          variants: [
            {
              props: { type: TabsType.SEGMENTED, variant: 'fullWidth' },
              style: {
                width: '100%'
              }
            },
            {
              props: { type: TabsType.SEGMENTED },
              style: {
                display: 'inline-flex',
                borderRadius: segmentedBorderRadius,
                overflow: 'hidden',
                minHeight: 38,
                '& .MuiTabs-indicator': {
                  display: 'none'
                },
                '& .MuiTab-root': {
                  ...theme.typography.body2,
                  color: theme.palette.text.secondary,
                  textTransform: 'none',
                  minHeight: 38,
                  padding: '9px 12px',
                  borderRadius: 0,
                  border: `1px solid ${theme.palette.grey[200]}`,
                  '&:first-of-type': {
                    borderTopLeftRadius: segmentedBorderRadius,
                    borderBottomLeftRadius: segmentedBorderRadius
                  },
                  '&:last-of-type': {
                    borderTopRightRadius: segmentedBorderRadius,
                    borderBottomRightRadius: segmentedBorderRadius
                  },
                  '&:not(:first-of-type)': {
                    borderLeft: 'none' // Prevent double border between tab
                  },
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.grey[100],
                    '&:hover': {
                      backgroundColor: theme.palette.grey[200]
                    }
                  },
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.grey[200], 0.25)
                  },
                  '&.Mui-disabled': {
                    color: theme.palette.action.disabled
                  }
                },
                '& .Mui-focusVisible': {
                  backgroundColor: alpha(theme.palette.grey[500], 0.25),
                  '&.Mui-selected': {
                    backgroundColor: alpha(theme.palette.secondary.light, 0.5)
                  }
                }
              }
            }
          ]
        },
        indicator: ({ ownerState }) => ({
          ...(ownerState.indicatorColor === 'secondary' && {
            backgroundColor: theme.palette.text.primary
          })
        })
      }
    }
  };
}

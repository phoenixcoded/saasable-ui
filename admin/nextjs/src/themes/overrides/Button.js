// @project
import { generateFocusStyle } from '@/utils/generateFocusStyle';

// Define the list of colors that the Radio component will support
const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

/***************************  OVERRIDES - BUTTON  ***************************/

export default function Button(theme) {
  const boxShadow = {
    boxShadow: theme.vars.customShadows.button,
    '&:hover': {
      boxShadow: theme.vars.customShadows.button
    }
  };

  const outlinedColorVariants = colors.map((color) => {
    const paletteColor = theme.vars.palette[color];
    return {
      props: { variant: 'outlined', color },
      style: {
        ...boxShadow,
        borderColor: paletteColor.lighter,
        ...(color === 'secondary' && {
          borderColor: theme.vars.palette.divider,
          color: theme.vars.palette.text.primary
        })
      }
    };
  });

  return {
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
            '&:hover': {
              backgroundColor: 'transparent',
              '&.MuiButton-contained': {
                backgroundColor: theme.vars.palette.action.disabledBackground
              }
            }
          },
          '&:focus-visible': {
            ...generateFocusStyle(theme.vars.palette.primary.main)
          },
          variants: [
            ...outlinedColorVariants,
            {
              props: { variant: 'text', color: 'secondary' },
              style: {
                color: theme.vars.palette.text.primary
              }
            }
          ]
        },
        contained: { ...boxShadow },
        startIcon: {
          marginLeft: 0,
          marginRight: 4
        },
        endIcon: {
          marginLeft: 4
        },
        sizeSmall: {
          height: 36,
          fontSize: 12,
          lineHeight: '16px',
          letterSpacing: 0,
          padding: 10
        },
        sizeMedium: {
          height: 42,
          fontSize: 14,
          lineHeight: '18px',
          letterSpacing: 0,
          padding: 12
        },
        sizeLarge: {
          height: 48,
          fontSize: 16,
          lineHeight: '20px',
          letterSpacing: 0,
          padding: '16px 18px'
        }
      }
    }
  };
}

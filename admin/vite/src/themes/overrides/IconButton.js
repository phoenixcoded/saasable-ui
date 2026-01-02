// @project
import { withAlpha } from '@/utils/colorUtils';
import { generateFocusStyle } from '@/utils/generateFocusStyle';

const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

/***************************  COMPONENT - ICON BUTTON  ***************************/

export default function IconButton(theme) {
  const createColorVariant = (color, variant, styleFn, theme) => {
    const paletteColor = theme.vars.palette[color];
    return {
      props: { variant, color },
      style: styleFn(paletteColor)
    };
  };

  const commonDisabledStyles = {
    '&.Mui-disabled': {
      backgroundColor: theme.vars.palette.action.disabledBackground
    },
    '&.Mui-disabled:not(.MuiIconButton-loading)': {
      color: theme.vars.palette.action.disabled
    }
  };

  const colorTextVariants = colors.map((color) =>
    createColorVariant(
      color,
      undefined,
      (paletteColor) => ({
        color: paletteColor.main
      }),
      theme
    )
  );

  const colorContainedVariants = colors.map((color) =>
    createColorVariant(
      color,
      'contained',
      (paletteColor) => ({
        color: paletteColor.contrastText,
        backgroundColor: paletteColor.main,
        '&:hover': {
          backgroundColor: paletteColor.dark
        },
        ...commonDisabledStyles
      }),
      theme
    )
  );

  const colorOutlinedVariants = colors.map((color) =>
    createColorVariant(
      color,
      'outlined',
      (paletteColor) => ({
        color: paletteColor.main,
        border: `1px solid ${paletteColor.lighter}`,
        ...(color === 'secondary' && { color: theme.vars.palette.text.primary, borderColor: theme.vars.palette.divider }),
        '&.Mui-disabled': {
          backgroundColor: withAlpha(theme.vars.palette.grey[700], 0.04),
          borderColor: theme.vars.palette.action.disabledBackground
        },
        '&.Mui-disabled:not(.MuiIconButton-loading)': {
          color: theme.vars.palette.action.disabled
        }
      }),
      theme
    )
  );

  return {
    MuiIconButton: {
      defaultProps: {
        disableFocusRipple: true,
        color: 'primary'
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          '& .MuiTouchRipple-root span': {
            borderRadius: 8
          },
          '&.Mui-disabled': {
            pointerEvents: 'auto',
            cursor: 'not-allowed'
          },
          '&:focus-visible': {
            ...generateFocusStyle(theme.vars.palette.primary.main)
          },
          variants: [...colorTextVariants, ...colorContainedVariants, ...colorOutlinedVariants]
        },
        sizeSmall: { width: 36, height: 36 },
        sizeMedium: { width: 42, height: 42 },
        sizeLarge: { width: 48, height: 48 }
      }
    }
  };
}

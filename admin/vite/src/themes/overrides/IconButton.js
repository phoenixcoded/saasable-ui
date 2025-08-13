// @mui
import { alpha } from '@mui/material/styles';

// @project
import { generateFocusStyle } from '@/utils/generateFocusStyle';

const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

/***************************  COMPONENT - ICON BUTTON  ***************************/

export default function IconButton(theme) {
  const createColorVariant = (color, variant, styleFn) => {
    const paletteColor = theme.palette[color];

    return {
      props: { variant, color },
      style: styleFn(paletteColor)
    };
  };

  const commonDisabledStyles = {
    '&.Mui-disabled': {
      color: theme.palette.action.disabled,
      backgroundColor: theme.palette.action.disabledBackground
    }
  };

  const colorTextVariants = colors.map((color) =>
    createColorVariant(color, undefined, (paletteColor) => ({
      color: paletteColor.main
    }))
  );

  const colorContainedVariants = colors.map((color) =>
    createColorVariant(color, 'contained', (paletteColor) => ({
      color: paletteColor.contrastText,
      backgroundColor: paletteColor.main,
      '&:hover': {
        backgroundColor: paletteColor.dark
      },
      ...commonDisabledStyles
    }))
  );

  const colorOutlinedVariants = colors.map((color) =>
    createColorVariant(color, 'outlined', (paletteColor) => ({
      color: paletteColor.main,
      border: `1px solid ${paletteColor.lighter}`,
      ...(color === 'secondary' && { color: theme.palette.text.primary, borderColor: theme.palette.divider }),
      '&.Mui-disabled': {
        color: theme.palette.action.disabled,
        backgroundColor: alpha(theme.palette.grey[700], 0.04),
        borderColor: theme.palette.action.disabledBackground
      }
    }))
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
            ...generateFocusStyle(theme.palette.primary.main)
          },
          variants: [...colorTextVariants, ...colorContainedVariants, ...colorOutlinedVariants]
        },
        sizeSmall: { width: 36, height: 36 },
        sizeMedium: { width: 42, height: 42 }
      }
    }
  };
}

// @project
import { generateFocusStyle } from '@/utils/generateFocusStyle';

// @assets
import { IconSquare, IconSquareCheckFilled, IconSquareMinusFilled } from '@tabler/icons-react';

const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

/***************************  OVERRIDES - CHECKBOX  ***************************/

export default function Checkbox(theme) {
  const colorVariants = colors.map((color) => {
    const paletteColor = theme.palette[color];

    return {
      props: { color }
    };
  });

  return {
    MuiCheckbox: {
      defaultProps: {
        disableFocusRipple: true,
        icon: <IconSquare stroke={1} size={16} color={theme.palette.grey[500]} />,
        checkedIcon: <IconSquareCheckFilled stroke={1} size={16} />,
        indeterminateIcon: <IconSquareMinusFilled stroke={1} size={16} />
      },
      styleOverrides: {
        root: {
          variants: [...colorVariants],
          padding: 6.675,
          marginLeft: 2.325, // 9 - 6.675 = For fix position of checkbox according to custom padding
          marginRight: 2.325,
          borderRadius: 4,
          color: theme.palette.grey[500],
          '&:hover:not(.Mui-checked):not(.MuiCheckbox-indeterminate)': {
            color: theme.palette.grey[600]
          },
          '& ~ .MuiFormControlLabel-label': theme.typography.body2,
          '& svg': { width: 21.34, height: 21.34 },
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto'
          },
          '& .MuiTouchRipple-root span': {
            borderRadius: 4
          },
          '&.Mui-focusVisible': {
            '& svg': { borderRadius: 4, ...generateFocusStyle(theme.palette.primary.main) }
          }
        },
        sizeSmall: {
          '& ~ .MuiFormControlLabel-label': theme.typography.caption,
          '& svg': { width: 18.6725, height: 18.6725 }
        },
        sizeLarge: {
          '& ~ .MuiFormControlLabel-label': theme.typography.body1,
          '& svg': { width: 26.675, height: 26.675 }
        }
      }
    }
  };
}

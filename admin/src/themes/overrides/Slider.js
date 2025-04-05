// @mui
import { alpha } from '@mui/material/styles';

// Define the list of colors that the Slider component will support
const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

/***************************  COMPONENT - SLIDER  ***************************/

export default function Slider(theme) {
  // Generate color variants for the Slider component
  const colorVariants = colors.map((color) => {
    const paletteColor = theme.palette[color];
    return {
      props: { color },
      style: {
        '& .MuiSlider-track': {},
        '& .MuiSlider-thumb': {
          borderColor: paletteColor.main,
          '&:focus, &:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 4px ${alpha(paletteColor.main, 0.2)}`
          },
          '&:active': {
            boxShadow: `0px 0px 0px 8px ${alpha(paletteColor.main, 0.5)}`
          }
        },
        '& .MuiSlider-valueLabel': {
          color: paletteColor.darker,
          backgroundColor: paletteColor.lighter
        }
      }
    };
  });

  return {
    MuiSlider: {
      styleOverrides: {
        track: {
          height: 6
        },
        thumb: {
          width: 10,
          height: 10,
          border: `2px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.background.default
        },
        rail: {
          height: 8,
          opacity: 1,
          color: theme.palette.grey[100]
        },
        valueLabel: {
          ...theme.typography.caption,
          minWidth: 40,
          padding: 6,
          borderRadius: 8,
          top: -12,
          '&:before': {
            width: 10,
            height: 10
          }
        },
        root: {
          variants: [...colorVariants],
          '&.Mui-disabled': {
            '& .MuiSlider-rail': {
              opacity: 0.25
            },
            '& .MuiSlider-track': {
              backgroundColor: theme.palette.action.disabled,
              borderColor: 'transparent'
            },
            '& .MuiSlider-thumb': {
              border: '2px solid',
              borderColor: theme.palette.action.disabled
            }
          }
        }
      }
    }
  };
}

const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

/***************************  SWITCH - SIZE  ***************************/

function getSizeStyle(size) {
  switch (size) {
    case 'small':
      return { width: 34, height: 20, base: 14, thumb: 16, trackRadius: 16 };
    case 'medium':
    default:
      return { width: 38, height: 22, base: 16, thumb: 18, trackRadius: 16 };
  }
}

function switchStyle(size) {
  const sizes = getSizeStyle(size);

  return {
    width: sizes.width,
    height: sizes.height,
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: `translateX(${sizes.base}px)`
      }
    },
    '& .MuiSwitch-thumb': {
      width: sizes.thumb,
      height: sizes.thumb
    },
    '& .MuiSwitch-track': {
      borderRadius: sizes.trackRadius
    }
  };
}

/***************************  OVERRIDES - SWITCH  ***************************/

export default function Switch(theme) {
  const colorVariants = colors.map((color) => {
    const paletteColor = theme.palette[color];

    return {
      props: { color },
      style: {
        '& .MuiSwitch-switchBase': {
          '&:not(.Mui-checked) ~ .MuiSwitch-track': {
            backgroundColor: paletteColor.light,
            ...((color === 'primary' || color === 'secondary') && {
              backgroundColor: paletteColor.lighter
            }),
            ...theme.applyStyles('dark', {
              backgroundColor: paletteColor.darker
            })
          }
        }
      }
    };
  });

  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          color: theme.vars.palette.text.primary,
          padding: 0,
          display: 'flex',
          ...switchStyle('medium'),
          variants: [...colorVariants]
        },
        track: {
          opacity: 1,
          backgroundColor: theme.vars.palette.secondary.lighter,
          boxSizing: 'border-box'
        },
        thumb: {
          borderRadius: '50%',
          transition: theme.transitions.create(['width'], {
            duration: 200
          })
        },
        switchBase: {
          '&.Mui-checked': {
            color: theme.vars.palette.background.default,
            '& ~ .MuiSwitch-track': {
              opacity: 1
            },
            '&.Mui-disabled': {
              color: theme.vars.palette.background.paper,
              '~.MuiSwitch-track': {
                opacity: 0.1
              }
            }
          },
          '&.Mui-disabled': {
            color: theme.vars.palette.background.paper,
            '~.MuiSwitch-track': {
              opacity: 0.3
            },
            cursor: 'not-allowed',
            pointerEvents: 'auto',
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }
        },
        sizeSmall: { ...switchStyle('small'), '& ~ .MuiFormControlLabel-label': theme.typography.body2 }
      }
    }
  };
}

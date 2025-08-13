/***************************  COMPONENT - LINEAR PROGRESS  ***************************/

export default function LinearProgress(theme) {
  return {
    MuiLinearProgress: {
      defaultProps: {
        variant: 'determinate'
      },
      styleOverrides: {
        root: ({ ownerState }) => {
          const paletteColor = theme.palette[ownerState.color];
          return {
            '& .MuiLinearProgress-bar': {
              backgroundColor: paletteColor.main
            },
            borderRadius: 24,
            backgroundColor: theme.palette.grey[100],
            variants: [
              {
                props: { type: 'light' },
                style: {
                  '& .MuiLinearProgress-bar': {
                    opacity: 0.6
                  }
                }
              }
            ]
          };
        },
        bar: {
          borderRadius: 24
        }
      }
    }
  };
}

/***************************  OVERRIDES - OUTLINE INPUT  ***************************/

export default function OutlinedInput(theme) {
  return {
    MuiOutlinedInput: {
      defaultProps: {
        autoComplete: 'off'
      },
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 500,
          borderRadius: 16
        },
        notchedOutline: {
          borderColor: theme.vars.palette.grey[600]
        },
        input: {
          '&::placeholder': { ...theme.typography.caption2, color: theme.vars.palette.grey[700], opacity: 0.8 }
        }
      }
    }
  };
}

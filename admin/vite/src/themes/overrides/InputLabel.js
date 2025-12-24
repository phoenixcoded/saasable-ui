/***************************  OVERRIDES - INPUT LABEL  ***************************/

export default function InputLabel(theme) {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
          color: theme.vars.palette.text.primary,
          marginBottom: 6,
          '&.Mui-error': {
            color: theme.vars.palette.error.main
          }
        },
        asterisk: {
          color: theme.vars.palette.error.main
        }
      }
    }
  };
}

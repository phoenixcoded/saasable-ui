/***************************  OVERRIDES - BAR LABEL  ***************************/

export default function BarLabel(theme) {
  return {
    MuiBarLabel: {
      styleOverrides: {
        root: {
          fill: theme.vars.palette.text.secondary
        }
      }
    }
  };
}

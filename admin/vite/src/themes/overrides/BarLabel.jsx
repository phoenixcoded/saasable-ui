/***************************  OVERRIDES - BAR LABEL  ***************************/

export default function BarLabel(theme) {
  return {
    MuiBarLabel: {
      styleOverrides: {
        root: {
          fill: theme.palette.text.secondary
        }
      }
    }
  };
}

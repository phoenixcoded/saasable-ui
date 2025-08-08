/***************************  OVERRIDES - CHARTS AXIS HIGHLIGHT  ***************************/

export default function ChartsAxiasHighlight(theme) {
  return {
    MuiChartsAxisHighlight: {
      styleOverrides: {
        root: {
          stroke: theme.palette.grey[600]
        }
      }
    }
  };
}

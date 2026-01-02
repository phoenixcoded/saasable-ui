/***************************  OVERRIDES - CHARTS AXIS  ***************************/

export default function ChartsAxis(theme) {
  return {
    MuiChartsAxis: {
      styleOverrides: {
        root: {
          '& .MuiChartsAxis-tickLabel': {
            fill: theme.vars.palette.text.secondary
          },
          '& .MuiChartsAxis-line': {
            stroke: theme.vars.palette.divider
          }
        }
      }
    }
  };
}

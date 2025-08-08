/***************************  OVERRIDES - CHARTS AXIS  ***************************/

export default function ChartsAxis(theme) {
  return {
    MuiChartsAxis: {
      styleOverrides: {
        root: {
          '& .MuiChartsAxis-tickLabel': {
            fill: theme.palette.text.secondary
          },
          '& .MuiChartsAxis-line': {
            stroke: theme.palette.divider
          }
        }
      }
    }
  };
}

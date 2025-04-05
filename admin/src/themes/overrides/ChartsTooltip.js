/***************************  OVERRIDES - CHARTS TOOLTIP  ***************************/

export default function ChartsTooltip(theme) {
  return {
    MuiChartsTooltip: {
      styleOverrides: {
        root: {
          '& .MuiChartsTooltip-paper': {
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 8,
            boxShadow: theme.customShadows.section
          },
          '& .MuiChartsTooltip-row': {
            '&:first-of-type .MuiChartsTooltip-cell': { paddingTop: 14 },
            '&:last-of-type .MuiChartsTooltip-cell': { paddingBottom: 14 }
          },
          '& .MuiChartsTooltip-cell': { paddingTop: 6, paddingBottom: 6 },
          '& .MuiChartsTooltip-labelCell': { '& .MuiTypography-root': { color: theme.palette.text.secondary } },
          '& .MuiChartsTooltip-valueCell': { '& .MuiTypography-root': { ...theme.typography.subtitle1 } }
        }
      }
    }
  };
}

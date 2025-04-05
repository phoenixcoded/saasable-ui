/***************************  COMPONENT - TOOLTIP  ***************************/

export default function Tooltip(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          ...theme.typography.caption,
          color: theme.palette.secondary.darker,
          backgroundColor: theme.palette.secondary.lighter,
          padding: 6,
          borderRadius: 8,
          boxShadow: theme.customShadows.tooltip,
          '& svg': {
            opacity: 0.7
          }
        },
        arrow: {
          color: theme.palette.secondary.lighter,
          width: '2em'
        }
      }
    }
  };
}

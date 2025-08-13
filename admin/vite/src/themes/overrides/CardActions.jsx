/***************************  OVERRIDES - CARD ACTIONS  ***************************/

export default function CardActions(theme) {
  return {
    MuiCardActions: {
      styleOverrides: {
        root: { padding: 20, borderTop: `1px solid ${theme.palette.divider}` }
      }
    }
  };
}

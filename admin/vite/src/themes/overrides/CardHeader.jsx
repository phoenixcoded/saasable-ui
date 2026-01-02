/***************************  OVERRIDES - CARD HEADER  ***************************/

export default function CardHeader(theme) {
  return {
    MuiCardHeader: {
      styleOverrides: {
        root: { padding: 20, borderBottom: `1px solid ${theme.vars.palette.divider}` },
        action: { margin: 0 },
        content: {},
        title: { '& ~ span.MuiCardHeader-subheader': { marginTop: 4 } }
      }
    }
  };
}

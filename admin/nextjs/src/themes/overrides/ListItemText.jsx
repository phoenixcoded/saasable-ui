/***************************  OVERRIDES - LIST ITEM TEXT  ***************************/

export default function ListItemText() {
  return {
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: { variant: 'body2' }
      },
      styleOverrides: {
        root: { marginTop: 0, marginBottom: 0 }
      }
    }
  };
}

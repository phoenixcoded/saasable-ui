/***************************  COMPONENT - BREADCRUMBS  ***************************/

export default function Breadcrumbs(theme) {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          color: theme.palette.text.secondary,
          marginLeft: 4,
          marginRight: 4
        }
      }
    }
  };
}

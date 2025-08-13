/***************************  OVERRIDES - MENU  ***************************/

export default function ListItemButton(theme) {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '10px 8px',
          borderRadius: 4,
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.lighter,
            '&:hover': { backgroundColor: theme.palette.primary.light }
          }
        }
      }
    }
  };
}

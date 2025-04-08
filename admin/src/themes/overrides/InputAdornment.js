/***************************  COMPONENT - INPUT ADORNMENT  ***************************/

export default function InputAdornment(theme) {
  return {
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: theme.palette.text.secondary,
          '& svg': { width: 16, height: 16, color: theme.palette.text.secondary }
        },
        positionStart: { marginRight: 6 },
        positionEnd: { marginLeft: 6 }
      }
    }
  };
}

/***************************  OVERRIDES - CONTAINER  ***************************/

export default function Container() {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.MuiContainer-maxWidthXl': {
            maxWidth: 1266
          },
          '&.MuiContainer-maxWidthLg': {
            maxWidth: 1128
          }
        }
      }
    }
  };
}

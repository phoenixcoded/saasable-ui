/***************************  OVERRIDES - POPPER  ***************************/

export default function Popper() {
  return {
    MuiPopper: {
      styleOverrides: {
        root: {
          zIndex: 1201
        }
      }
    }
  };
}

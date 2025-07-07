/***************************  COMPONENT - ACCORDION  ***************************/

export default function Accordion() {
  return {
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        elevation: 0
      },
      styleOverrides: {
        root: {
          '&:before': {
            display: 'none'
          }
        }
      }
    }
  };
}

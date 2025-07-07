/***************************  OVERRIDES - CHIP  ***************************/

export default function Chip() {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 74,
          height: 'auto'
        },
        label: {
          padding: '12px 24px',
          svg: {
            verticalAlign: 'middle'
          }
        }
      }
    }
  };
}

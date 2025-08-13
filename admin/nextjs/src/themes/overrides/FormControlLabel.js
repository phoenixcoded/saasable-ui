// @mui
import { alpha } from '@mui/material/styles';

/***************************  OVERRIDES - FORM CONTROL LABEL  ***************************/

export default function FormControlLabel(theme) {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            cursor: 'not-allowed'
          }
        },
        label: {
          '&.Mui-disabled': {
            color: alpha(theme.palette.text.disabled, 0.8)
          }
        },
        labelPlacementStart: { marginRight: 0, '& .MuiSwitch-root': { marginLeft: 12 } },
        labelPlacementEnd: { '& .MuiSwitch-root': { marginRight: 12 } }
      }
    }
  };
}

import SvgIcon from '@mui/material/SvgIcon';

// @project
import { withAlpha } from '@/utils/colorUtils';

const TaskAltOutlinedIcon = (props) => (
  <SvgIcon {...props} fontSize="inherit">
    <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
  </SvgIcon>
);

/***************************  OVERRIDES - ALERT  ***************************/

export default function Alert(theme) {
  const { vars } = theme;

  const standardVariant = ({ ownerState }) => {
    if (ownerState.severity === 'primary' || ownerState.severity === 'secondary') {
      const paletteColor = vars.palette[ownerState.severity];

      return {
        color: vars.palette.text.secondary,
        backgroundColor: withAlpha(paletteColor.lighter, 0.25),
        '& .MuiAlert-icon': { color: paletteColor.main }
      };
    }
  };

  const outlinedVariant = ({ ownerState }) => {
    if (ownerState.severity === 'primary' || ownerState.severity === 'secondary') {
      const paletteColor = vars.palette[ownerState.severity];

      return {
        color: vars.palette.text.secondary,
        '& .MuiAlert-icon': { color: paletteColor.main }
      };
    }
  };

  const filledVariant = ({ ownerState }) => {
    if (ownerState.severity === 'primary' || ownerState.severity === 'secondary') {
      const paletteColor = vars.palette[ownerState.severity];

      return {
        color: vars.palette.common.white,
        backgroundColor: paletteColor.main,
        '& .MuiAlert-icon': {
          color: vars.palette.common.white
        }
      };
    }
  };

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          primary: <TaskAltOutlinedIcon />,
          secondary: <TaskAltOutlinedIcon />
        }
      },
      styleOverrides: {
        icon: {
          fontSize: 20
        },
        root: {
          variants: [
            { props: { variant: 'standard' }, style: standardVariant },
            { props: { variant: 'outlined' }, style: outlinedVariant },
            { props: { variant: 'filled' }, style: filledVariant }
          ]
        }
      }
    }
  };
}

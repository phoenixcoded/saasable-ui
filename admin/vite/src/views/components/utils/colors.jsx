import PropTypes from 'prop-types';

// @mui
import { useColorScheme, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { Themes } from '@/config';
import ComponentsWrapper from '@/components/ComponentsWrapper';
import useConfig from '@/hooks/useConfig';
import { ColorBox } from '@/sections/components/color';

// get theme wise color string
function getColorString(themes) {
  switch (themes) {
    case Themes.THEME_HOSTING:
    default:
      return 'HOSTING';
  }
}

// get theme wise primary/secondary color offset
function getColorCode(themes, index) {
  const lightModeCodes = [90, 80, 40, 30, 10];

  const code1 = lightModeCodes;

  switch (themes) {
    case Themes.THEME_HOSTING:
    default:
      return code1[index];
  }
}

// get theme wise grey color offset
function getGreyCode(themes, index) {
  const lightModeCodes = [98, 96, 94, 92, 90, 87, 80, 50, 30, 10];

  const code1 = lightModeCodes;

  switch (themes) {
    case Themes.THEME_HOSTING:
    default:
      return code1[index];
  }
}

/***************************  COLOR - PALETTE  ***************************/

function ColorPalette({ title, palette }) {
  return (
    <Stack sx={{ gap: { xs: 2, sm: 3 } }}>
      <Typography variant="subtitle1">{title}</Typography>
      <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ alignItems: 'center' }}>
        {palette.map((item, index) => (
          <ColorBox key={index} {...item} />
        ))}
      </Grid>
    </Stack>
  );
}

/***************************  UTILS - COLOR  ***************************/

export default function UtilsColor() {
  const theme = useTheme();
  const { colorScheme } = useColorScheme();

  const {
    state: { currentTheme }
  } = useConfig();
  const colorString = getColorString(currentTheme);

  const scheme = colorScheme ?? 'light';
  const schemeTheme = theme.colorSchemes?.[scheme];

  const currentPalette = schemeTheme ? schemeTheme.palette : theme.palette;

  const primaryPalette = [
    {
      value: currentPalette.primary.lighter,
      color: 'primary.darker',
      muiLabel: 'primary.lighter',
      figmaLabel: 'Primary Container / Primary Fixed',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 0, colorScheme)}` // setup swr and use function for dynamic value
    },
    {
      value: currentPalette.primary.light,
      color: 'primary.dark',
      muiLabel: 'primary.light',
      figmaLabel: 'Primary Fixed Dim',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 1, colorScheme)}`
    },
    {
      value: currentPalette.primary.main,
      color: 'background.default',
      muiLabel: 'primary.main',
      figmaLabel: 'Primary',
      main: true,
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 2, colorScheme)}`
    },
    {
      value: currentPalette.primary.dark,
      color: 'primary.light',
      muiLabel: 'primary.dark',
      figmaLabel: colorScheme === 'dark' ? 'On Primary Container / Primary Fixed' : 'On Primary Fixed Variant',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 3, colorScheme)}`
    },
    {
      value: currentPalette.primary.darker,
      color: 'primary.lighter',
      muiLabel: 'primary.darker',
      figmaLabel: 'On Primary Container / On Primary Fixed',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 4, colorScheme)}`
    }
  ];

  const secondaryPalette = [
    {
      value: currentPalette.secondary.lighter,
      color: 'secondary.darker',
      muiLabel: 'secondary.lighter',
      figmaLabel: colorScheme === 'dark' ? 'Secondary Container / On Secondary Fixed Variant' : 'Secondary Container / Secondary Fixed',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 0, colorScheme)}`
    },
    {
      value: currentPalette.secondary.light,
      color: 'secondary.dark',
      muiLabel: 'secondary.light',
      figmaLabel: 'Secondary Fixed Dim',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 1, colorScheme)}`
    },
    {
      value: currentPalette.secondary.main,
      color: 'background.default',
      muiLabel: 'secondary.main',
      figmaLabel: 'Secondary',
      main: true,
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 2, colorScheme)}`
    },
    {
      value: currentPalette.secondary.dark,
      color: 'secondary.light',
      muiLabel: 'secondary.dark',
      figmaLabel: colorScheme === 'dark' ? 'On Secondary Container / Secondary Fixed' : 'On Secondary Fixed Variant',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 3, colorScheme)}`
    },
    {
      value: currentPalette.secondary.darker,
      color: 'secondary.lighter',
      muiLabel: 'secondary.darker',
      figmaLabel: 'On Secondary Container / On Secondary Fixed',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 4, colorScheme)}`
    }
  ];

  const greyPalette = [
    {
      value: currentPalette.grey[50],
      color: 'grey.900',
      muiLabel: 'grey.50',
      figmaLabel: colorScheme === 'dark' ? 'Surface / Surface Dim' : 'Surface / Surface Bright',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 0, colorScheme)}`
    },
    {
      value: currentPalette.grey[100],
      color: 'grey.900',
      muiLabel: 'grey.100',
      figmaLabel: 'Surface Container Low',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 1, colorScheme)}`
    },
    {
      value: currentPalette.grey[200],
      color: 'grey.900',
      muiLabel: 'grey.200',
      figmaLabel: 'Surface Container',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 2, colorScheme)}`
    },
    {
      value: currentPalette.grey[300],
      color: 'grey.900',
      muiLabel: 'grey.300',
      figmaLabel: 'Surface Container High',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 3, colorScheme)}`
    },
    {
      value: currentPalette.grey[400],
      color: 'grey.900',
      muiLabel: 'grey.400',
      figmaLabel: 'Surface Container Highest',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 4, colorScheme)}`
    },
    {
      value: currentPalette.grey[500],
      color: 'grey.900',
      muiLabel: 'grey.500',
      figmaLabel: 'Surface Container Highest',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 5, colorScheme)}`
    },
    {
      value: currentPalette.grey[600],
      color: 'grey.800',
      muiLabel: 'divider/grey.600',
      figmaLabel: 'Outline Variant',
      figmaValue: `${colorString}/neutral variant/${getGreyCode(currentTheme, 6, colorScheme)}`
    },
    {
      value: currentPalette.grey[700],
      color: 'grey.600',
      muiLabel: 'grey.700',
      figmaLabel: 'Outline',
      figmaValue: `${colorString}/neutral variant/${getGreyCode(currentTheme, 7, colorScheme)}`
    },
    {
      value: currentPalette.grey[800],
      color: 'grey.600',
      muiLabel: 'text.secondary/grey.800',
      figmaLabel: 'On Surface Variant',
      figmaValue: `${colorString}/neutral variant/${getGreyCode(currentTheme, 8, colorScheme)}`
    },
    {
      value: currentPalette.grey[900],
      color: 'grey.50',
      muiLabel: 'text.primary/grey.900',
      figmaLabel: 'On Surface',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 9, colorScheme)}`
    },
    {
      value: currentPalette.background.default,
      color: 'text.priamry',
      muiLabel: 'background.default',
      figmaLabel: 'On Priamry/Secondary',
      figmaValue: 'Common'
    }
  ];

  const errorPalette = [
    {
      value: currentPalette.error.lighter,
      color: 'error.darker',
      muiLabel: 'error.lighter',
      figmaLabel: colorScheme === 'dark' ? 'On Error / Error Container' : 'On Error / Error Container Low',
      figmaValue: `error/${getColorCode(currentTheme, 0, colorScheme)}`
    },
    {
      value: currentPalette.error.light,
      color: 'error.dark',
      muiLabel: 'error.light',
      figmaLabel: colorScheme === 'dark' ? 'Error Container High' : 'Error Container High / Outline',
      figmaValue: `error/${getColorCode(currentTheme, 1, colorScheme)}`
    },
    {
      value: currentPalette.error.main,
      color: 'background.default',
      muiLabel: 'error.main',
      figmaLabel: colorScheme === 'dark' ? 'Error' : 'Error',
      figmaValue: `error/${getColorCode(currentTheme, 2, colorScheme)}`
    },
    {
      value: currentPalette.error.dark,
      color: 'error.light',
      muiLabel: 'error.dark',
      figmaLabel: colorScheme === 'dark' ? 'Error Container High' : 'On Container/ Error Container',
      figmaValue: `error/${getColorCode(currentTheme, 3, colorScheme)}`
    },
    {
      value: currentPalette.error.darker,
      color: 'error.lighter',
      muiLabel: 'error.darker',
      figmaLabel: colorScheme === 'dark' ? 'On Error/ Error Container' : 'On Container Low / Container High',
      figmaValue: `error/${getColorCode(currentTheme, 4, colorScheme)}`
    }
  ];

  const warningPalette = [
    {
      value: currentPalette.warning.lighter,
      color: 'warning.darker',
      muiLabel: 'warning.lighter',
      figmaLabel: colorScheme === 'dark' ? 'On Warning / Warning Container' : 'On Warning / Warning Container Low',
      figmaValue: `warning/${getColorCode(currentTheme, 0, colorScheme)}`
    },
    {
      value: currentPalette.warning.light,
      color: 'warning.dark',
      muiLabel: 'warning.light',
      figmaLabel: colorScheme === 'dark' ? 'Warning Container High' : 'Warning Container High / Outline',
      figmaValue: `warning/${getColorCode(currentTheme, 1, colorScheme)}`
    },
    {
      value: currentPalette.warning.main,
      color: 'background.default',
      muiLabel: 'warning.main',
      figmaLabel: colorScheme === 'dark' ? 'Warning' : 'Warning',
      figmaValue: `warning/${getColorCode(currentTheme, 2, colorScheme)}`
    },
    {
      value: currentPalette.warning.dark,
      color: 'warning.light',
      muiLabel: 'warning.dark',
      figmaLabel: colorScheme === 'dark' ? 'Warning Container High' : 'On Container/ Warning Container',
      figmaValue: `warning/${getColorCode(currentTheme, 3, colorScheme)}`
    },
    {
      value: currentPalette.warning.darker,
      color: 'warning.lighter',
      muiLabel: 'warning.darker',
      figmaLabel: colorScheme === 'dark' ? 'On Warning/ Warning Container' : 'On Container Low / Container High',
      figmaValue: `warning/${getColorCode(currentTheme, 4, colorScheme)}`
    }
  ];

  const infoPalette = [
    {
      value: currentPalette.info.lighter,
      color: 'info.darker',
      muiLabel: 'info.lighter',
      figmaLabel: colorScheme === 'dark' ? 'On Info / Info Container' : 'On Info / Info Container Low',
      figmaValue: `info/${getColorCode(currentTheme, 0, colorScheme)}`
    },
    {
      value: currentPalette.info.light,
      color: 'info.dark',
      muiLabel: 'info.light',
      figmaLabel: colorScheme === 'dark' ? 'Info Container High' : 'Info Container High / Outline',
      figmaValue: `info/${getColorCode(currentTheme, 1, colorScheme)}`
    },
    {
      value: currentPalette.info.main,
      color: 'background.default',
      muiLabel: 'info.main',
      figmaLabel: colorScheme === 'dark' ? 'Info' : 'Info',
      figmaValue: `info/${getColorCode(currentTheme, 2, colorScheme)}`
    },
    {
      value: currentPalette.info.dark,
      color: 'info.light',
      muiLabel: 'info.dark',
      figmaLabel: colorScheme === 'dark' ? 'Info Container High' : 'On Container/ Info Container',
      figmaValue: `info/${getColorCode(currentTheme, 3, colorScheme)}`
    },
    {
      value: currentPalette.info.darker,
      color: 'info.lighter',
      muiLabel: 'info.darker',
      figmaLabel: colorScheme === 'dark' ? 'On Info/ Info Container' : 'On Container Low / Container High',
      figmaValue: `info/${getColorCode(currentTheme, 4, colorScheme)}`
    }
  ];

  const successPalette = [
    {
      value: currentPalette.success.lighter,
      color: 'success.darker',
      muiLabel: 'success.lighter',
      figmaLabel: colorScheme === 'dark' ? 'On Success / Success Container' : 'On Success / Success Container Low',
      figmaValue: `success/${getColorCode(currentTheme, 0, colorScheme)}`
    },
    {
      value: currentPalette.success.light,
      color: 'success.dark',
      muiLabel: 'success.light',
      figmaLabel: colorScheme === 'dark' ? 'Success Container High' : 'Success Container High / Outline',
      figmaValue: `success/${getColorCode(currentTheme, 1, colorScheme)}`
    },
    {
      value: currentPalette.success.main,
      color: 'background.default',
      muiLabel: 'success.main',
      figmaLabel: colorScheme === 'dark' ? 'Success' : 'Success',
      figmaValue: `success/${getColorCode(currentTheme, 2, colorScheme)}`
    },
    {
      value: currentPalette.success.dark,
      color: 'success.light',
      muiLabel: 'success.dark',
      figmaLabel: colorScheme === 'dark' ? 'Success Container High' : 'On Container/ Success Container',
      figmaValue: `success/${getColorCode(currentTheme, 3, colorScheme)}`
    },
    {
      value: currentPalette.success.darker,
      color: 'success.lighter',
      muiLabel: 'success.darker',
      figmaLabel: colorScheme === 'dark' ? 'On Success/ Success Container' : 'On Container Low / Container High',
      figmaValue: `success/${getColorCode(currentTheme, 4, colorScheme)}`
    }
  ];

  const palettes = [
    { title: 'Primary', palette: primaryPalette },
    { title: 'Secondary', palette: secondaryPalette },
    { title: 'Neutral', palette: greyPalette },
    { title: 'Error', palette: errorPalette },
    { title: 'Warning', palette: warningPalette },
    { title: 'Info', palette: infoPalette },
    { title: 'Success', palette: successPalette }
  ];

  return (
    <ComponentsWrapper title="Color">
      <Stack sx={{ gap: { xs: 2, sm: 3 } }}>
        {palettes.map((palette, index) => (
          <ColorPalette key={index} {...palette} />
        ))}
      </Stack>
    </ComponentsWrapper>
  );
}

ColorPalette.propTypes = { title: PropTypes.string, palette: PropTypes.array };

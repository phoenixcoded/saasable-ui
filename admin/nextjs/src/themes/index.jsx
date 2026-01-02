'use client';
import PropTypes from 'prop-types';

import { useMemo } from 'react';

// @mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// @project
import { CSS_VAR_PREFIX } from '@/config';
import CustomShadows from './custom-shadows';
import { buildPalette } from './palette';
import componentsOverride from './overrides';
import typography from './typography';

import useConfig from '@/hooks/useConfig';

/*************************** DEFAULT THEME - MAIN ***************************/

export default function ThemeCustomization({ children }) {
  const {
    state: { themeDirection }
  } = useConfig();

  const palette = useMemo(() => buildPalette(), []);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1266,
        xl: 1440
      }
    },
    direction: themeDirection,
    colorSchemes: {
      light: {
        palette: palette.light,
        customShadows: CustomShadows(palette.light)
      }
    },
    cssVariables: {
      cssVarPrefix: CSS_VAR_PREFIX,
      colorSchemeSelector: 'data-color-scheme'
    },
    typography: typography()
  });

  theme.components = componentsOverride(theme);

  return (
    <ThemeProvider disableTransitionOnChange theme={theme} defaultMode="light">
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}

ThemeCustomization.propTypes = { children: PropTypes.any };

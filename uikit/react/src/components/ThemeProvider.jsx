'use client';
import PropTypes from 'prop-types';

import { Suspense, useEffect, useState } from 'react';

// @mui
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// @project
import Loader from './Loader';
import { Themes } from '@/config';
import useConfig from '@/hooks/useConfig';

import aiTheme from '@/views/landings/ai/theme';

const modeStorageKey = 'theme-mode';

// Theme Map
const themeMap = {
  [Themes.THEME_AI]: aiTheme
};

/***************************  COMMON - THEME PROVIDER  ***************************/

export default function ThemeProvider({ children }) {
  const { state } = useConfig();

  const [loader, setLoader] = useState(true);

  const selectedTheme = themeMap[state.currentTheme]?.('data-color-scheme') || aiTheme('data-color-scheme');

  useEffect(() => {
    setLoader(false);
  }, []);

  /**
   * A loader is needed here to initialize the configuration from localStorage and set the default theme.
   * Without a loader,
   * the theme palette and fontFamily don't match, resulting in an error like:
   * "Warning: Prop className did not match".
   */

  return (
    <>
      <InitColorSchemeScript modeStorageKey={modeStorageKey} attribute="data-color-scheme" defaultMode="light" />
      <Suspense fallback={<Loader />}>
        {loader ? (
          <Loader />
        ) : (
          <MuiThemeProvider disableTransitionOnChange theme={selectedTheme} modeStorageKey={modeStorageKey} defaultMode="light">
            <CssBaseline enableColorScheme />
            {children}
          </MuiThemeProvider>
        )}
      </Suspense>
    </>
  );
}

ThemeProvider.propTypes = { children: PropTypes.any };

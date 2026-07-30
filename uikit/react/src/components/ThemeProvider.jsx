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
import cryptoTheme from '@/views/landings/crypto/theme';

// Theme Map
const themeMap = {
  [Themes.THEME_AI]: aiTheme,
  [Themes.THEME_CRYPTO]: cryptoTheme
};

/***************************  COMMON - THEME PROVIDER  ***************************/

export default function ThemeProviders({ children, overrideTheme, defaultMode = 'light', modeStorageKey = 'theme-mode' }) {
  const { state } = useConfig();

  const [loader, setLoader] = useState(true);

  const activeTheme = overrideTheme || state.currentTheme;
  const selectedTheme = themeMap[activeTheme]?.('data-color-scheme') || aiTheme('data-color-scheme');

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
      <InitColorSchemeScript modeStorageKey={modeStorageKey} attribute="data-color-scheme" defaultMode={defaultMode} />
      <Suspense fallback={<Loader />}>
        {loader ? (
          <Loader />
        ) : (
          <MuiThemeProvider disableTransitionOnChange theme={selectedTheme} modeStorageKey={modeStorageKey} defaultMode={defaultMode}>
            <CssBaseline enableColorScheme />
            {children}
          </MuiThemeProvider>
        )}
      </Suspense>
    </>
  );
}

ThemeProviders.propTypes = {
  children: PropTypes.any,
  overrideTheme: PropTypes.any,
  defaultMode: PropTypes.any,
  modeStorageKey: PropTypes.string
};

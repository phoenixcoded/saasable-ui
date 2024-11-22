'use client';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

// @project
import Loader from '@/components/Loader';
import ThemeProvider from '@/components/ThemeProvider';
import { ConfigProvider } from '@/contexts/ConfigContext';

// @types

/***************************  COMMON - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }) {
  const [loader, setLoader] = useState(true);

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
    <ConfigProvider>
      <ThemeProvider>
        <main>{loader ? <Loader /> : children}</main>
      </ThemeProvider>
    </ConfigProvider>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.any };

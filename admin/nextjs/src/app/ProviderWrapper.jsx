'use client';

// @mui
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import PropTypes from 'prop-types';

// @project
import Notistack from '@/components/third-party/Notistack';
import { ConfigProvider } from '@/contexts/ConfigContext';
import ThemeCustomization from '@/themes';

/***************************  LAYOUT - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }) {
  return (
    <>
      <InitColorSchemeScript attribute="data-color-scheme" defaultMode="light" />
      <ConfigProvider>
        <ThemeCustomization>
          <Notistack>{children}</Notistack>
        </ThemeCustomization>
      </ConfigProvider>
    </>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.any };

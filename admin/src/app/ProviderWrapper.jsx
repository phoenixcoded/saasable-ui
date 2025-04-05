'use client';
import PropTypes from 'prop-types';

// @project

import { ConfigProvider } from '@/contexts/ConfigContext';
import ThemeCustomization from '@/themes';

// @types

/***************************  LAYOUT - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }) {
  return (
    <ConfigProvider>
      <ThemeCustomization>{children}</ThemeCustomization>
    </ConfigProvider>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.any };

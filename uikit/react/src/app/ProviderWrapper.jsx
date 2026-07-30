'use client';
import PropTypes from 'prop-types';

// @project
import { ConfigProvider } from '@/contexts/ConfigContext';

/***************************  COMMON - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }) {
  return <ConfigProvider>{children}</ConfigProvider>;
}

ProviderWrapper.propTypes = { children: PropTypes.any };

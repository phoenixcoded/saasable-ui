'use client';
import PropTypes from 'prop-types';

// @project
import ThemeProviders from '@/components/ThemeProvider';
import { ThemeMode } from '@/config';

/***************************  LAYOUT - COMMON  ***************************/

export default function CommonLayout({ children }) {
  return (
    <ThemeProviders defaultMode={ThemeMode.LIGHT} modeStorageKey="theme-mode-common">
      {children}
    </ThemeProviders>
  );
}

CommonLayout.propTypes = { children: PropTypes.any };

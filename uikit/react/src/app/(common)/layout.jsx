'use client';
import PropTypes from 'prop-types';

// @project
import ThemeProviders from '@/components/ThemeProvider';

/***************************  LAYOUT - COMMON  ***************************/

export default function CommonLayout({ children }) {
  return (
    <ThemeProviders defaultMode="light" modeStorageKey="theme-mode-common">
      {children}
    </ThemeProviders>
  );
}

CommonLayout.propTypes = { children: PropTypes.any };

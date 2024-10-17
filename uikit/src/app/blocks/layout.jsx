'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';

// @project
import useScrollPosition from '@/hooks/useScrollPosition';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @types

/***************************  LAYOUT - BLOCKS  ***************************/

export default function Blocks({ children }) {
  useDataThemeMode();
  useScrollPosition();

  return <Box sx={{ '& :focus-visible': { outline: 'none' } }}>{children}</Box>;
}

Blocks.propTypes = { children: PropTypes.any };

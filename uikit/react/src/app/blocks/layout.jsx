'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';

// @project
import useDataThemeMode from '@/hooks/useDataThemeMode';

/***************************  LAYOUT - BLOCKS  ***************************/

export default function Blocks({ children }) {
  useDataThemeMode();

  return <Box sx={{ '& :focus-visible': { outline: 'none' } }}>{children}</Box>;
}

Blocks.propTypes = { children: PropTypes.any };

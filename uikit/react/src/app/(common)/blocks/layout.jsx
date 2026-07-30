'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';

/***************************  LAYOUT - BLOCKS  ***************************/

export default function Blocks({ children }) {
  return (
    <main>
      <Box sx={{ '& :focus-visible': { outline: 'none' } }}>{children}</Box>
    </main>
  );
}

Blocks.propTypes = { children: PropTypes.any };

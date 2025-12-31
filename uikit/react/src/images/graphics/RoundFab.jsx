'use client';
import PropTypes from 'prop-types';

import { useId } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

/***************************  IMAGE - ROUND FAB  ***************************/

export default function RoundFab({ size }) {
  const theme = useTheme();
  const uniqueId1 = useId();
  const uniqueId2 = useId();

  return (
    <Box className="gradient-fab" sx={{ '& svg': { width: size || { xs: 48, sm: 60 }, height: size || { xs: 48, sm: 60 } } }}>
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="58" height="58" rx="29" fill={`url(#${uniqueId1})`} />
        <rect x="1" y="1" width="58" height="58" rx="29" stroke={`url(#${uniqueId2})`} strokeWidth="2" />
        <defs>
          <linearGradient id={uniqueId1} x1="58" y1="30" x2="2" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.vars.palette.secondary.lighter} />
            <stop offset="1" stopColor={theme.vars.palette.grey[100]} />
          </linearGradient>
          <linearGradient id={uniqueId2} x1="60" y1="30.5" x2="-1.5" y2="30.5" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.vars.palette.grey[50]} />
            <stop offset="1" stopColor={theme.vars.palette.secondary.lighter} />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
}

RoundFab.propTypes = { size: PropTypes.number };

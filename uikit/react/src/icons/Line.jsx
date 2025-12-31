'use client';
import PropTypes from 'prop-types';

import { useId } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  ICON - LINE  ***************************/

export default function Line({ size = 24, color }) {
  const theme = useTheme();
  const uniqueId = useId(); // Generate a unique ID

  return (
    <svg width={size} height="2" viewBox="0 0 497 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1.19458H496" stroke={`url(#${uniqueId})`} strokeLinecap="round" strokeDasharray="5 5" />
      <defs>
        <linearGradient id={uniqueId} x1="-366.492" y1="1" x2="-365.628" y2="-26.9618" gradientUnits="userSpaceOnUse">
          <stop stopColor={color || theme.vars.palette.primary.main} stopOpacity="0" />
          <stop offset="1" stopColor={color || theme.vars.palette.primary.main} />
        </linearGradient>
      </defs>
    </svg>
  );
}

Line.propTypes = { size: PropTypes.number, color: PropTypes.any };

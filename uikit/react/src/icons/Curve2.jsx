'use client';
import PropTypes from 'prop-types';

import { useId } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  ICON - CURVE2  ***************************/

export default function Curve2({ size = 24, color }) {
  const theme = useTheme();
  const uniqueId = useId(); // Generate a unique ID

  return (
    <svg width={size} height={size} viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.88126 0.629836L6.62745 0.629836C17.9309 0.629835 27.1876 9.61374 27.5256 20.9121V20.9121C27.8636 32.2104 37.12 41.1942 48.4234 41.1944L59.1301 41.1946"
        stroke={`url(#${uniqueId})`}
        strokeLinecap="round"
        strokeDasharray="5 5"
      />
      <defs>
        <linearGradient id={uniqueId} x1="20.6899" y1="-23.4912" x2="76.2662" y2="33.7388" gradientUnits="userSpaceOnUse">
          <stop stopColor={color || theme.vars.palette.primary.main} stopOpacity="0" />
          <stop offset="1" stopColor={color || theme.vars.palette.primary.main} />
        </linearGradient>
      </defs>
    </svg>
  );
}

Curve2.propTypes = { size: PropTypes.number, color: PropTypes.any };

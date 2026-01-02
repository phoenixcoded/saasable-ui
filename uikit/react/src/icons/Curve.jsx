'use client';
import PropTypes from 'prop-types';

import { useId } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  ICON - CURVE  ***************************/

export default function Curve({ size = 24, color }) {
  const theme = useTheme();
  const uniqueId = useId(); // Generate a unique ID

  return (
    <svg width={size} height={size} viewBox="0 0 52 98" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.499991 1.18871V1.18871C14.03 1.19143 24.9967 12.1604 24.9967 25.6904L24.9967 52.8657C24.9967 69.8957 33.6648 85.7547 47.9988 94.9502L51.4973 97.1946"
        stroke={`url(#${uniqueId})`}
        strokeLinecap="round"
        strokeDasharray="5 5"
      />
      <defs>
        <linearGradient id={uniqueId} x1="16.3364" y1="-26.7751" x2="105.757" y2="67.5319" gradientUnits="userSpaceOnUse">
          <stop stopColor={color || theme.vars.palette.primary.main} stopOpacity="0" />
          <stop offset="1" stopColor={color || theme.vars.palette.primary.main} />
        </linearGradient>
      </defs>
    </svg>
  );
}

Curve.propTypes = { size: PropTypes.number, color: PropTypes.any };

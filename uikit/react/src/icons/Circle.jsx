'use client';
import PropTypes from 'prop-types';

import { useId } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  ICON - CIRCLE  ***************************/

export default function Circle({ size = 24, color }) {
  const theme = useTheme();
  const uniqueId = useId(); // Generate a unique ID

  return (
    <svg width={size} height={size} viewBox="0 0 792 566" opacity="0.25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.3" cx="396" cy="236.626" r="395" stroke={`url(#${uniqueId})`} />
      <defs>
        <linearGradient id={uniqueId} x1="396" y1="-211.607" x2="396" y2="662.785" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="0.45" stopColor={color || theme.vars.palette.primary.main} />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}

Circle.propTypes = { size: PropTypes.number, color: PropTypes.any };

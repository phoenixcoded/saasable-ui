'use client';
import PropTypes from 'prop-types';

import { useId } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  ICON - OPEN EYE  ***************************/

export default function OpenEye({ size = 24, color, stroke = 1.5 }) {
  const theme = useTheme();
  const uniqueId = useId(); // Generate a unique ID

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath={`url(#${uniqueId})`}>
        <path
          d="M3 6.00078L5.5 9.80078"
          stroke={color || theme.vars.palette.primary.main}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.9998 6.02478L18.5078 9.80078"
          stroke={color || theme.vars.palette.primary.main}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 4L9.5 8"
          stroke={color || theme.vars.palette.primary.main}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 4L14.5 8"
          stroke={color || theme.vars.palette.primary.main}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 14C10 14.5304 10.2107 15.0391 10.5858 15.4142C10.9609 15.7893 11.4696 16 12 16C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14C14 13.4696 13.7893 12.9609 13.4142 12.5858C13.0391 12.2107 12.5304 12 12 12C11.4696 12 10.9609 12.2107 10.5858 12.5858C10.2107 12.9609 10 13.4696 10 14Z"
          stroke={color || theme.vars.palette.primary.main}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 14C18.6 18 15.6 20 12 20C8.4 20 5.4 18 3 14C5.4 10 8.4 8 12 8C15.6 8 18.6 10 21 14Z"
          stroke={color || theme.vars.palette.primary.main}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id={uniqueId}>
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

OpenEye.propTypes = { size: PropTypes.number, color: PropTypes.any, stroke: PropTypes.any };

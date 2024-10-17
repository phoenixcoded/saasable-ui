'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';

// @types

/***************************  ICON - CLOSEEYE  ***************************/

export default function CloseEye({ size = 24, color, stroke = 1.5 }) {
  const theme = useTheme();

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2893_70783)">
        <path
          d="M3 20.9992L5.5 17.1992"
          stroke={color || theme.palette.primary.main}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.9998 20.9752L18.5078 17.1992"
          stroke={color || theme.palette.primary.main}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 23L9.5 19"
          stroke={color || theme.palette.primary.main}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 23L14.5 19"
          stroke={color || theme.palette.primary.main}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 13C18.6 17 15.6 19 12 19C8.4 19 5.4 17 3 13"
          stroke={color || theme.palette.primary.main}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2893_70783">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

CloseEye.propTypes = { size: PropTypes.number, color: PropTypes.any, stroke: PropTypes.any };

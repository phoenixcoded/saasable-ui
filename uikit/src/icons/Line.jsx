'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';

// @types

/***************************  ICON - LINE  ***************************/

export default function Line({ size = 24, color }) {
  const theme = useTheme();

  return (
    <svg width={size} height="2" viewBox="0 0 497 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1.19458H496" stroke="url(#paint0_linear_4566_44873)" strokeLinecap="round" strokeDasharray="5 5" />
      <defs>
        <linearGradient id="paint0_linear_4566_44873" x1="-366.492" y1="1" x2="-365.628" y2="-26.9618" gradientUnits="userSpaceOnUse">
          <stop stopColor={color || theme.palette.primary.main} stopOpacity="0" />
          <stop offset="1" stopColor={color || theme.palette.primary.main} />
        </linearGradient>
      </defs>
    </svg>
  );
}

Line.propTypes = { size: PropTypes.number, color: PropTypes.any };

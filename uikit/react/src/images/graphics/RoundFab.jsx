'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

/***************************  IMAGE - ROUND FAB  ***************************/

export default function RoundFab({ size }) {
  const theme = useTheme();

  return (
    <Box className="gradient-fab" sx={{ '& svg': { width: size || { xs: 48, sm: 60 }, height: size || { xs: 48, sm: 60 } } }}>
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="58" height="58" rx="29" fill="url(#paint0_linear_5035_77757)" />
        <rect x="1" y="1" width="58" height="58" rx="29" stroke="url(#paint1_linear_5035_77757)" strokeWidth="2" />
        <defs>
          <linearGradient id="paint0_linear_5035_77757" x1="58" y1="30" x2="2" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.palette.secondary.lighter} />
            <stop offset="1" stopColor={theme.palette.grey[100]} />
          </linearGradient>
          <linearGradient id="paint1_linear_5035_77757" x1="60" y1="30.5" x2="-1.5" y2="30.5" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.palette.grey[50]} />
            <stop offset="1" stopColor={theme.palette.secondary.lighter} />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
}

RoundFab.propTypes = { size: PropTypes.number };

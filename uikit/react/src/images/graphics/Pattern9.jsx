'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - PATTERN 9  ***************************/

export default function Pattern9() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 300 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.5" d="M300 1L30.5001 1C13.9316 1 0.500153 14.4315 0.500153 31V53" stroke="url(#paint0_linear_1357_81739)" />
      <defs>
        <linearGradient id="paint0_linear_1357_81739" x1="106.5" y1="53" x2="336.498" y2="52.2721" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.vars.palette.primary.main} />
          <stop offset="1" stopColor={theme.vars.palette.primary.main} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

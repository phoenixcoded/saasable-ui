'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - PATTERN 8  ***************************/

export default function Pattern8() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 197 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.5"
        d="M196 100.5V11C196 5.47715 191.523 1 186 1H118.589C113.066 1 108.589 5.47715 108.589 11V43C108.589 48.5228 104.111 53 98.5885 53H0"
        stroke="url(#paint0_linear_1357_81760)"
      />
      <defs>
        <linearGradient id="paint0_linear_1357_81760" x1="320.359" y1="96.2523" x2="-28.9671" y2="79.5362" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.vars.palette.primary.main} />
          <stop offset="1" stopColor={theme.vars.palette.primary.main} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

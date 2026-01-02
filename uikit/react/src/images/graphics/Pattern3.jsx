'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - PATTERN 3  ***************************/

export default function Pattern3() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 408 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.5"
        d="M408 50H334.5H220.16C206.629 50 195.66 39.031 195.66 25.5V25.5C195.66 11.969 184.691 1 171.16 1H0"
        stroke="url(#paint0_linear_1357_81746)"
      />
      <defs>
        <linearGradient id="paint0_linear_1357_81746" x1="55.9999" y1="168.5" x2="478" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.vars.palette.primary.main} />
          <stop offset="1" stopColor={theme.vars.palette.primary.main} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

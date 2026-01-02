'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - PATTERN 5  ***************************/

export default function Pattern5() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 280 227" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.5"
        d="M1 0V64.5C1 81.0685 14.4315 94.5 31 94.5H109.84C126.408 94.5 139.84 107.931 139.84 124.5V147.5C139.84 164.069 153.271 177.5 169.84 177.5H249.5C266.069 177.5 279.5 190.931 279.5 207.5V227"
        stroke="url(#paint0_linear_1357_81744)"
      />
      <defs>
        <linearGradient id="paint0_linear_1357_81744" x1="-10.2736" y1="177.5" x2="331.5" y2="177.5" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.vars.palette.primary.main} />
          <stop offset="1" stopColor={theme.vars.palette.primary.main} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

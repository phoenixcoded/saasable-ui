'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - PATTERN 4  ***************************/

export default function Pattern4() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 156 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.5"
        d="M0 1H56.3396C72.9082 1 86.3396 14.4315 86.3396 31V54C86.3396 70.5685 99.7711 84 116.34 84H156"
        stroke="url(#paint0_linear_1357_81745)"
      />
      <defs>
        <linearGradient id="paint0_linear_1357_81745" x1="-63.7736" y1="84" x2="178.075" y2="84" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.vars.palette.primary.main} />
          <stop offset="1" stopColor={theme.vars.palette.primary.main} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

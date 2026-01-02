'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - PATTERN 6  ***************************/

export default function Pattern6() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 439 232" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.5"
        d="M439 58.4569H239.815H131.244C115.378 58.4569 102.516 45.5947 102.516 29.7284V29.7284C102.516 13.8621 89.6538 1 73.7875 1H30.5C13.9315 1 0.5 14.4315 0.5 31V232"
        stroke="url(#paint0_linear_1357_81747)"
      />
      <defs>
        <linearGradient id="paint0_linear_1357_81747" x1="-35.5951" y1="197.409" x2="382.721" y2="165.223" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.vars.palette.primary.main} />
          <stop offset="1" stopColor={theme.vars.palette.primary.main} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

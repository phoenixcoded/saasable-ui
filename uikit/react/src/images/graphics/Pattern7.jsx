'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - PATTERN 7  ***************************/

export default function Pattern7() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 470 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.5"
        d="M469.5 0.517578H390.84C377.309 0.517578 366.34 11.4866 366.34 25.0176V25.0176C366.34 38.5486 355.371 49.5176 341.84 49.5176H246.885C236.179 49.5176 227.5 40.8387 227.5 30.1328V30.1328C227.5 19.4269 218.821 10.748 208.115 10.748H0"
        stroke="url(#paint0_linear_1357_81741)"
      />
      <defs>
        <linearGradient id="paint0_linear_1357_81741" x1="506" y1="168.018" x2="84" y2="129.518" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.vars.palette.primary.main} />
          <stop offset="1" stopColor={theme.vars.palette.primary.main} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

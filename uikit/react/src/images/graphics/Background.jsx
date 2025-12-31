'use client';

import { useId } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - BACKGROUND  ***************************/

export default function Background() {
  const theme = useTheme();
  const uniqueId = useId(); // Generate a unique ID

  return (
    <svg viewBox="0 0 368 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath={`url(#${uniqueId})`}>
        <rect width="368" height="380" fill={theme.vars.palette.grey[100]} />
        <rect x="-227.643" y="-144.5" width="260.429" height="182" rx="11.5" fill={theme.vars.palette.grey[200]} />
        <rect x="-227.643" y="-144.5" width="260.429" height="182" rx="11.5" stroke={theme.vars.palette.grey[300]} />
        <rect x="53.7852" y="-144.5" width="260.429" height="182" rx="11.5" fill={theme.vars.palette.grey[200]} />
        <rect x="53.7852" y="-144.5" width="260.429" height="182" rx="11.5" stroke={theme.vars.palette.grey[300]} />
        <rect x="335.215" y="-144.5" width="260.429" height="182" rx="11.5" fill={theme.vars.palette.grey[200]} />
        <rect x="335.215" y="-144.5" width="260.429" height="182" rx="11.5" stroke={theme.vars.palette.grey[300]} />
        <rect x="-227.5" y="58.5" width="260" height="225" rx="11.5" fill={theme.vars.palette.grey[200]} />
        <rect x="-227.5" y="58.5" width="260" height="225" rx="11.5" stroke={theme.vars.palette.grey[300]} />
        <rect x="335.5" y="58.5" width="260" height="225" rx="11.5" fill={theme.vars.palette.grey[200]} />
        <rect x="335.5" y="58.5" width="260" height="225" rx="11.5" stroke={theme.vars.palette.grey[300]} />
      </g>
      <defs>
        <clipPath id={uniqueId}>
          <rect width="368" height="380" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

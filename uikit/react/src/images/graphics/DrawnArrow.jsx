'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - DRAWN ARROW  ***************************/

export default function DrawnArrow() {
  const theme = useTheme();

  return (
    <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.8936 1.85913C24.8936 4.97291 26.3909 7.91338 28 10.4879"
        stroke={theme.vars.palette.primary.main}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24.4023 14.8591C23.0717 13.8412 21.639 13.0273 20.2525 12.1793C17.563 10.5343 14.8602 8.9136 12.1233 7.42679C8.93329 5.69387 5.68273 4.21606 2.40234 2.85913"
        stroke={theme.vars.palette.primary.main}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M19.5312 17.7869C17.195 17.7869 14.8892 17.8994 12.5741 18.2406C10.8123 18.5003 9.04694 18.9714 7.28067 19.148"
        stroke={theme.vars.palette.primary.main}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

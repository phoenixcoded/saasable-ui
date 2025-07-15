'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - CIRCLES  ***************************/

export default function Circles() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 839 601" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_7116_27007)">
        <path
          d="M419.501 719.361C650.909 719.361 838.502 531.768 838.502 300.36C838.502 68.952 650.909 -118.641 419.501 -118.641C188.093 -118.641 0.5 68.952 0.5 300.36C0.5 531.768 188.093 719.361 419.501 719.361Z"
          stroke="url(#paint0_linear_7116_27007)"
        />
        <path
          d="M419.503 635.461C604.574 635.461 754.604 485.431 754.604 300.36C754.604 115.289 604.574 -34.7412 419.503 -34.7412C234.432 -34.7412 84.4023 115.289 84.4023 300.36C84.4023 485.431 234.432 635.461 419.503 635.461Z"
          stroke="url(#paint1_linear_7116_27007)"
        />
        <path
          d="M419.501 551.563C558.235 551.563 670.702 439.097 670.702 300.362C670.702 161.628 558.235 49.1611 419.501 49.1611C280.766 49.1611 168.3 161.628 168.3 300.362C168.3 439.097 280.766 551.563 419.501 551.563Z"
          stroke="url(#paint2_linear_7116_27007)"
        />
        <path
          d="M419.499 467.66C511.896 467.66 586.799 392.757 586.799 300.36C586.799 207.963 511.896 133.06 419.499 133.06C327.102 133.06 252.199 207.963 252.199 300.36C252.199 392.757 327.102 467.66 419.499 467.66Z"
          stroke="url(#paint3_linear_7116_27007)"
        />
        <path
          d="M419.502 383.761C465.562 383.761 502.902 346.421 502.902 300.361C502.902 254.3 465.562 216.961 419.502 216.961C373.441 216.961 336.102 254.3 336.102 300.361C336.102 346.421 373.441 383.761 419.502 383.761Z"
          stroke="url(#paint4_linear_7116_27007)"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_7116_27007" x1="419.501" y1="-119.141" x2="419.501" y2="719.861" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.palette.grey[400]} stopOpacity="0" />
          <stop offset="0.495" stopColor={theme.palette.grey[400]} />
          <stop offset="1" stopColor={theme.palette.grey[400]} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_7116_27007" x1="419.503" y1="-35.2407" x2="419.503" y2="635.961" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.palette.grey[400]} stopOpacity="0" />
          <stop offset="0.495" stopColor={theme.palette.grey[400]} />
          <stop offset="1" stopColor={theme.palette.grey[400]} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_7116_27007" x1="419.501" y1="33.1822" x2="419.501" y2="543.664" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.palette.grey[400]} stopOpacity="0" />
          <stop offset="0.495" stopColor={theme.palette.grey[400]} />
          <stop offset="1" stopColor={theme.palette.grey[400]} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear_7116_27007" x1="419.499" y1="115.517" x2="419.499" y2="497.555" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.palette.grey[400]} stopOpacity="0" />
          <stop offset="0.495" stopColor={theme.palette.grey[400]} />
          <stop offset="1" stopColor={theme.palette.grey[400]} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint4_linear_7116_27007" x1="419.502" y1="182.209" x2="419.502" y2="419.748" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.palette.grey[400]} stopOpacity="0" />
          <stop offset="0.495" stopColor={theme.palette.grey[400]} />
          <stop offset="1" stopColor={theme.palette.grey[400]} stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_7116_27007">
          <rect width="839" height="601" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

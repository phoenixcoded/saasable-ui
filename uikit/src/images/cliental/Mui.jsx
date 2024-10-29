'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

/***************************  IMAGE - MUI  ***************************/

export default function Mui({ imageSize }) {
  const theme = useTheme();

  return (
    <Box
      sx={{ '& svg': { width: imageSize?.width || { xs: 89, sm: 105, md: 80 }, height: imageSize?.height || { xs: 16, sm: 18, md: 26 } } }}
    >
      <svg viewBox="0 0 80 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M37.9217 20.2939V4.01182H41.6666L46.7373 14.1533L51.7383 4.01182H55.4831V20.2939H52.343V9.3384L47.9468 17.9679H45.458L41.0618 9.31514V20.2939H37.9217ZM64.9424 20.5731C63.7484 20.5731 62.6629 20.3327 61.686 19.852C60.7091 19.3713 59.9337 18.6502 59.36 17.6888C58.7862 16.7274 58.4993 15.5023 58.4993 14.0137V4.01182H61.6395V14.037C61.6395 14.8433 61.7713 15.5256 62.0349 16.0839C62.2985 16.6266 62.6862 17.0298 63.1979 17.2934C63.7096 17.557 64.3066 17.6888 64.9889 17.6888C65.7022 17.6888 66.307 17.557 66.8032 17.2934C67.3149 17.0298 67.7026 16.6266 67.9662 16.0839C68.2453 15.5256 68.3849 14.8433 68.3849 14.037V4.01182H71.525V14.0137C71.525 15.5023 71.2226 16.7274 70.6179 17.6888C70.0286 18.6502 69.2378 19.3713 68.2453 19.852C67.2529 20.3327 66.1519 20.5731 64.9424 20.5731ZM74.5156 20.2939V4.01182H77.6557V20.2939H74.5156Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M9.15706 7.14137L1.18999 2.51105C1.01476 2.41004 0.789629 2.46967 0.687409 2.64491C0.654553 2.7021 0.637516 2.76781 0.638733 2.83353V15.7181C0.638733 15.8507 0.711747 15.9676 0.822486 16.0345L3.79903 17.7844C3.97427 17.8854 4.19939 17.8258 4.30161 17.6493C4.33325 17.5946 4.35029 17.5313 4.35029 17.468V9.0592C4.35151 8.97767 4.41844 8.91318 4.49997 8.91439C4.52552 8.91439 4.54986 8.92169 4.57055 8.93386L9.16436 11.5648C9.6207 11.8252 10.1805 11.8228 10.6344 11.5575L15.1175 8.93386C15.188 8.89371 15.2781 8.91683 15.3182 8.98741C15.3304 9.00931 15.3377 9.03365 15.3377 9.05799V13.1736C15.3377 13.4291 15.2026 13.6652 14.9848 13.7978L10.3691 16.6344C10.2584 16.7014 10.1914 16.8218 10.1926 16.9508V21.0968C10.1926 21.2295 10.2584 21.3463 10.3618 21.4132L16.411 25.2355C16.882 25.5324 17.4782 25.5373 17.9541 25.2501L25.6425 20.6928C26.0915 20.4263 26.3653 19.9432 26.3629 19.4211V11.476C26.3629 11.2728 26.201 11.1073 25.9978 11.106C25.9296 11.106 25.8627 11.1243 25.8043 11.1596L23.3717 12.6296C22.9324 12.8937 22.6623 13.367 22.6586 13.8794V17.8708C22.6586 18.001 22.588 18.1215 22.4749 18.1872L17.9249 20.8705C17.4612 21.1418 16.8868 21.1394 16.4256 20.8632L13.9784 19.3932C13.8056 19.2873 13.7509 19.0609 13.8567 18.8881C13.8835 18.8431 13.92 18.8054 13.9638 18.7762L18.3885 15.858C18.801 15.5867 19.0505 15.1255 19.0505 14.6302V2.83353C19.0493 2.6303 18.8838 2.46724 18.6805 2.46845C18.6173 2.46845 18.554 2.48549 18.4992 2.51713L10.6344 7.14015C10.178 7.40543 9.6134 7.40543 9.15706 7.14015V7.14137Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M26.2688 3.18067V5.6948C26.2688 6.20225 26.0084 6.67562 25.5776 6.94456L23.1523 8.45108C22.9795 8.55695 22.7532 8.50219 22.6473 8.32818C22.612 8.26977 22.5938 8.20283 22.5938 8.13469V5.50374C22.5938 4.97926 22.8749 4.49493 23.3288 4.23208L25.7175 2.8655C25.8928 2.76449 26.1179 2.82412 26.2201 3.00057C26.2518 3.05533 26.2688 3.11861 26.2688 3.18189V3.18067Z"
          fill={theme.palette.primary.main}
        />
      </svg>
    </Box>
  );
}

Mui.propTypes = { imageSize: PropTypes.object };

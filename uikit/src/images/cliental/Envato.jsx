'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

/***************************  IMAGE - ENVATO  ***************************/

export default function Envato({ imageSize }) {
  const theme = useTheme();

  return (
    <Box
      sx={{ '& svg': { width: imageSize?.width || { xs: 89, sm: 105, md: 106 }, height: imageSize?.height || { xs: 16, sm: 18, md: 26 } } }}
    >
      <svg viewBox="0 0 106 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M34.2891 20.7791C33.1106 20.7791 32.0639 20.531 31.149 20.0348C30.2496 19.5386 29.5441 18.8408 29.0323 17.9414C28.5206 17.042 28.2647 16.003 28.2647 14.8245C28.2647 13.6305 28.5129 12.5683 29.0091 11.6379C29.5208 10.7075 30.2264 9.97865 31.1258 9.45142C32.0407 8.92419 33.1029 8.66057 34.3124 8.66057C35.4599 8.66057 36.4678 8.91643 37.3362 9.42816C38.2201 9.92437 38.9024 10.5989 39.3831 11.4518C39.8793 12.3047 40.1274 13.2816 40.1274 14.3826C40.1274 14.5376 40.1274 14.7082 40.1274 14.8943C40.1274 15.0804 40.1119 15.282 40.0809 15.4991H30.521V13.5685H36.9408C36.8943 12.8552 36.6229 12.2892 36.1267 11.8705C35.646 11.4363 35.0412 11.2192 34.3124 11.2192C33.7697 11.2192 33.2734 11.3432 32.8237 11.5914C32.374 11.824 32.0174 12.1806 31.7538 12.6613C31.4902 13.142 31.3584 13.7468 31.3584 14.4756V15.1502C31.3584 15.7704 31.4824 16.3132 31.7305 16.7784C31.9786 17.2281 32.3198 17.5847 32.754 17.8483C33.2037 18.0964 33.7076 18.2205 34.2659 18.2205C34.8396 18.2205 35.3203 18.0964 35.708 17.8483C36.0957 17.5847 36.3903 17.2513 36.5919 16.8482H39.8018C39.5692 17.577 39.197 18.2438 38.6853 18.8485C38.1736 19.4378 37.5456 19.9107 36.8012 20.2674C36.0569 20.6085 35.2195 20.7791 34.2891 20.7791ZM42.6294 20.5V8.93969H45.3973L45.6299 10.8703C45.9866 10.219 46.4983 9.69177 47.1651 9.2886C47.8319 8.86991 48.6305 8.66057 49.5609 8.66057C50.5223 8.66057 51.3364 8.86991 52.0032 9.2886C52.67 9.69177 53.1817 10.2888 53.5384 11.0796C53.895 11.8705 54.0734 12.8474 54.0734 14.0104V20.5H50.9332V14.2895C50.9332 13.3436 50.7394 12.6148 50.3517 12.1031C49.9641 11.5758 49.3515 11.3122 48.5142 11.3122C47.987 11.3122 47.514 11.444 47.0953 11.7077C46.6766 11.9558 46.351 12.3202 46.1184 12.8009C45.8858 13.2661 45.7695 13.8398 45.7695 14.5221V20.5H42.6294ZM59.9198 20.5L55.6865 8.93969H58.9894L61.8272 17.546L64.6882 8.93969H67.9446L63.7113 20.5H59.9198ZM73.0926 20.7791C72.1156 20.7791 71.3015 20.6241 70.6502 20.3139C70.0145 20.0038 69.5415 19.5851 69.2314 19.0579C68.9212 18.5151 68.7662 17.9259 68.7662 17.2901C68.7662 16.5923 68.9445 15.972 69.3011 15.4293C69.6733 14.8865 70.2316 14.4679 70.9759 14.1732C71.7202 13.8631 72.6584 13.708 73.7904 13.708H76.6979C76.6979 13.1498 76.6126 12.6923 76.442 12.3357C76.287 11.9635 76.0388 11.6844 75.6977 11.4983C75.3721 11.3122 74.9534 11.2192 74.4416 11.2192C73.8369 11.2192 73.3174 11.351 72.8832 11.6146C72.4645 11.8782 72.2087 12.2814 72.1156 12.8241H69.0685C69.1461 11.9713 69.4252 11.2425 69.9059 10.6377C70.3866 10.0174 71.0224 9.5367 71.8132 9.19555C72.6041 8.8389 73.4802 8.66057 74.4416 8.66057C75.5426 8.66057 76.4963 8.84665 77.3026 9.21882C78.109 9.59098 78.7293 10.126 79.1635 10.8238C79.6132 11.5216 79.838 12.3744 79.838 13.3824V20.5H77.1863L76.8374 18.709C76.6824 19.0191 76.4808 19.2982 76.2327 19.5463C76.0001 19.7944 75.7287 20.0115 75.4186 20.1976C75.1084 20.3837 74.7595 20.5233 74.3719 20.6163C73.9842 20.7248 73.5578 20.7791 73.0926 20.7791ZM73.8369 18.3601C74.2556 18.3601 74.62 18.2903 74.9301 18.1507C75.2558 17.9957 75.5271 17.7941 75.7442 17.546C75.9768 17.2978 76.1551 17.011 76.2792 16.6853C76.4188 16.3442 76.5118 15.9953 76.5583 15.6386V15.6154H74.1393C73.6586 15.6154 73.2631 15.6774 72.953 15.8014C72.6584 15.9255 72.4413 16.0961 72.3017 16.3132C72.1621 16.5148 72.0924 16.7551 72.0924 17.0342C72.0924 17.3134 72.1621 17.5537 72.3017 17.7553C72.4413 17.9569 72.6429 18.112 72.9065 18.2205C73.1701 18.3135 73.4802 18.3601 73.8369 18.3601ZM87.7732 20.5C86.9513 20.5 86.2303 20.3759 85.61 20.1278C85.0052 19.8642 84.5323 19.4378 84.1911 18.8485C83.85 18.2438 83.6794 17.4219 83.6794 16.3829V11.5681H81.7023V8.93969H83.6794L84.0283 5.79957H86.8195V8.93969H89.8899V11.5681H86.8195V16.4295C86.8195 16.9567 86.9358 17.3211 87.1684 17.5227C87.401 17.7243 87.7964 17.8251 88.3547 17.8251H89.8201V20.5H87.7732ZM97.7067 20.7791C96.6057 20.7791 95.6056 20.5233 94.7062 20.0115C93.8223 19.4998 93.1167 18.7865 92.5895 17.8716C92.0623 16.9567 91.7986 15.91 91.7986 14.7315C91.7986 13.5375 92.0623 12.483 92.5895 11.5681C93.1167 10.6532 93.83 9.93988 94.7294 9.42816C95.6288 8.91643 96.629 8.66057 97.73 8.66057C98.862 8.66057 99.8699 8.91643 100.754 9.42816C101.653 9.93988 102.359 10.6532 102.87 11.5681C103.398 12.483 103.661 13.5375 103.661 14.7315C103.661 15.91 103.398 16.9567 102.87 17.8716C102.359 18.7865 101.653 19.4998 100.754 20.0115C99.8544 20.5233 98.8387 20.7791 97.7067 20.7791ZM97.73 18.0577C98.2262 18.0577 98.6759 17.9336 99.0791 17.6855C99.4978 17.4374 99.8312 17.0652 100.079 16.569C100.343 16.0728 100.475 15.4603 100.475 14.7315C100.475 13.9872 100.351 13.3669 100.103 12.8707C99.8544 12.3744 99.521 12.0023 99.1023 11.7542C98.6992 11.5061 98.2495 11.382 97.7532 11.382C97.257 11.382 96.7996 11.5061 96.3809 11.7542C95.9622 12.0023 95.6288 12.3744 95.3807 12.8707C95.1326 13.3669 95.0085 13.9872 95.0085 14.7315C95.0085 15.4603 95.1326 16.0728 95.3807 16.569C95.6288 17.0652 95.9545 17.4374 96.3576 17.6855C96.7763 17.9336 97.2338 18.0577 97.73 18.0577Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M10.0537 24C10.623 24 11.0821 23.541 11.0821 22.9717C11.0821 22.4024 10.623 21.9434 10.0537 21.9434C9.48447 21.9434 9.02539 22.4024 9.02539 22.9717C9.02539 23.541 9.48447 24 10.0537 24Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M15.9605 15.9692L10.17 16.5874C10.0659 16.5997 10.0109 16.465 10.0965 16.3977L15.7646 11.9844C16.1319 11.6845 16.3645 11.2131 16.2666 10.7112C16.1686 9.93996 15.532 9.43804 14.7302 9.54209L8.57241 10.4419C8.46223 10.4603 8.40714 10.3195 8.49284 10.2521L14.5955 5.5879C15.8014 4.65138 15.8993 2.80894 14.7975 1.73776C13.7937 0.733909 12.1899 0.764515 11.1861 1.76837L1.33733 11.7885C0.97007 12.1925 0.804802 12.725 0.902739 13.2943C1.06801 14.2002 1.97392 14.8001 2.87984 14.6348L8.18066 13.5514C8.29696 13.5269 8.35817 13.6799 8.26024 13.7473L2.37791 17.5117C1.64339 17.983 1.30673 18.8155 1.53933 19.6541C1.77193 20.7558 2.87984 21.3924 3.95102 21.1292L12.747 18.9624C12.8449 18.9379 12.9184 19.0542 12.8571 19.1338L11.486 20.8293C11.1188 21.3006 11.7186 21.9311 12.2206 21.5638L16.7379 17.8484C17.5397 17.1812 17.0072 15.8713 15.9666 15.9753L15.9605 15.9692Z"
          fill={theme.palette.primary.main}
        />
      </svg>
    </Box>
  );
}

Envato.propTypes = { imageSize: PropTypes.object };

'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - TYPE IDENTIFY ***************************/

function isImageComponentProps(value) {
  return value.light !== undefined && value.dark !== undefined;
}

/***************************  COMMON - IMAGE PATH  ***************************/

export default function GetImagePath(image) {
  const theme = useTheme();

  return isImageComponentProps(image) ? image[theme.palette.mode] : image;
}

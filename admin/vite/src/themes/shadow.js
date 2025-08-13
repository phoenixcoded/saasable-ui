// @mui
import { alpha } from '@mui/material/styles';

/***************************  DEFAULT THEME - SHADOWS  ***************************/

export default function Shadows(theme) {
  const shadowColor = theme.palette.text.primary;
  const primaryColor = theme.palette.primary.main;

  return {
    button: `0px 0.711px 1.422px 0px ${alpha(shadowColor, 0.05)}`,
    section: `0px 1px 2px 0px ${alpha(shadowColor, 0.07)}`,
    tooltip: `0px 12px 16px -4px ${alpha(shadowColor, 0.08)}, 0px 4px 6px -2px ${alpha(shadowColor, 0.03)}`,
    focus: `0px 0px 0px 3px ${alpha(primaryColor, 0.2)}`
  };
}

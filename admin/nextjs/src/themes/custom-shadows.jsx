// @project
import { withAlpha } from '@/utils/colorUtils';

/***************************  DEFAULT THEME - SHADOWS  ***************************/

export default function CustomShadows(palette) {
  const shadowColor = palette.text.primary;
  const primaryColor = palette.primary.main;

  return {
    button: `0px 0.711px 1.422px 0px ${withAlpha(shadowColor, 0.05)}`,
    section: `0px 1px 2px 0px ${withAlpha(shadowColor, 0.07)}`,
    tooltip: `0px 12px 16px -4px ${withAlpha(shadowColor, 0.08)}, 0px 4px 6px -2px ${withAlpha(shadowColor, 0.03)}`,
    focus: `0px 0px 0px 3px ${withAlpha(primaryColor, 0.2)}`
  };
}

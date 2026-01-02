// @project
import { withAlpha } from '@/utils/colorUtils';

/***************************  COMMON - FOCUS STYLE  ***************************/

export function generateFocusStyle(color) {
  return {
    boxShadow: `0px 0px 0px 3px ${withAlpha(color, 0.2)}`
  };
}

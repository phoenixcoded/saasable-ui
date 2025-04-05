// @assets
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

/***************************  OVERRIDES - PAGINATION ITEM  ***************************/

export default function PaginationItem(theme) {
  return {
    MuiPaginationItem: {
      defaultProps: {
        slots: { previous: IconArrowLeft, next: IconArrowRight },
        sx: { svg: { width: 16, height: 16 } }
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: 0,
          ...theme.typography.caption1
        },
        sizeSmall: { width: 32, height: 32 },
        sizeMedium: { width: 42, height: 42 },
        sizeLarge: { width: 48, height: 18 },
        ellipsis: { height: 18 },
        text: {
          color: theme.palette.text.secondary
        }
      }
    }
  };
}

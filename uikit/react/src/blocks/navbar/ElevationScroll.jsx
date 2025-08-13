import { cloneElement } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { useScrollTrigger } from '@mui/material';

/***************************  NAVBAR - ELEVATION SCROLL  ***************************/

export default function ElevationScroll({ children, window, isFixed, triggerSX }) {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  if (!isFixed) {
    return children;
  }

  const triggerStyles = {
    boxShadow: `${alpha(theme.palette.text.primary, 0.08)} 0px 12px 16px -4px, ${alpha(theme.palette.text.primary, 0.03)} 0px 4px 6px -2px;`,
    bgcolor: 'background.paper',
    ...triggerSX
  };

  return children
    ? cloneElement(children, {
        sx: { boxShadow: 'none', bgcolor: 'transparent', backgroundImage: 'none', ...(trigger && { ...triggerStyles }) }
      })
    : null;
}

import PropTypes from 'prop-types';
import { cloneElement } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import { useScrollTrigger } from '@mui/material';

// @project
import { withAlpha } from '@/utils/colorUtils';

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
    boxShadow: `${withAlpha(theme.vars.palette.text.primary, 0.08)} 0px 12px 16px -4px, ${withAlpha(theme.vars.palette.text.primary, 0.03)} 0px 4px 6px -2px;`,
    bgcolor: 'background.paper',
    ...triggerSX
  };

  return children
    ? cloneElement(children, {
        sx: { boxShadow: 'none', bgcolor: 'transparent', backgroundImage: 'none', ...(trigger && { ...triggerStyles }) }
      })
    : null;
}

ElevationScroll.propTypes = { children: PropTypes.node, window: PropTypes.func, isFixed: PropTypes.bool, triggerSX: PropTypes.any };

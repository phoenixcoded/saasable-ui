'use client';
import PropTypes from 'prop-types';

import { forwardRef } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';

function MainCard({ children, sx = {}, ...others }, ref) {
  const theme = useTheme();

  return (
    <Card
      ref={ref}
      elevation={0}
      sx={{
        p: { xs: 1.75, sm: 2.25, md: 3 },
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 4,
        boxShadow: theme.customShadows.section,
        ...sx
      }}
      {...others}
    >
      {children}
    </Card>
  );
}

export default forwardRef(MainCard);

MainCard.propTypes = { children: PropTypes.any, sx: PropTypes.object, others: PropTypes.any };

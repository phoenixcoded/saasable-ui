import PropTypes from 'prop-types';
// @mui
import Card from '@mui/material/Card';

/***************************  MAIN CARD  ***************************/

export default function MainCard({ children, sx = {}, ref, ...others }) {
  const defaultSx = (theme) => ({
    p: { xs: 1.75, sm: 2.25, md: 3 },
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 4,
    boxShadow: theme.customShadows.section
  });

  const combinedSx = (theme) => ({
    ...defaultSx(theme),
    ...(typeof sx === 'function' ? sx(theme) : sx)
  });

  return (
    <Card ref={ref} elevation={0} sx={combinedSx} {...others}>
      {children}
    </Card>
  );
}

MainCard.propTypes = { children: PropTypes.any, sx: PropTypes.object, ref: PropTypes.any, others: PropTypes.any };

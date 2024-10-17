import PropTypes from 'prop-types';
// @mui
import Button from '@mui/material/Button';

/***************************  NAVBAR - GET STARTED BUTTON  ***************************/

export default function GetStarted({ children, sx, ...rest }) {
  return (
    <Button variant="contained" size="small" sx={sx} {...rest}>
      {children || 'Get Started'}
    </Button>
  );
}

GetStarted.propTypes = { children: PropTypes.any, sx: PropTypes.any, rest: PropTypes.any };

import PropTypes from 'prop-types';
// @mui
import Button from '@mui/material/Button';

/***************************  NAVBAR - SIGN IN  ***************************/

export default function Signin({ sx, children, ...rest }) {
  return (
    <Button variant="outlined" size="small" sx={sx} {...rest} href="https://www.saasable.io/" target="_blank">
      {children}
    </Button>
  );
}

Signin.propTypes = { sx: PropTypes.any, children: PropTypes.any, rest: PropTypes.any };

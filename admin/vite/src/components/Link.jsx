import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

export const LinkComponent = ({ to, ...other }) => <RouterLink to={to} {...other} />;

const Link = ({ to, replace, ...other }) => {
  return <MuiLink component={RouterLink} to={to} replace={replace} {...other} />;
};

export default Link;

import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

const LinkComponent = forwardRef(({ to, ...other }, ref) => <RouterLink to={to} ref={ref} {...other} />);

LinkComponent.displayName = 'LinkComponent';

const Link = forwardRef(({ to, replace, ...other }, ref) => {
  return <MuiLink component={RouterLink} to={to} replace={replace} ref={ref} {...other} />;
});

Link.displayName = 'Link';

export default Link;

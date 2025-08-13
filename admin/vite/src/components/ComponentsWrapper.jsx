import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/***************************  COMPONENTS WRAPPER  ***************************/

export default function ComponentsWrapper({ children, title }) {
  return (
    <Stack sx={{ gap: { xs: 2, sm: 4 } }}>
      <Stack sx={{ py: 1.25, justifyContent: 'center' }}>
        <Typography variant="h6">{title}</Typography>
      </Stack>
      {children}
    </Stack>
  );
}

ComponentsWrapper.propTypes = { children: PropTypes.any, title: PropTypes.string };

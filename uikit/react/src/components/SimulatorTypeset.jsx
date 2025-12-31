import PropTypes from 'prop-types';
// @mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

// @project
import { NextLink } from './routes';
import SvgIcon from './SvgIcon';
import Typeset from './Typeset';

/***************************  COMMON - SIMULATOR TYPESET  ***************************/

export default function SimulatorTypeset({ heading, caption, figmaLink }) {
  return (
    <Stack direction={{ sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { xs: 'start', sm: 'center' }, gap: 1 }}>
      <Typeset
        {...{ heading, caption, headingProps: { variant: 'h4' }, captionProps: { variant: 'body1' }, stackProps: { sx: { gap: 0.5 } } }}
      />
      {figmaLink && (
        <Button
          variant="outlined"
          component={NextLink}
          href={figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ minWidth: 215 }}
          startIcon={
            <CardMedia component="img" src="/assets/images/shared/figma.svg" sx={{ width: 16, height: 16 }} alt="figma" loading="lazy" />
          }
          endIcon={<SvgIcon name="tabler-arrow-narrow-right" />}
        >
          Get Figma File
        </Button>
      )}
    </Stack>
  );
}

SimulatorTypeset.propTypes = { heading: PropTypes.string, caption: PropTypes.string, figmaLink: PropTypes.string };

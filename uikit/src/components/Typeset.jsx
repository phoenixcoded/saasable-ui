import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/***************************  COMMON - TYPESET  ***************************/

export default function Typeset({ heading, caption, stackProps, headingProps, captionProps }) {
  const { sx, ...rest } = stackProps || {};

  return (
    <Stack {...rest} sx={{ gap: { xs: 1, sm: 1.5 }, ...sx }}>
      <Typography variant="h2" {...headingProps} sx={{ ...(headingProps?.sx && { ...headingProps.sx }) }}>
        {heading}
      </Typography>
      {caption && (
        <Typography
          component="p"
          variant="h6"
          {...captionProps}
          sx={{ color: 'text.secondary', ...(captionProps?.sx && { ...captionProps.sx }) }}
        >
          {caption}
        </Typography>
      )}
    </Stack>
  );
}

Typeset.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  stackProps: PropTypes.any,
  headingProps: PropTypes.any,
  captionProps: PropTypes.any
};

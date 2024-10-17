'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';

// @project
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

/***************************  FOOTER - JOIN US  ***************************/

export default function JoinUS({ stackProps, headingProps, captionProps }) {
  const theme = useTheme();

  return (
    <Stack {...stackProps} sx={{ gap: 2, ...(stackProps?.sx && { ...stackProps.sx }) }}>
      <Typeset
        {...{
          heading: 'Join our newsletter',
          caption: 'Discover the Features That Will Transform Your Customer Relationships',
          stackProps: { sx: { gap: 0.5, width: { xs: 1, md: 400 } } },
          headingProps: { variant: 'h4', ...headingProps },
          captionProps: { variant: 'body1', ...captionProps }
        }}
      />
      <OutlinedInput
        placeholder="Enter your email address"
        endAdornment={
          <IconButton
            sx={{ px: 3, py: 2, bgcolor: 'primary.main', borderRadius: 25, '&:hover': { bgcolor: 'primary.dark', boxShadow: 1 } }}
            aria-label="send"
          >
            <SvgIcon name="tabler-send" size={16} color="background.default" stroke={2} />
          </IconButton>
        }
        sx={{
          ...theme.typography.caption2,
          color: 'text.primary',
          maxWidth: 400,
          width: 1,
          pr: 0.5,
          '& .MuiOutlinedInput-input': {
            p: '18px 24px'
          },
          '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
        }}
      />
    </Stack>
  );
}

JoinUS.propTypes = { stackProps: PropTypes.any, headingProps: PropTypes.any, captionProps: PropTypes.any };

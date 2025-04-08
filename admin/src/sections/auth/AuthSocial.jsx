'use client';
import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import GetImagePath from '@/utils/GetImagePath';
import { SocialTypes } from '@/enum';

/***************************  SOCIAL BUTTON - DATA  ***************************/

const authButtons = [
  {
    label: 'Google',
    icon: '/assets/images/social/google.svg',
    title: 'Sign in with Google'
  },
  {
    label: 'Facebook',
    icon: '/assets/images/social/facebook.svg',
    title: 'Sign in with Facebook'
  },
  {
    label: 'Apple',
    icon: { light: '/assets/images/social/apple-light.svg', dark: '/assets/images/social/apple-dark.svg' },
    title: 'Sign in with Apple'
  }
];

/***************************  AUTH - SOCIAL  ***************************/

export default function AuthSocial({ type = SocialTypes.VERTICAL, buttonSx }) {
  return (
    <Stack direction={type === SocialTypes.VERTICAL ? 'column' : 'row'} sx={{ gap: 1 }}>
      {authButtons.map((item, index) => (
        <Button
          key={index}
          variant="outlined"
          fullWidth
          size="small"
          color="secondary"
          sx={{ ...(type === SocialTypes.HORIZONTAL && { '.MuiButton-startIcon': { m: 0 } }), ...buttonSx }}
          startIcon={<CardMedia component="img" src={GetImagePath(item.icon)} sx={{ width: 16, height: 16 }} alt={item.label} />}
        >
          {type === SocialTypes.VERTICAL && (
            <Typography variant="caption1" sx={{ textTransform: 'none' }}>
              {item.title}
            </Typography>
          )}
        </Button>
      ))}
    </Stack>
  );
}

AuthSocial.propTypes = { type: PropTypes.any, SocialTypes: PropTypes.any, VERTICAL: PropTypes.any, buttonSx: PropTypes.any };

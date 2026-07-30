'use client';
import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import SvgIcon from '@/components/SvgIcon';

/***************************  AUTH - LOGIN MODAL  ***************************/

export default function AuthLoginModal({ open, onClose }) {
  const handleLogin = () => {
    const redirectUrl = 'https://ai.saasable.io/chat';

    const loginUrl = `https://codedthemes.com/login/?redirect=https://codedthemes.com/wp-json/builderapi/v1/sso?redirect=${encodeURIComponent(redirectUrl)}`;

    window.location.href = loginUrl;
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 4,
            bgcolor: 'background.paper',
            border: 1,
            borderColor: 'divider',
            boxShadow: (theme) => theme.shadows[10],
            overflow: 'visible'
          }
        }
      }}
    >
      <Box sx={{ position: 'relative', px: 4, py: 4 }}>
        <IconButton
          size="small"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '-17px',
            right: '-17px',
            borderRadius: '50%',
            color: 'text.secondary',
            bgcolor: 'grey.200',
            ':hover': { bgcolor: 'grey.300' }
          }}
        >
          <SvgIcon name="tabler-x" size={18} />
        </IconButton>

        <Stack sx={{ gap: 3, alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
            Continue to SaasAble AI
          </Typography>

          <Divider flexItem />

          <Button
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ py: 1.5, borderRadius: 3, fontSize: '1rem', textTransform: 'none', boxShadow: (theme) => theme.shadows[4] }}
          >
            Continue With CodedThemes
          </Button>

          <Stack direction="row" sx={{ gap: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SvgIcon name="tabler-shield-check" size={16} color="currentColor" />

            <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
              Secure authentication powered by CodedThemes
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Dialog>
  );
}

AuthLoginModal.propTypes = { open: PropTypes.bool, onClose: PropTypes.func };

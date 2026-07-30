'use client';
import PropTypes from 'prop-types';

import { useState } from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import AuthLoginModal from '@/components/AuthLoginModal';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import { AUTH_USER_KEY } from '@/config';

const particles = [
  { size: 12, color: 'primary.main', top: '15%', left: '8%', duration: 14, delay: 0 },
  { size: 16, color: 'secondary.main', top: '25%', right: '12%', duration: 16, delay: 2 },
  { size: 10, color: 'info.main', bottom: '20%', left: '15%', duration: 12, delay: 4 },
  { size: 14, color: 'error.main', bottom: '30%', right: '20%', duration: 15, delay: 1 },
  { size: 18, color: 'primary.light', top: '55%', left: '4%', duration: 18, delay: 3 },
  { size: 12, color: 'success.main', top: '65%', right: '6%', duration: 13, delay: 5 }
];

/***************************  HERO - 20  ***************************/

export default function Hero20({ headLine, captionLine, placeholder, suggestedChips, previewMode = false, sxProps }) {
  const [inputValue, setInputValue] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const isLoggedIn = () => {
    if (typeof window === 'undefined') return false;
    const authData = localStorage.getItem(AUTH_USER_KEY);
    return !!authData && JSON.parse(authData)?.access_token;
  };

  const handleSend = () => {
    if (previewMode) return;
    if (!inputValue.trim()) return;

    if (!isLoggedIn()) {
      setShowLoginModal(true);
      return;
    }

    setInputValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: 1,
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 84px)',
        alignItems: 'center',
        ...sxProps
      }}
    >
      {particles.map((p, idx) => (
        <Box
          key={idx}
          component={motion.div}
          animate={{ y: [0, -60, 30, 0], x: [0, 30, -30, 0], scale: [1, 1.3, 0.7, 1], opacity: [0.15, 0.7, 0.35, 0.15] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            bgcolor: p.color,
            top: p.top,
            left: p.left,
            right: p.right,
            bottom: p.bottom,
            pointerEvents: 'none',
            filter: 'blur(1px)',
            zIndex: 0
          }}
        />
      ))}

      <Box
        component={motion.div}
        animate={{ x: [0, 100, -50, 0], y: [0, -80, 100, 0], scale: [1, 1.2, 0.8, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: { xs: 250, md: 450 },
          height: { xs: 250, md: 450 },
          borderRadius: '50%',
          bgcolor: 'primary.light',
          opacity: 0.16,
          filter: 'blur(100px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <Box
        component={motion.div}
        animate={{ x: [0, -100, 80, 0], y: [0, 90, -80, 0], scale: [1, 0.85, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '15%',
          width: { xs: 280, md: 480 },
          height: { xs: 280, md: 480 },
          borderRadius: '50%',
          bgcolor: 'secondary.light',
          opacity: 0.16,
          filter: 'blur(120px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <ContainerWrapper sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          sx={{
            minHeight: 'calc(100vh - 84px)',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: { xs: 2.5, md: 4 }
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                mb: 2
              }}
            >
              {headLine.normalText}
              <Typography component="span" variant="inherit" sx={{ color: 'primary.main', display: 'inline' }}>
                {headLine.highlightedText}
              </Typography>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: 750,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '0.95rem', sm: '1.1rem' }
              }}
            >
              {captionLine}
            </Typography>
          </Box>

          <Stack sx={{ width: 1, maxWidth: 720, gap: 1.5, position: 'relative' }}>
            <Box
              component={motion.div}
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.99, 1.01, 0.99] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              sx={(theme) => ({
                position: 'absolute',
                top: -3,
                left: -3,
                right: -3,
                bottom: -3,
                borderRadius: 4.5,
                background: `linear-gradient(45deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.secondary.main}, ${theme.vars.palette.info.main}, ${theme.vars.palette.primary.main})`,
                filter: 'blur(6px)',
                zIndex: 0,
                pointerEvents: 'none'
              })}
            />

            <Card
              sx={{
                p: 1.5,
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                position: 'relative',
                zIndex: 1,
                boxShadow: 'none'
              }}
            >
              <InputBase
                fullWidth
                multiline
                rows={3}
                placeholder={placeholder || 'Ask me anything...'}
                value={inputValue}
                onChange={(e) => {
                  if (previewMode) return;
                  setInputValue(e.target.value);
                }}
                onKeyDown={handleKeyDown}
                readOnly={previewMode}
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  color: 'text.primary',
                  px: 1,
                  '& .MuiInputBase-input::placeholder': {
                    color: 'text.disabled',
                    opacity: 1
                  }
                }}
              />

              <Stack direction="row" sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (previewMode) return;
                    handleSend();
                  }}
                  disableRipple={previewMode}
                  sx={{
                    minWidth: 40,
                    width: 40,
                    height: 40,
                    borderRadius: 2.5,
                    p: 0,
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    '&:hover': { bgcolor: 'primary.dark' }
                  }}
                >
                  <SvgIcon name="tabler-send" size={18} color="inherit" />
                </Button>
              </Stack>
            </Card>
          </Stack>

          {suggestedChips && (
            <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 1, maxWidth: 800 }}>
              {suggestedChips.map((chipItem, index) => (
                <Chip
                  key={index}
                  label={chipItem.label}
                  variant="outlined"
                  icon={chipItem.icon ? <SvgIcon name={chipItem.icon} size={14} /> : undefined}
                  onClick={() => {
                    if (previewMode) return;
                    setInputValue(chipItem.prompt);
                  }}
                  sx={{
                    borderRadius: 5,
                    px: 1,
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    cursor: 'pointer',
                    fontSize: '0.825rem',
                    fontWeight: 500,
                    '& .MuiChip-label': { padding: 1 },
                    '&:hover': {
                      bgcolor: 'primary.lighter',
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      '& svg': { color: 'primary.main' }
                    }
                  }}
                />
              ))}
            </Stack>
          )}
        </Stack>
      </ContainerWrapper>

      {!previewMode && <AuthLoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />}
    </Box>
  );
}

Hero20.propTypes = {
  headLine: PropTypes.object,
  captionLine: PropTypes.string,
  placeholder: PropTypes.string,
  suggestedChips: PropTypes.object,
  previewMode: PropTypes.bool,
  sxProps: PropTypes.object
};

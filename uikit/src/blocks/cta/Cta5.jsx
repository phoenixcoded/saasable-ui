'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import LogoWatermark from '@/components/logo/LogoWatermark';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @assets
import Wave from '@/images/graphics/Wave';

/***************************  CALL TO ACTION - 5  ***************************/

export default function Cta5({ heading, caption, label, input = false, primaryBtn, secondaryBtn, description, saleData, profileGroups }) {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
      >
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 8, md: 9 }}>
            <GraphicsCard sx={{ position: 'relative' }}>
              <Stack
                sx={{ alignItems: 'flex-start', gap: { xs: 5.75, sm: 10 }, p: { xs: 3, sm: 4, md: 8 }, position: 'relative', zIndex: 1 }}
              >
                <Stack sx={{ gap: 5 }}>
                  <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
                    <Chip
                      label={
                        <Typography variant="caption" sx={{ color: 'secondary.main' }}>
                          {label}
                        </Typography>
                      }
                      variant="outlined"
                      sx={{ borderColor: 'grey.600', '& .MuiChip-label': { py: 0.75, px: 2 } }}
                    />
                    <Divider sx={{ width: 63, borderBottomWidth: 2 }} />
                  </Stack>
                  <Typeset {...{ heading, caption, captionProps: { sx: { maxWidth: 478 } } }} />
                </Stack>
                {input && typeof input === 'object' && (
                  <Stack sx={{ gap: 0.75, width: { sm: '100%', md: 'unset' } }}>
                    <OutlinedInput
                      placeholder={input.placeholder || 'Enter your email address'}
                      endAdornment={
                        <Button
                          color="primary"
                          variant="contained"
                          sx={{ px: 4, minWidth: { xs: 110, md: 120 } }}
                          {...input.adornmentBtn}
                        />
                      }
                      sx={{
                        ...theme.typography.caption2,
                        color: 'secondary.main',
                        p: 0.5,
                        whiteSpace: 'nowrap',
                        '& .MuiOutlinedInput-input': { p: '6px 20px' },
                        '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
                      }}
                    />
                    {input.helpertext && (
                      <Typography variant="body2" sx={{ color: 'grey.700' }}>
                        {input.helpertext}
                      </Typography>
                    )}
                  </Stack>
                )}
                {(primaryBtn || secondaryBtn || description) && (
                  <Stack sx={{ alignItems: 'flex-start', gap: 1.5, width: { sm: '100%', md: '60%' }, ...(input && { mt: -6 }) }}>
                    {(primaryBtn || secondaryBtn) && (
                      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                        {secondaryBtn && (
                          <ButtonAnimationWrapper>
                            <Button variant="outlined" sx={{ minWidth: { sm: 170 } }} {...secondaryBtn} />
                          </ButtonAnimationWrapper>
                        )}
                        {primaryBtn && (
                          <ButtonAnimationWrapper>
                            <Button variant="contained" sx={{ minWidth: { sm: 170 } }} {...primaryBtn} />
                          </ButtonAnimationWrapper>
                        )}
                      </Stack>
                    )}
                    {description && typeof description === 'string' ? (
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                      </Typography>
                    ) : (
                      description
                    )}
                  </Stack>
                )}
              </Stack>
              <Box sx={{ position: 'absolute', right: -160, bottom: -160, display: { xs: 'none', md: 'block' }, transform: 'scaleX(-1)' }}>
                <LogoWatermark />
              </Box>
            </GraphicsCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Grid container sx={{ height: 1, position: 'relative' }}>
              <Grid size={{ xs: 6, sm: 12 }} sx={{ minHeight: { sm: '50%' } }}>
                <GraphicsCard sx={{ height: 1 }}>
                  <Stack sx={{ alignItems: 'center', gap: 1, py: { xs: 2, sm: 6, md: 7.5 }, px: { xs: 2, sm: 3.5 }, textAlign: 'center' }}>
                    <Typography variant="h1">
                      {saleData.count}
                      <Typography variant="h2" component="span" sx={{ color: 'text.secondary' }}>
                        {saleData.defaultUnit}
                      </Typography>
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{saleData.caption}</Typography>
                  </Stack>
                </GraphicsCard>
              </Grid>
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: { xs: 'translate(-50%,-50%) rotate(90deg)', sm: 'translate(-50%,-50%)' },
                  '& .wave svg': { width: { xs: 70, sm: 122 } }
                }}
              >
                <Wave />
              </Box>
              <Grid size={{ xs: 6, sm: 12 }} sx={{ minHeight: { sm: '50%' } }}>
                <GraphicsCard sx={{ height: 1 }}>
                  <Stack
                    sx={{
                      height: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      gap: 1,
                      py: { xs: 2, sm: 4, md: 6.75 },
                      px: { xs: 2, sm: 1.5 }
                    }}
                  >
                    <AvatarGroup
                      max={5}
                      sx={{ justifyContent: 'flex-end', '& .MuiAvatar-root': { borderWidth: 1, ml: { xs: -2, sm: -3 } } }}
                    >
                      {profileGroups.avatarGroups.map((item, index) => (
                        <Avatar
                          key={index}
                          src={GetImagePath(item.avatar)}
                          sx={{ width: { xs: 40, sm: 58 }, height: { xs: 40, sm: 58 } }}
                          alt="Avatar"
                        />
                      ))}
                    </AvatarGroup>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                      {profileGroups.review}
                    </Typography>
                  </Stack>
                </GraphicsCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
    </ContainerWrapper>
  );
}

Cta5.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.oneOfType([PropTypes.any, PropTypes.bool]),
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any,
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  saleData: PropTypes.any,
  profileGroups: PropTypes.object
};

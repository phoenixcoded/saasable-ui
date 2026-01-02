'use client';
import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'motion/react';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  INTEGRATION - TAG  ***************************/

function IntegrationTag({ label, icon }) {
  const iconSize = { xs: 32, md: 40 };

  return (
    <Chip
      label={label}
      {...(icon && { icon: <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} stroke={1} color="inherit" /> })}
      slotProps={{ label: { sx: { p: 0, ...(icon && { pl: 1.25 }), typography: 'h5' } } }}
      sx={{
        px: { xs: 2.25, md: 3 },
        py: icon ? { xs: 1.25, md: 1.75 } : { xs: 1.875, md: 2.5 },
        m: 0.5,
        bgcolor: 'background.default',
        '& svg': { width: iconSize, height: iconSize }
      }}
    />
  );
}

/***************************  INTEGRATION - 2  ***************************/

/**
 *
 * Demos:
 * - [Integration2](https://www.saasable.io/blocks/integration/integration2)
 *
 * API:
 * - [Integration2 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/integration/integration2#props-details)
 */

export default function Integration2({ headLine, captionLine, primaryBtn, tagList }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
      >
        <GraphicsCard>
          <Stack sx={{ alignItems: 'center', p: { xs: 3, sm: 4, md: 5 } }}>
            <Stack sx={{ alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              >
                {headLine && (
                  <Typography align="center" variant="h2">
                    {headLine}
                  </Typography>
                )}
                {captionLine && (
                  <Typography align="center" variant="h6" sx={{ color: 'text.secondary' }}>
                    {captionLine}
                  </Typography>
                )}
              </motion.div>
            </Stack>
            <Stack direction="row" sx={{ py: { xs: 4, sm: 5, md: 6 }, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              {tagList.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: Math.random() * 0.6 }}
                >
                  <IntegrationTag {...integration} />
                </motion.div>
              ))}
            </Stack>
            {primaryBtn && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                whileHover={{ scale: 1.06 }}
              >
                <ButtonAnimationWrapper>
                  <Button variant="contained" size="large" {...primaryBtn} />
                </ButtonAnimationWrapper>
              </motion.div>
            )}
          </Stack>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

IntegrationTag.propTypes = { label: PropTypes.any, icon: PropTypes.any };

Integration2.propTypes = { headLine: PropTypes.string, captionLine: PropTypes.string, primaryBtn: PropTypes.any, tagList: PropTypes.array };

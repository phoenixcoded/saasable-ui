'use client';
import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'motion/react';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard, IconCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FEATURE - 21  ***************************/

/**
 *
 * Demos:
 * - [Feature21](https://www.saasable.io/blocks/feature/feature21)
 *
 * API
 * - [Feature21 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/feature/feature21#props-details)
 */

export default function Feature21({ heading, caption, image, features, primaryBtn, secondaryBtn }) {
  const imagePadding = { xs: 3, sm: 4, md: 5 };
  const iconProps = { color: 'text.primary', stroke: 1 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        {(heading || caption) && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
          </motion.div>
        )}
        <Stack sx={{ gap: 1.5 }}>
          {image && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3
              }}
            >
              <GraphicsCard>
                <Box sx={{ pl: imagePadding, pt: imagePadding, height: { xs: 204, sm: 300, md: 360 } }}>
                  <GraphicsImage
                    image={image}
                    sx={{
                      height: 1,
                      backgroundPositionX: 'left',
                      backgroundPositionY: 'top',
                      borderTopLeftRadius: { xs: 12 },
                      borderBottomRightRadius: { xs: 20, sm: 32, md: 40 },
                      border: '5px solid',
                      borderColor: 'grey.200',
                      borderBottom: 'none',
                      borderRight: 'none'
                    }}
                  />
                </Box>
              </GraphicsCard>
            </motion.div>
          )}
          <Grid container spacing={1.5}>
            {features.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  style={{ height: '100%' }}
                >
                  <IconCard
                    icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                    title={item.title}
                    stackProps={{ sx: { gap: 2, height: 1 } }}
                    cardPadding={{ xs: 2, sm: 3 }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
        {(primaryBtn || secondaryBtn) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
              {secondaryBtn && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.06 }}
                >
                  <ButtonAnimationWrapper>
                    <Button variant="outlined" startIcon={<SvgIcon name="tabler-eye" size={16} stroke={3} />} {...secondaryBtn} />
                  </ButtonAnimationWrapper>
                </motion.div>
              )}
              {primaryBtn && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.06 }}
                >
                  <ButtonAnimationWrapper>
                    <Button
                      variant="contained"
                      startIcon={<SvgIcon name="tabler-download" size={16} stroke={3} color="background.default" />}
                      {...primaryBtn}
                    />
                  </ButtonAnimationWrapper>
                </motion.div>
              )}
            </Stack>
          </motion.div>
        )}
      </Stack>
    </ContainerWrapper>
  );
}

Feature21.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.any,
  features: PropTypes.array,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any
};

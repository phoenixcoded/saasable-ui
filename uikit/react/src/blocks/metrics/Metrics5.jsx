'use client';
import PropTypes from 'prop-types';

import { useEffect } from 'react';

// @mui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { animate, motion, useMotionValue, useTransform } from 'motion/react';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

function AnimatedCounter({ startCount, endCount }) {
  const countValue = useMotionValue(startCount);
  const rounded = useTransform(countValue, (value) => Math.round(value));

  useEffect(() => {
    const controls = animate(countValue, endCount, { duration: 5, ease: 'linear' });

    return () => controls.stop();
  }, [countValue, endCount]);

  return <motion.pre style={{ margin: 0 }}>{rounded}</motion.pre>;
}

/***************************  METRICS - 5  ***************************/

/**
 *
 * Demos:
 * - [Metrics5](https://www.saasable.io/blocks/metrics/metrics5)
 *
 * API:
 * - [Metrics5 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/metrics/metrics5#props-details)
 */

export default function Metrics5({ heading, caption, blockDetail }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Typeset
            {...{
              heading,
              caption,
              stackProps: { sx: { alignItems: 'center', textAlign: 'center' } },
              captionProps: { sx: { width: { xs: 1, sm: '80%', md: '65%' } } }
            }}
          />
        </motion.div>
        <Grid container spacing={1.5}>
          {blockDetail.map((item, index) => (
            <Grid key={index} size={{ xs: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                style={{ height: '100%' }}
              >
                <GraphicsCard sx={{ p: { xs: 2, sm: 2.25, md: 3 }, height: 1 }}>
                  <Stack sx={{ gap: 0.5, alignItems: 'center' }}>
                    <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                      <Typography component="div" variant="h1">
                        <AnimatedCounter startCount={0} endCount={item.counter} />
                      </Typography>
                      <Typography component="div" variant="h3" sx={{ color: 'text.secondary', mb: { xs: 0.25, md: 0.625 } }}>
                        {item.defaultUnit}
                      </Typography>
                    </Stack>
                    <Typography align="center" sx={{ color: 'text.secondary' }}>
                      {item.caption}
                    </Typography>
                  </Stack>
                </GraphicsCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

AnimatedCounter.propTypes = { startCount: PropTypes.number, endCount: PropTypes.number };

Metrics5.propTypes = { heading: PropTypes.any, caption: PropTypes.any, blockDetail: PropTypes.any };

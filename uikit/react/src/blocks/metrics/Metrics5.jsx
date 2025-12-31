'use client';
import PropTypes from 'prop-types';

// @mui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

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
        <Typeset
          {...{
            heading,
            caption,
            stackProps: { sx: { alignItems: 'center', textAlign: 'center' } },
            captionProps: { sx: { width: { xs: 1, sm: '80%', md: '65%' } } }
          }}
        />
        <Grid container spacing={1.5}>
          {blockDetail.map((item, index) => (
            <Grid key={index} size={{ xs: 6, md: 3 }}>
              <GraphicsCard sx={{ p: { xs: 2, sm: 2.25, md: 3 }, height: 1 }}>
                <Stack sx={{ gap: 0.5, alignItems: 'center' }}>
                  <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                    <Typography component="div" variant="h1">
                      {item.counter}
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
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

Metrics5.propTypes = { heading: PropTypes.any, caption: PropTypes.any, blockDetail: PropTypes.any };

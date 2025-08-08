'use client';
import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Error500 from '@/images/maintenance/Error500';
import Error500Server from '@/images/maintenance/Error500Server';

/***************************  ERROR 500 - PAGES  ***************************/

/**
 *
 * Demos:
 * - [Error500](https://www.saasable.io/blocks/error500)
 */

export default function Error500Page({ primaryBtn, heading }) {
  return (
    <ContainerWrapper>
      <Stack sx={{ width: 1, height: '100vh', py: SECTION_COMMON_PY, minHeight: { xs: 450, sm: 600, md: 800 } }}>
        <GraphicsCard sx={{ width: 1, height: 1, position: 'relative' }}>
          <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: 2.25, height: '70%' }}>
            <Box sx={{ width: 1, maxWidth: { xs: 340, sm: 486, md: 728 }, p: 2 }}>
              <Error500 />
            </Box>
            <Typography sx={{ textAlign: 'center', width: { xs: 248, sm: 340, md: 448 } }}>{heading}</Typography>
            {primaryBtn && <Button variant="contained" size="medium" {...primaryBtn} sx={{ zIndex: 1 }} />}
          </Stack>
          <Box sx={{ width: { xs: '95%', md: '90%' }, position: 'absolute', left: -2, bottom: -6 }}>
            <Error500Server />
          </Box>
        </GraphicsCard>
      </Stack>
    </ContainerWrapper>
  );
}

Error500Page.propTypes = { primaryBtn: PropTypes.any, heading: PropTypes.string };

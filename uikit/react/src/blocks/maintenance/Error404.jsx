'use client';
import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Error404 from '@/images/maintenance/Error404';

/***************************  ERROR 404 - PAGES  ***************************/

/**
 *
 * Demos:
 * - [Error404](https://www.saasable.io/blocks/error404)
 *
 *  API
 * - [Error404 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/maintenance/error404#props-details)
 */

export default function Error404Page({ primaryBtn, heading }) {
  return (
    <ContainerWrapper>
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 1,
          height: '100vh',
          py: SECTION_COMMON_PY,
          minHeight: { xs: 450, sm: 600, md: 800 }
        }}
      >
        <GraphicsCard sx={{ width: 1, height: 1, py: { xs: 3, sm: 4, md: 6 } }}>
          <Stack sx={{ justifyContent: 'center', height: 1, gap: { xs: 4, sm: 1 } }}>
            <Error404 />
            <Stack sx={{ gap: 2.25, alignItems: 'center', mt: { sm: -5, lg: -6.25 } }}>
              <Typography sx={{ width: { xs: 210, sm: 300 }, textAlign: 'center' }}>{heading}</Typography>
              {primaryBtn && <Button variant="contained" size="medium" {...primaryBtn} />}
            </Stack>
          </Stack>
        </GraphicsCard>
      </Stack>
    </ContainerWrapper>
  );
}

Error404Page.propTypes = { primaryBtn: PropTypes.any, heading: PropTypes.string };

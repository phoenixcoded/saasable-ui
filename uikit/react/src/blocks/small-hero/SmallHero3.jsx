import PropTypes from 'prop-types';
// @mui
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { NextLink } from '@/components/routes';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  SMALL HERO - 3  ***************************/

/**
 *
 * Demos:
 * - [SmallHero3](https://www.saasable.io/blocks/small-hero/small-hero3)
 *
 * API
 * - [SmallHero3 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/smallhero/smallhero3#props-details)
 */

export default function SmallHero3({ chip, headLine, captionLine, exploreBtn }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ alignItems: 'start', gap: { xs: 1.5, md: 4 } }}>
        {chip && (
          <Chip
            label={
              typeof chip.label === 'string' ? (
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {chip.label}
                  {chip.link && (
                    <Link
                      component={NextLink}
                      variant="caption"
                      color="primary.main"
                      {...chip.link}
                      underline="hover"
                      sx={{ '&:hover': { color: 'primary.dark' } }}
                    />
                  )}
                </Typography>
              ) : (
                chip.label
              )
            }
            sx={{ bgcolor: 'grey.100' }}
          />
        )}

        <Stack direction="row" sx={{ justifyContent: 'space-between', flexWrap: { xs: 'wrap', md: 'unset' }, width: 1, gap: 3 }}>
          <Stack sx={{ gap: 1.5 }}>
            {typeof headLine === 'string' ? <Typography variant="h1">{headLine}</Typography> : headLine}
            {captionLine && (
              <Typography variant="h6" sx={{ color: 'text.secondary', width: { md: '85%' } }}>
                {captionLine}
              </Typography>
            )}
          </Stack>
          {exploreBtn && (
            <Stack direction="row" sx={{ alignItems: 'end', justifyContent: 'center', minWidth: 'fit-content' }}>
              <Button size="large" variant="outlined" {...exploreBtn} />
            </Stack>
          )}
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

SmallHero3.propTypes = { chip: PropTypes.any, headLine: PropTypes.any, captionLine: PropTypes.any, exploreBtn: PropTypes.any };

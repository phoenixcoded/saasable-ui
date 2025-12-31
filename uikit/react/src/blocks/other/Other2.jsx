'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { GraphicsCard } from '@/components/cards';
import { withAlpha } from '@/utils/colorUtils';

/***************************  OTHER - 2  ***************************/

/**
 *
 * Demos:
 * - [Other2](https://www.saasable.io/blocks/other/other2)
 *
 * API
 * - [Other2 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/other/other2#props-details)
 */

export default function Other2() {
  const theme = useTheme();
  const lightColor = theme.vars.palette.secondary.light;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <Stack sx={{ alignItems: 'center', gap: { xs: 2.5, sm: 3 } }}>
          <Skeleton
            variant="rounded"
            sx={{ borderRadius: 5, bgcolor: `${withAlpha(theme.vars.palette.secondary.lighter, 0.4)}` }}
            width="30%"
            height={32}
            animation={false}
          />
          <Stack sx={{ alignItems: 'center', gap: 1.5, width: 1, height: 1 }}>
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 2.5, bgcolor: `${withAlpha(lightColor, 0.4)}` }}
              width="70%"
              height={57}
              animation={false}
            />
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 2.5, bgcolor: `${withAlpha(lightColor, 0.4)}` }}
              width="60%"
              height={57}
              animation={false}
            />
          </Stack>
          <Stack sx={{ alignItems: 'center', gap: 1, width: 1, height: 1 }}>
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 1.5, bgcolor: `${withAlpha(lightColor, 0.3)}` }}
              width="36%"
              height={24}
              animation={false}
            />
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 1.5, bgcolor: `${withAlpha(lightColor, 0.3)}` }}
              width="30%"
              height={24}
              animation={false}
            />
          </Stack>
          <Stack direction="row" sx={{ padding: 1.25, gap: 1.5, width: 1, justifyContent: 'center' }}>
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 5, bgcolor: `${withAlpha(lightColor, 0.3)}` }}
              width={183}
              height={52}
              animation={false}
            />
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 5, bgcolor: `${withAlpha(lightColor, 0.6)}` }}
              width={183}
              height={52}
              animation={false}
            />
          </Stack>
        </Stack>
        <Stack>
          <GraphicsCard sx={{ py: { xs: 5, sm: 7.5 }, px: { xs: 3, sm: 6.25 }, position: 'relative' }}>
            <Grid container sx={{ mb: -10 }}>
              <Grid size={8}>
                <Skeleton
                  variant="rounded"
                  sx={{ borderRadius: 5, height: { xs: 280, sm: 380 }, bgcolor: `${withAlpha(lightColor, 0.4)}` }}
                  animation={false}
                />
              </Grid>
              <Grid size={8}>
                <Skeleton
                  variant="rounded"
                  sx={{
                    fontSize: '1rem',
                    borderRadius: 5,
                    bgcolor: `${withAlpha(theme.vars.palette.background.default, 0.4)}`,
                    position: 'absolute',
                    top: '40%',
                    left: '35%'
                  }}
                  width="61%"
                  height="80%"
                  animation={false}
                />
              </Grid>
            </Grid>
          </GraphicsCard>
        </Stack>
        <Stack>
          <Grid container spacing={7.5}>
            {[0, 1, 2, 3].map((item) => (
              <Grid key={item} size={{ xs: 6, sm: 6, md: 3 }}>
                <Stack sx={{ gap: 1.5 }}>
                  <Skeleton
                    variant="rounded"
                    sx={{ borderRadius: 3, bgcolor: `${withAlpha(lightColor, 0.4)}` }}
                    width="80%"
                    height={36}
                    animation={false}
                  />
                  <Skeleton
                    variant="rounded"
                    sx={{ borderRadius: 1.5, bgcolor: `${withAlpha(lightColor, 0.25)}` }}
                    width="100%"
                    height={16}
                    animation={false}
                  />
                  <Skeleton
                    variant="rounded"
                    sx={{ borderRadius: 1.5, bgcolor: `${withAlpha(lightColor, 0.25)}` }}
                    width="32%"
                    height={16}
                    animation={false}
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

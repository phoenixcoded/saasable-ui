import PropTypes from 'prop-types';
// @mui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import MainCard from '@/components/MainCard';

/***************************  COLOR - CARD  ***************************/

export default function ColorBox({ value, color, muiLabel, figmaLabel, figmaValue, main = false }) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <MainCard
        sx={{
          p: 1.5,
          borderRadius: 4,
          ...(main && { border: '1px dashed', borderColor: 'primary.main' }),
          ...(muiLabel === 'grey.100' && { bgcolor: 'grey.200' })
        }}
      >
        <MainCard sx={{ py: 3, borderRadius: 3, bgcolor: value, color }}>
          <Stack sx={{ gap: 0.75, alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h3">{value}</Typography>
            <Typography>{figmaLabel}</Typography>
          </Stack>
        </MainCard>
        <Stack direction="row" sx={{ justifyContent: 'space-between', mt: 1.5 }}>
          <Typography variant="subtitle1">{muiLabel}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{figmaValue}</Typography>
        </Stack>
      </MainCard>
    </Grid>
  );
}

ColorBox.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  muiLabel: PropTypes.string,
  figmaLabel: PropTypes.string,
  figmaValue: PropTypes.string,
  main: PropTypes.bool
};

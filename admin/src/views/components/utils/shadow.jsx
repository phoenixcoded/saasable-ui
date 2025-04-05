'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ComponentsWrapper from '@/components/ComponentsWrapper';
import MainCard from '@/components/MainCard';

/***************************  SHADOW TYPE - LIST  ***************************/

const shadows = [
  { label: 'Button Shadow', value: 'button' },
  { label: 'Section Shadow', value: 'section' },
  { label: 'Tooltip Shadow', value: 'tooltip' },
  { label: 'Focus Shadow', value: 'focus' }
];

/***************************  SHADOW - BOX  ***************************/

function ShadowBox({ label, value }) {
  const theme = useTheme();

  return (
    <MainCard sx={{ p: 0.25, boxShadow: theme.customShadows[value], bgcolor: 'grey.50', width: 1, border: 'none' }}>
      <Stack sx={{ alignItems: 'center', justifyContent: 'center', height: 180 }}>
        <Stack sx={{ gap: 1, alignItems: 'center' }}>
          <Typography variant="h6">{`customShadows.${value}`}</Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {label}
          </Typography>
        </Stack>
      </Stack>
    </MainCard>
  );
}

/***************************  UTILS - SHADOW  ***************************/

export default function UtilsShadow() {
  return (
    <ComponentsWrapper title="Shadows">
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {shadows.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <ShadowBox {...item} />
          </Grid>
        ))}
      </Grid>
    </ComponentsWrapper>
  );
}

ShadowBox.propTypes = { label: PropTypes.string, value: PropTypes.any };

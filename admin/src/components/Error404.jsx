'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @assets
import Error404 from '@/images/maintenance/Error404';

/***************************  ERROR 404 - PAGES  ***************************/

export default function Error404Page({ primaryBtn, heading }) {
  const theme = useTheme();
  const upMD = useMediaQuery(theme.breakpoints.up('md'));
  const upXL = useMediaQuery(theme.breakpoints.up('xl'));
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const isDesktop = (upMD || upXL) && !downMD;

  return (
    <Container {...(isDesktop && { maxWidth: upXL ? 'xl' : 'lg' })} sx={{ ...(downMD && { px: { xs: 2, sm: 4, md: 0 } }) }}>
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 1,
          height: '100vh',
          py: { xs: 4, sm: 5, md: 6 },
          minHeight: { xs: 450, sm: 600, md: 800 }
        }}
      >
        <Card sx={{ bgcolor: 'grey.100', borderRadius: { xs: 6, sm: 8, md: 10 }, width: 1, height: 1, boxShadow: 'none' }}>
          <Stack sx={{ justifyContent: 'center', height: 1, gap: { xs: 4, sm: 1 } }}>
            <Error404 />
            <Stack sx={{ gap: 2.25, alignItems: 'center', mt: { sm: -5, lg: -6.25 } }}>
              <Typography sx={{ width: { xs: 210, sm: 300 }, textAlign: 'center' }}>{heading}</Typography>
              {primaryBtn && <Button variant="contained" size="medium" {...primaryBtn} />}
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}

Error404Page.propTypes = { primaryBtn: PropTypes.any, heading: PropTypes.string };

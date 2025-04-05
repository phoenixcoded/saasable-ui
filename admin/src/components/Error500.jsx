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
import Box from '@mui/material/Box';

// @assets
import Error500 from '@/images/maintenance/Error500';
import Error500Server from '@/images/maintenance/Error500Server';

/***************************  ERROR 500 - PAGES  ***************************/

export default function Error500Page({ primaryBtn, heading }) {
  const theme = useTheme();
  const upMD = useMediaQuery(theme.breakpoints.up('md'));
  const upXL = useMediaQuery(theme.breakpoints.up('xl'));
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const isDesktop = (upMD || upXL) && !downMD;

  return (
    <Container
      {...(isDesktop && { maxWidth: upXL ? 'xl' : 'lg' })}
      sx={{
        ...(downMD && { px: { xs: 2, sm: 4, md: 0 } })
      }}
    >
      <Stack sx={{ width: 1, height: '100vh', py: { xs: 4, sm: 5, md: 6 }, minHeight: { xs: 450, sm: 600, md: 800 } }}>
        <Card
          sx={{ bgcolor: 'grey.100', borderRadius: { xs: 6, sm: 8, md: 10 }, width: 1, height: 1, position: 'relative', boxShadow: 'none' }}
        >
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
        </Card>
      </Stack>
    </Container>
  );
}

Error500Page.propTypes = { primaryBtn: PropTypes.any, heading: PropTypes.string };

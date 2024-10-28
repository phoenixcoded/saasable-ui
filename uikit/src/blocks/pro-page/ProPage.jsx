import PropTypes from 'prop-types';
// @next
import NextLink from 'next/link';

// @mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';

export default function ProPage({ image }) {
  return (
    <>
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Box
          sx={{
            bgcolor: 'background.default',
            borderRadius: 7.5
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <GraphicsImage
              image={image}
              sx={{
                width: { xs: '75px', md: '150px' },
                height: { xs: '75px', md: '150px' },
                borderRadius: 0
              }}
            />
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, mt: { xs: 4, md: 7 }, textAlign: 'center' }}>
              Discover the Components Not Available in the Free Version
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3, color: 'grey.700', textAlign: 'center' }}>
              <Link href="https://www.saasable.io/" target="_blank" underline="hover" component={NextLink}>
                Check out SaasAble PRO
              </Link>{' '}
              which offers updated components, auto layout, and Figma new variables, complete with dark mode!
            </Typography>

            <Grid container spacing={2} justifyContent="center">
              <Grid>
                <Button
                  variant="outlined"
                  component={NextLink}
                  href="https://www.figma.com/design/mlkXfeqxUKqIo0GQhPBqPb/SaasAble---UI-Kit---Preview-only?node-id=11-1833&t=JBHOIIEuYZpmN6v8-1"
                  target="_blank"
                  sx={{ minWidth: 215 }}
                  startIcon={<CardMedia component="img" src="/assets/images/shared/figma.svg" sx={{ width: 16, height: 16 }} alt="figma" />}
                >
                  Preview Pro
                </Button>
              </Grid>
              <Grid>
                <ButtonAnimationWrapper>
                  <Button
                    variant="contained"
                    color="primary"
                    component={NextLink}
                    href={'https://www.saasable.io/sections'}
                    target="_blank"
                    startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                  >
                    View Pro Component
                  </Button>
                </ButtonAnimationWrapper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ContainerWrapper>
    </>
  );
}

ProPage.propTypes = { image: PropTypes.any };

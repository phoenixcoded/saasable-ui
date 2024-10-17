'use client';
import PropTypes from 'prop-types';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Masonry from '@mui/lab/Masonry';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Rating from '@/components/Rating';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  TESTIMONIAL - 10  ***************************/

export default function Testimonial10({ heading, caption, testimonials }) {
  const theme = useTheme();

  const gc = theme.palette.background.default;
  const gradient = `radial-gradient(146.46% 68.12% at 50% 29.86%, ${alpha(gc, 0)} 0%, ${gc} 100%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption, stackProps: { sx: { maxWidth: { xs: 550, md: 700 }, textAlign: 'center', mx: 'auto' } } }} />
        <Masonry
          columns={{ xs: 2, sm: 3 }}
          spacing={{ xs: 1, sm: 1.5 }}
          sx={{
            position: 'relative',
            '&:before': { position: 'absolute', content: `' '`, left: 0, bottom: 0, width: 1, height: 1, background: gradient }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <GraphicsCard key={index} sx={{ borderRadius: { xs: 4, md: 6 } }}>
              <Stack sx={{ justifyContent: 'space-between', height: 1, gap: 3, p: { xs: 1.5, md: 2 } }}>
                <Rating {...{ rate: testimonial.ratings, starSize: 16 }} />
                <Stack sx={{ gap: 1 }}>
                  <Typography variant="subtitle1">{testimonial.title}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{testimonial.review}</Typography>
                </Stack>
                <Stack sx={{ gap: 0.5 }}>
                  <Typography variant="subtitle1">{testimonial.profile.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {testimonial.profile.role}
                  </Typography>
                </Stack>
              </Stack>
            </GraphicsCard>
          ))}
        </Masonry>
      </Stack>
    </ContainerWrapper>
  );
}

Testimonial10.propTypes = { heading: PropTypes.any, caption: PropTypes.any, testimonials: PropTypes.any };

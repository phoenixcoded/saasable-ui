'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Slider from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';

import { withAlpha } from '@/utils/colorUtils';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  CLIENTELE - 3  ***************************/

/**
 *
 * Demos:
 * - [Clientele3](https://www.saasable.io/blocks/clientele/clientele3)
 *
 * API:
 * - [Clientele3 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/clientele/clientele3#props-details)
 */

export default function Clientele3({ title, clienteleList }) {
  const theme = useTheme();

  const settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2, centerMode: true }
      }
    ]
  };

  const shade = {
    content: `' '`,
    zIndex: 1,
    position: 'absolute',
    width: { sm: 60, xs: 40 },
    height: 1,
    top: 0,
    background: `linear-gradient(90deg, ${theme.vars.palette.background.default} -8.54%, ${withAlpha(theme.vars.palette.background.default, 0)} 100%)`,
    transform: null
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 2.5 }}>
        {title && (
          <Typography variant="subtitle2" align="center" sx={{ color: 'text.secondary' }}>
            {title}
          </Typography>
        )}
        <Box sx={{ position: 'relative', '&:before': { ...shade, left: 0 }, '&:after': { ...shade, right: 0, rotate: '180deg' } }}>
          <Slider {...settings}>
            {clienteleList.map((item, index) => (
              <Box
                sx={{
                  px: { xs: 0.25, sm: 0.5, md: 0.75 },
                  '& svg': { opacity: 0.4, transition: ' all 0.5s ease-in-out' },
                  '&:hover svg': { opacity: 1, transition: ' all 0.5s ease-in-out' }
                }}
              >
                <Chip
                  label={<GraphicsImage {...item} />}
                  slotProps={{ label: { sx: { p: 0 } } }}
                  sx={{ bgcolor: 'grey.100', height: { xs: 40, sm: 46, md: 60 }, width: 1 }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

Clientele3.propTypes = { title: PropTypes.string, clienteleList: PropTypes.array };

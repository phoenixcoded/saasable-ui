'use client';
import PropTypes from 'prop-types';

import { useEffect, useRef, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';

// @assets
import Wave from '@/images/graphics/Wave';

// threshold - adjust threshold as needed
const options = { root: null, rootMargin: '0px', threshold: 0.6 };

/***************************  HERO - 17  ***************************/

/**
 *
 * Demos:
 * - [Hero17](https://www.saasable.io/blocks/hero/hero17)
 *
 * API:
 * - [Hero17 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/hero/hero17#props-details)
 */

export default function Hero17({ chip, headLine, captionLine, primaryBtn, videoSrc, videoThumbnail, listData }) {
  const theme = useTheme();
  const boxRadius = { xs: 24, sm: 32, md: 40 };

  const containerRef = useRef(null);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle video play/pause based on intersection with the viewport
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current && !isPlaying) {
            videoRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.error('Autoplay was prevented:', error);
              });
          }
        } else {
          if (videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [isPlaying]);

  return (
    <>
      <Box
        sx={{
          height: { xs: 592, sm: 738, md: 878 },
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          zIndex: -1,
          borderBottomLeftRadius: boxRadius,
          borderBottomRightRadius: boxRadius,
          ...getBackgroundDots(theme.vars.palette.grey[300], 2, 35),
          bgcolor: 'grey.100'
        }}
      />
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Box ref={containerRef}>
          <Box sx={{ pb: { xs: 3, sm: 4, md: 5 } }}>
            <Stack sx={{ alignItems: 'center', gap: 1.5 }}>
              <Chip
                variant="outlined"
                label={chip.label}
                slotProps={{
                  label: {
                    sx: { py: 0.5, px: 1.5, ...(typeof chip.label === 'string' && { typography: 'caption', color: 'text.secondary' }) }
                  }
                }}
                sx={{ bgcolor: 'grey.100' }}
              />

              <Typography variant="h1" align="center" sx={{ maxWidth: 800 }}>
                {headLine}
              </Typography>

              <Box sx={{ pt: 0.5, pb: 0.75 }}>
                <Wave />
              </Box>

              <Typography variant="h6" align="center" sx={{ color: 'text.secondary', maxWidth: 650 }}>
                {captionLine}
              </Typography>
            </Stack>
            <Stack sx={{ alignItems: 'center', gap: 2, mt: { xs: 3, sm: 4, md: 5 } }}>
              <ButtonAnimationWrapper>
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                  {...primaryBtn}
                />
              </ButtonAnimationWrapper>
              <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                {listData.map((item, index) => (
                  <Chip
                    key={index}
                    label={item.title}
                    variant="outlined"
                    icon={<GraphicsImage image={item.image} sx={{ width: 16, height: 16 }} />}
                    slotProps={{ label: { sx: { py: 0.75, px: 1, typography: 'caption2' } } }}
                    sx={{ height: 32, px: 1, bgcolor: 'grey.100' }}
                  />
                ))}
              </Stack>
            </Stack>
          </Box>

          <GraphicsCard sx={{ border: '5px solid', borderColor: 'grey.300' }}>
            <video
              playsInline
              ref={videoRef}
              width="100%"
              height="100%"
              style={{ display: 'flex', objectFit: 'cover' }}
              preload="metadata"
              autoPlay={false}
              loop={true}
              muted={true}
              poster={videoThumbnail}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </GraphicsCard>
        </Box>
      </ContainerWrapper>
    </>
  );
}

Hero17.propTypes = {
  chip: PropTypes.object,
  headLine: PropTypes.string,
  captionLine: PropTypes.string,
  primaryBtn: PropTypes.any,
  videoSrc: PropTypes.string,
  videoThumbnail: PropTypes.string,
  listData: PropTypes.array
};

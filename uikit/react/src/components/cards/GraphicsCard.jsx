'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

// @project
import { withAlpha } from '@/utils/colorUtils';
import GetImagePath from '@/utils/GetImagePath';

/***************************  GRAPHICS CARD  ***************************/

export default function GraphicsCard({ sx, children, overLay = false, bgImage, ...rest }) {
  const theme = useTheme();

  return (
    <Card
      role="img"
      rel="noopener noreferrer"
      aria-label="graphics card"
      elevation={0}
      sx={{
        bgcolor: 'grey.100',
        borderRadius: { xs: 6, sm: 8, md: 10 },
        ...(bgImage && {
          backgroundImage: `url(${GetImagePath(bgImage)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }),

        ...(overLay && {
          position: 'relative',
          '&:before': {
            content: `' '`,
            position: 'absolute',
            width: 1,
            height: 1,
            top: 0,
            left: 0,
            background: typeof overLay === 'string' ? overLay : withAlpha(theme.vars.palette.grey[100], 0.75)
          }
        }),
        ...sx
      }}
      {...rest}
    >
      {overLay ? <Box sx={{ position: 'relative', height: 1 }}>{children}</Box> : children}
    </Card>
  );
}

GraphicsCard.propTypes = {
  sx: PropTypes.any,
  children: PropTypes.any,
  overLay: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  bgImage: PropTypes.any,
  rest: PropTypes.any
};

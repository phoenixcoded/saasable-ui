import PropTypes from 'prop-types';

// @mui
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// @third-party
import MainSimpleBar from 'simplebar-react';
import { BrowserView, MobileView } from 'react-device-detect';

// @project
import { ThemeDirection } from '@/config';
import { withAlpha } from '@/utils/colorUtils';

// root style
const RootStyle = styled(BrowserView)({ flexGrow: 1, height: '100%', overflow: 'hidden' });

// scroll bar wrapper
const SimpleBarStyle = styled(MainSimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      background: withAlpha(theme.vars.palette.grey[500], 0.48)
    },
    '&.simplebar-visible:before': { opacity: 1 }
  },
  '& .simplebar-track.simplebar-vertical': { width: 10 },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': { height: 6 },
  '& .simplebar-mask': { zIndex: 'inherit' }
}));

/***************************  SIMPLE SCROLL BAR   ***************************/

export default function SimpleBar({ children, sx, ...other }) {
  const theme = useTheme();

  return (
    <>
      <RootStyle>
        <SimpleBarStyle
          clickOnTrack={false}
          sx={sx}
          data-simplebar-direction={theme.direction === ThemeDirection.RTL ? 'rtl' : 'ltr'}
          {...other}
        >
          {children}
        </SimpleBarStyle>
      </RootStyle>
      <MobileView>
        <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      </MobileView>
    </>
  );
}

SimpleBar.propTypes = { children: PropTypes.any, sx: PropTypes.any, other: PropTypes.any };

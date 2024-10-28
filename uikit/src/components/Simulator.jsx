'use client';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';

// @next
// import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NoSsr from '@mui/material/NoSsr';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
// import SelectBox from './SelectBox';
import SvgIcon from './SvgIcon';
// import ThemeSelector from './ThemeSelector';

// import { ThemeMode, Themes } from '@/config';
import { getBackgroundDots } from '@/utils/getBackgroundDots';
import Loader from '@/utils/Loader';

// interface TypographyListProps {
//   title: string;
//   value: string;
// }

/***************************  SIMULATOR - DATA  ***************************/

const viewportData = {
  desktop: { width: '100%', icon: 'tabler-device-imac' },
  tablet: { width: 850, icon: 'tabler-device-tablet' },
  mobile: { width: 425, icon: 'tabler-device-mobile' }
};

/***************************  SIMULATOR - SCREEN BUTTONS  ***************************/

function ScreenButton({ icon, screen, screenSize, onScreenChange }) {
  const activeEffect = screenSize === screen ? 'grey.300' : 'grey.100';

  return (
    <IconButton
      sx={{
        width: 36,
        height: 36,
        bgcolor: activeEffect,
        border: '1px solid',
        borderColor: screenSize === screen ? 'grey.600' : 'grey.300',
        '&.MuiIconButton-root:hover': {
          borderColor: 'grey.600',
          bgcolor: activeEffect
        }
      }}
      onClick={() => onScreenChange(screen)}
      aria-label={screen}
    >
      <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} size={20} color="text.primary" />
    </IconButton>
  );
}

/***************************  COMMON - SIMULATOR  ***************************/

export default function Simulator({ src, defaultHeight }) {
  const theme = useTheme();
  const iframeEl = useRef(null);
  const minimumHeight = 450;

  const [screenSize, setScreenSize] = useState('desktop');
  // const [mode, setMode] = useState(ThemeMode.LIGHT);
  const [viewportHeight, setViewportHeight] = useState(minimumHeight);
  const [randomId, setRandomId] = useState('');

  const boxRadius = 3;
  // const iconProps = { size: 16, stroke: 2, color: 'text.primary' };
  // const btnStyle = {
  //   width: 36,
  //   height: 36,
  //   bgcolor: 'grey.100',
  //   border: '1px solid',
  //   borderColor: 'grey.300',
  //   '&.MuiIconButton-root:hover': { borderColor: 'grey.600', bgcolor: 'grey.100' }
  // };

  const generateRandomId = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
  };

  useEffect(() => {
    setRandomId(generateRandomId(10));
  }, []);

  // Set iframe height based on its content
  const setIframeHeight = (type) => {
    const iframe = iframeEl.current;
    if (iframe && iframe.contentWindow?.document) {
      const contentHeight = iframe.contentWindow.document.documentElement.scrollHeight;
      const contentOffsetHeight = iframe.contentWindow.document.documentElement.offsetHeight;
      setViewportHeight(
        type === 'screenChange'
          ? contentOffsetHeight
          : type === 'load'
            ? contentHeight > contentOffsetHeight
              ? contentOffsetHeight > minimumHeight
                ? contentOffsetHeight
                : minimumHeight
              : contentHeight
            : contentHeight
      );
    }
  };

  const startListener = useCallback(() => {
    const iframeDocument = iframeEl.current?.contentWindow?.document;
    if (iframeDocument) {
      // Create a ResizeObserver to observe the height of the iframe's document element
      const resizeObserver = new ResizeObserver(() => setIframeHeight());
      resizeObserver.observe(iframeDocument.documentElement);

      return () => resizeObserver.disconnect(); // Cleanup observer on unmount
    }
  }, []);

  const handleLoad = useCallback(() => {
    setTimeout(() => {
      setIframeHeight('load');
      setTimeout(() => {
        startListener();
      }, 500);
    }, 500);
  }, [startListener]);

  useEffect(() => {
    if (!defaultHeight) {
      const iframe = iframeEl.current;
      if (iframe) {
        iframe.addEventListener('load', handleLoad);

        return () => {
          iframe.removeEventListener('load', handleLoad);
        };
      }
    }
  }, [handleLoad, randomId, defaultHeight]);

  // Handle screen size change
  const onScreenChange = (screen) => {
    if (screen === screenSize) {
      return;
    }

    const values = Object.keys(viewportData);
    if (values.indexOf(screen) === -1) {
      return;
    }

    setScreenSize(screen);

    // wait for the iframe to resized
    setTimeout(() => setIframeHeight('screenChange'), 100);
  };

  // const onSelectionChange = (item: { title: string; value: string }) => {
  //   console.log(item);
  // };

  // const onThemeChange = (item: { name: string; value: string; color: string }) => {
  //   console.log(item);
  // };

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: boxRadius,
        ...(screenSize != 'desktop' && {
          background: getBackgroundDots(theme.palette.grey[400], 60, 20),
          bgcolor: alpha(theme.palette.grey[50], 0.5)
        })
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          p: 2,
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: boxRadius,
          mt: '-1px',
          mx: '-1px',
          bgcolor: 'grey.50'
        }}
      >
        <Stack direction="row" sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {Object.keys(viewportData).map((item, index) => (
            <ScreenButton
              icon={viewportData[item].icon}
              screen={item}
              key={index}
              screenSize={screenSize}
              onScreenChange={onScreenChange}
            />
          ))}
        </Stack>
        <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>
          {/* <SelectBox options={typographyOptions} defaultSelection="Inter" onChange={onSelectionChange} /> */}
          {/*  <ThemeSelector defaultTheme={Themes.THEME_CRM} onChange={onThemeChange} />
          <IconButton sx={btnStyle} aria-label="mode" onClick={() => setMode(mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT)}>
            {mode === ThemeMode.LIGHT ? <SvgIcon name="tabler-moon" {...iconProps} /> : <SvgIcon name="tabler-sun" {...iconProps} />}
          </IconButton> */}
          {/* <IconButton component={NextLink} href={src} target="_blank" sx={btnStyle} aria-label="open section">
            <SvgIcon name="tabler-arrow-up-right" size={20} color="text.primary" />
          </IconButton> */}

          <Button
            endIcon={<SvgIcon name="tabler-arrow-up-right" size={20} color="text.primary" />}
            href={src}
            sx={{ color: 'text.primary', px: 1.5, py: 1 }}
            target="_blank"
          >
            Preview
          </Button>
        </Stack>
      </Stack>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <NoSsr>
          <Stack
            sx={{
              maxWidth: viewportData[screenSize].width,
              width: 1,
              height: 1,
              ...(screenSize != 'desktop' && {
                boxShadow: `5px 0 4px -4px ${theme.palette.grey[300]}, -5px 0 4px -4px ${theme.palette.grey[300]}`
              })
            }}
          >
            <iframe
              ref={iframeEl}
              id={randomId}
              srcDoc={Loader()}
              onLoad={(event) => {
                event.currentTarget.removeAttribute('srcdoc');
              }}
              style={{
                width: '100%',
                height: defaultHeight || viewportHeight || '100%',
                border: 'none',
                ...(screenSize === 'desktop' && {
                  borderBottomLeftRadius: boxRadius * 4,
                  borderBottomRightRadius: boxRadius * 4
                })
              }}
              src={src}
              title="section-simulator"
            />
          </Stack>
        </NoSsr>
      </Stack>
    </Box>
  );
}

ScreenButton.propTypes = { icon: PropTypes.any, screen: PropTypes.string, screenSize: PropTypes.string, onScreenChange: PropTypes.func };

Simulator.propTypes = { src: PropTypes.string, defaultHeight: PropTypes.number };

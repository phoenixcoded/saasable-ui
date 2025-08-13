import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';

// @third-party
import { SnackbarProvider } from 'notistack';

// @project
import { useGetSnackbar } from '@/states/snackbar';
import Loader from '@/components/Loader';

// @types

// @assets
import { IconAlertTriangle, IconBug, IconChecks, IconInfoCircle, IconSpeakerphone } from '@tabler/icons-react';

// custom styles
const StyledSnackbarProvider = styled(SnackbarProvider)(({ theme }) => ({
  '&.notistack-MuiContent': {
    color: theme.palette.background.default
  },
  '&.notistack-MuiContent-default': {
    backgroundColor: theme.palette.primary.main
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: theme.palette.error.main
  },
  '&.notistack-MuiContent-success': {
    backgroundColor: theme.palette.success.main
  },
  '&.notistack-MuiContent-info': {
    backgroundColor: theme.palette.info.main
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: theme.palette.warning.main
  },
  '& #notistack-snackbar': {
    gap: 8
  }
}));

/***************************  SNACKBAR - ANIMATION  ***************************/

function TransitionSlideLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionSlideUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionSlideRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionSlideDown(props) {
  return <Slide {...props} direction="down" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

function ZoomTransition(props) {
  return <Zoom {...props} />;
}

const animation = {
  SlideLeft: TransitionSlideLeft,
  SlideUp: TransitionSlideUp,
  SlideRight: TransitionSlideRight,
  SlideDown: TransitionSlideDown,
  Grow: GrowTransition,
  Zoom: ZoomTransition,
  Fade
};

const iconSX = { fontSize: '1.15rem' };

/***************************  SNACKBAR - NOTISTACK  ***************************/

export default function Notistack({ children }) {
  const { snackbar } = useGetSnackbar();

  if (snackbar === undefined) return <Loader />;

  return (
    <StyledSnackbarProvider
      maxSnack={snackbar.maxStack}
      dense={snackbar.dense}
      anchorOrigin={snackbar.anchorOrigin}
      TransitionComponent={animation[snackbar.transition]}
      iconVariant={
        snackbar.iconVariant === 'useemojis'
          ? {
              default: <IconSpeakerphone style={iconSX} />,
              success: <IconChecks style={iconSX} />,
              error: <IconBug style={iconSX} />,
              warning: <IconAlertTriangle style={iconSX} />,
              info: <IconInfoCircle style={iconSX} />
            }
          : undefined
      }
      hideIconVariant={snackbar.iconVariant === 'hide' ? true : false}
    >
      {children}
    </StyledSnackbarProvider>
  );
}

Notistack.propTypes = { children: PropTypes.node };

'use client';
import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import ElevationScroll from './ElevationScroll';
import ContainerWrapper from '@/components/ContainerWrapper';

export const navbar10Height = { xs: 64, sm: 72, md: 84 };

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: navbar10Height.md,
    paddingLeft: 0,
    paddingRight: 0
  },
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    '@media all': { minHeight: navbar10Height.sm }
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': { minHeight: navbar10Height.xs },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

/***************************  NAVBAR - 10  ***************************/

/**
 *
 * Demos:
 * - [Navbar10](https://www.saasable.io/blocks/navbar/navbar10)
 *
 * API:
 * - [Navbar10 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/navbar/navbar10#props-details)
 */

export default function Navbar10({ children, isFixed = true, ...props }) {
  return (
    <>
      <ElevationScroll isFixed={isFixed} {...props}>
        <AppBar {...(!isFixed && { position: 'static', elevation: 0 })} component="nav" color="inherit" sx={{ background: 'transparent' }}>
          <StyledToolbar>
            <ContainerWrapper>{children}</ContainerWrapper>
          </StyledToolbar>
        </AppBar>
      </ElevationScroll>
      {isFixed && <StyledToolbar />}
    </>
  );
}

Navbar10.propTypes = { children: PropTypes.any, isFixed: PropTypes.bool, props: PropTypes.any };

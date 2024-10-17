'use client';
import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 84,
    paddingLeft: 0,
    paddingRight: 0
  },
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 72
    }
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

/***************************  NAVBAR - 10  ***************************/

export default function Navbar10({ children }) {
  return (
    <ContainerWrapper>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>{children}</StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}

Navbar10.propTypes = { children: PropTypes.any };

'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';

// @project
import { Footer7 } from '@/blocks/footer';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';

import useScrollPosition from '@/hooks/useScrollPosition';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import { navbar } from './data';

// @types

/***************************  LAYOUT - MAIN  ***************************/

export default function MainLayout({ children }) {
  useDataThemeMode();
  useScrollPosition();

  return (
    <>
      {/* header section */}
      <Box sx={{ bgcolor: 'grey.100' }}>
        <Navbar10>
          <NavbarContent10 {...navbar} />
        </Navbar10>
      </Box>
      {/* app/(landing)/* */}
      {children}
      {/* footer section */}
      <Footer7 />
    </>
  );
}

MainLayout.propTypes = { children: PropTypes.any };

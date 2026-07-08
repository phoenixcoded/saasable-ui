'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// @project
import { Footer7 } from '@/blocks/footer';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import SSOTokenHandler from '@/components/SSOTokenHandler';
import ThemeProviders from '@/components/ThemeProvider';
import { withAlpha } from '@/utils/colorUtils';

// @data
import { navbar } from './data';

const headerColor = { bgcolor: 'transparent' };

/***************************  LAYOUT - HEADER  ***************************/

function Header({ children }) {
  const theme = useTheme();

  return (
    <Navbar10
      triggerSX={{
        bgcolor: withAlpha(theme.vars.palette.common.white, 0.5),
        backdropFilter: 'blur(8px)'
      }}
    >
      <>{children}</>
    </Navbar10>
  );
}

/***************************  LAYOUT - MAIN  ***************************/

export default function MainLayout({ children }) {
  return (
    <ThemeProviders>
      <SSOTokenHandler>
        {/* header section */}
        <Box sx={{ ...headerColor, position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
          <Header>
            <NavbarContent10 {...navbar} />
          </Header>
        </Box>

        {/* app/(landing)/* */}
        <main>{children}</main>

        {/* footer section */}
        <Footer7 />
      </SSOTokenHandler>
    </ThemeProviders>
  );
}

Header.propTypes = { children: PropTypes.any };

MainLayout.propTypes = { children: PropTypes.any };

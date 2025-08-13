'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'motion/react';

// @project
import { navbar10Height } from '../Navbar10';
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { MenuPopper, NavMenu, NavMenuDrawer, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';

/***************************  NAVBAR - CONTENT 10  ***************************/

/**
 *
 * Demos:
 * - [NavbarContent10](https://www.saasable.io/blocks/navbar/navbar10)
 *
 * API:
 * - [NavbarContent10 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/navbar/navbar-content/navbarcontent10#props-details)
 */

export default function NavbarContent10({ landingBaseUrl, navItems, primaryBtn, secondaryBtn, customization, selectedTheme, animated }) {
  const theme = useTheme();

  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
      <Logo to={landingBaseUrl} />
      {!downMD && navItems && (
        <Box sx={{ bgcolor: 'grey.200', borderRadius: 10 }}>
          <NavMenu {...{ navItems }} />
        </Box>
      )}
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 } }}>
        {!downSM && (
          <>
            <NavSecondaryButton {...secondaryBtn} />
            <ButtonAnimationWrapper>
              {animated ? (
                <motion.div
                  initial={{ borderRadius: '50px' }}
                  animate={{
                    boxShadow: [
                      `0px 0px 0px 0px ${alpha(theme.palette.primary.main, 0.7)}`,
                      `0px 0px 0px 8px ${alpha(theme.palette.primary.main, 0)}`,
                      `0px 0px 0px 0px ${alpha(theme.palette.primary.main, 0)}`
                    ],
                    borderRadius: '50px'
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                >
                  <NavPrimaryButton {...primaryBtn} />
                </motion.div>
              ) : (
                <NavPrimaryButton {...primaryBtn} />
              )}
            </ButtonAnimationWrapper>
          </>
        )}
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 16}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0 }
              }}
            >
              <ContainerWrapper
                sx={{
                  height: 'auto',
                  maxHeight: { xs: `calc(100vh - ${navbar10Height.xs}px)`, sm: `calc(100vh - ${navbar10Height.sm}px)` },
                  overflowY: 'auto'
                }}
              >
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems }} />
                  </Box>
                )}
                {downSM && (
                  <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1, px: 2, py: 2.5, mx: -2, bgcolor: 'grey.100' }}>
                    <NavSecondaryButton {...secondaryBtn} />
                    <ButtonAnimationWrapper>
                      <NavPrimaryButton {...primaryBtn} />
                    </ButtonAnimationWrapper>
                  </Stack>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

NavbarContent10.propTypes = {
  landingBaseUrl: PropTypes.any,
  navItems: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any,
  selectedTheme: PropTypes.any,
  animated: PropTypes.any
};

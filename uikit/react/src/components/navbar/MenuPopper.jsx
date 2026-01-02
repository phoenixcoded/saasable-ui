'use client';
import PropTypes from 'prop-types';

import { useEffect, useRef, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';

// @project
import SvgIcon from '@/components/SvgIcon';
import { withAlpha } from '@/utils/colorUtils';

/***************************  MENU - POPPER  ***************************/

export default function MenuPopper({
  toggleProps,
  defaultOpen = false,
  children,
  border = true,
  popperWidth = 368,
  offset = 0,
  offsetX = 0,
  menuTextColor,
  hoverToggler = false
}) {
  const theme = useTheme();

  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  useEffect(() => {
    if (defaultOpen) {
      setAnchorEl(anchorRef.current);
    }
  }, [defaultOpen]);

  const open = Boolean(anchorEl);
  const id = open ? 'menu-popper' : undefined;

  return (
    <>
      <Button
        ref={anchorRef}
        aria-describedby={id}
        onClick={handleClick}
        size="small"
        {...toggleProps}
        sx={{ ...toggleProps.sx, ...(toggleProps.endIcon && { pr: 4 }), ...(open && { color: 'primary.main', fontWeight: 600 }) }}
        {...(toggleProps.endIcon && {
          position: 'relative',
          endIcon: (
            <Box
              sx={{
                position: 'absolute',
                top: '56%',
                transform: 'translateY(-70%)',
                transition: `transform 0.15s`,
                ...(open && { transform: 'translateY(-74%) rotate(-180deg)' })
              }}
            >
              {typeof toggleProps.endIcon === 'boolean' ? (
                <SvgIcon
                  name="tabler-chevron-down"
                  size={16}
                  color={open ? 'primary.main' : menuTextColor || 'text.primary'}
                  stroke={2.5}
                />
              ) : (
                toggleProps.endIcon
              )}
            </Box>
          )
        })}
        {...(hoverToggler && { onMouseEnter: () => setAnchorEl(anchorRef.current) })}
      />
      <Popper
        placement="bottom"
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        sx={{ width: { xs: 1, md: 'auto' }, zIndex: 1201 }}
        popperOptions={{ modifiers: [{ name: 'offset', options: { offset: [offsetX, offset] } }] }}
        {...(hoverToggler && { onMouseLeave: () => setAnchorEl(null) })}
      >
        {({ TransitionProps }) => (
          <Fade in={open} {...TransitionProps}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: `0px 16px 10px 0px ${withAlpha(theme.vars.palette.grey[900], 0.06)}`,
                width: { xs: 1, md: popperWidth },
                ...(border && {
                  border: '1px solid',
                  borderColor: theme.vars.palette.grey[200]
                }),
                [theme.breakpoints.down('md')]: {
                  borderTop: 'none',
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                }
              }}
            >
              <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                <Box>{children}</Box>
              </ClickAwayListener>
            </Card>
          </Fade>
        )}
      </Popper>
    </>
  );
}

MenuPopper.propTypes = {
  toggleProps: PropTypes.any,
  defaultOpen: PropTypes.bool,
  children: PropTypes.node,
  border: PropTypes.bool,
  popperWidth: PropTypes.number,
  offset: PropTypes.number,
  offsetX: PropTypes.number,
  menuTextColor: PropTypes.string,
  hoverToggler: PropTypes.bool
};

import PropTypes from 'prop-types';
import { useState } from 'react';

// @next
import { usePathname } from 'next/navigation';

// @mui
import { useTheme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import NavItem from './NavItem';
import DynamicIcon from '@/components/DynamicIcon';
import MainCard from '@/components/MainCard';
import SimpleBar from '@/components/third-party/SimpleBar';
import useMenuCollapse from '@/hooks/useMenuCollapse';

// @assets
import { IconChevronRight } from '@tabler/icons-react';

/***************************  POPPER - ARROW  ***************************/

const popperArrowStyles = (theme) => ({
  content: '""',
  display: 'block',
  position: 'absolute',
  top: 20,
  left: -6,
  width: 10,
  height: 10,
  bgcolor: 'background.paper',
  transform: 'translateY(-50%) rotate(45deg)',
  zIndex: 120,
  boxShadow: theme.customShadows.tooltip
});

/***************************  COLLAPSE - LOOP  ***************************/

function NavCollapseLoop({ item }) {
  return item.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return <NavCollapse key={item.id} item={item} level={1} />;
      case 'item':
        return (
          <Box key={item.id} sx={{ px: 0.75 }}>
            <NavItem item={item} level={1} />
          </Box>
        );
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Collapse or Item
          </Typography>
        );
    }
  });
}

/***************************  MINI DRAWER - COLLAPSE  ***************************/

export default function NavCollapse({ item, level = 0 }) {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  // Popper open state
  const [anchorEl, setAnchorEl] = useState(null);
  const miniMenuOpened = Boolean(anchorEl);

  const handleClick = (event) => {
    if (level > 0) setOpen(!open);

    setAnchorEl(null);
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    if (!miniMenuOpened && !item.url) {
      setSelected(null);
    }
    setAnchorEl(null);
  };

  // Active item collapse on page load with sub-levels
  const pathname = usePathname();

  useMenuCollapse(item, pathname, true, setSelected, setOpen, setAnchorEl);

  const isSelected = (level > 0 && open) || miniMenuOpened || selected === item.id;

  // level === 0 - list item button avatar style
  const listItemAvatarStyle = {
    my: 0.5,
    '&:hover, &:focus': { bgcolor: 'transparent', '& .MuiListItemAvatar-root': { bgcolor: 'action.hover' } },
    '&.Mui-selected': {
      bgcolor: 'transparent',
      '& .MuiListItemAvatar-root': { bgcolor: 'primary.lighter' },
      '&:hover, &:focus': { bgcolor: 'transparent', '& .MuiListItemAvatar-root': { bgcolor: 'primary.light' } },
      '&.Mui-focusVisible': { bgcolor: 'transparent', '& .MuiListItemAvatar-root': { bgcolor: 'primary.light' } }
    }
  };

  // level > 0 - popup list item text style
  const listItemStyle = {
    color: 'text.primary',
    '&:hover, &:focus': { bgcolor: 'transparent', '& .MuiListItem-root': { bgcolor: 'action.hover' } },
    '&.Mui-selected': {
      color: 'text.primary',
      bgcolor: 'transparent',
      '& .MuiListItem-root': {
        bgcolor: 'primary.lighter'
      },
      '&:hover, &:focus': { bgcolor: 'transparent', '& .MuiListItem-root': { bgcolor: 'primary.light' } }
    }
  };

  const iconcolor = theme.palette.text.primary;

  return (
    <>
      <ListItemButton
        id={`${item.id}-btn`}
        selected={isSelected}
        disableRipple
        sx={{
          p: 0,
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'default',
          ...(level === 0 ? listItemAvatarStyle : listItemStyle)
        }}
        onClick={handleClick}
        onMouseEnter={handleClick}
        onMouseLeave={handleClose}
      >
        {level === 0 && (
          <ButtonBase tabIndex={-1} sx={{ borderRadius: 2 }} aria-label="list-button">
            <ListItemAvatar
              sx={{
                minWidth: 32,
                width: 44,
                height: 44,
                borderRadius: 2,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>
                <DynamicIcon name={item.icon} size={22} stroke={1.5} color={iconcolor} />
              </ListItemIcon>
            </ListItemAvatar>
          </ButtonBase>
        )}
        {level > 0 && (
          <ListItem tabIndex={-1} sx={{ borderRadius: 1, px: 1, width: 'calc(100% - 12px)' }}>
            <ListItemText primary={item.title} />
            <IconChevronRight size={18} stroke={1.5} />
          </ListItem>
        )}
        <Popper
          open={miniMenuOpened}
          anchorEl={anchorEl}
          placement="right-start"
          sx={{
            zIndex: 1202,
            minWidth: 220,
            '& > .MuiPaper-root': {
              position: 'relative',
              '&:before': { ...popperArrowStyles(theme) }
            },
            '&[data-popper-placement="right-end"]': {
              '& > .MuiPaper-root': {
                marginBottom: level > 0 ? -3 : -1.5,
                '&:before': {
                  top: 'unset',
                  bottom: 14
                }
              }
            }
          }}
          popperOptions={{ modifiers: [{ name: 'offset', options: { offset: [level > 0 ? -16 : -10, 0] } }] }}
        >
          {({ TransitionProps }) => (
            <Grow in={miniMenuOpened} {...TransitionProps} timeout={{ appear: 0, enter: 150, exit: 150 }}>
              <MainCard
                sx={{
                  p: 0,
                  mt: 1.5,
                  py: 0.75,
                  boxShadow: theme.customShadows.tooltip,
                  backgroundImage: 'none',
                  transformOrigin: '0 0 0',
                  overflow: 'visible',
                  borderRadius: 2
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <Box>
                    <SimpleBar sx={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: '50vh' }}>
                      <NavCollapseLoop item={item} />
                    </SimpleBar>
                  </Box>
                </ClickAwayListener>
              </MainCard>
            </Grow>
          )}
        </Popper>
      </ListItemButton>
    </>
  );
}

NavCollapseLoop.propTypes = { item: PropTypes.any };

NavCollapse.propTypes = { item: PropTypes.any, level: PropTypes.number };

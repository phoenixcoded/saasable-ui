import PropTypes from 'prop-types';
import { useEffect } from 'react';

// @next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// @mui
import { useTheme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// @project
import { handlerActiveItem, useGetMenuMaster } from '@/states/menu';
import DynamicIcon from '@/components/DynamicIcon';

/***************************  MINI DRAWER - ITEM  ***************************/

export default function NavItem({ item, level = 0 }) {
  const theme = useTheme();
  const { menuMaster } = useGetMenuMaster();
  const openItem = menuMaster.openedItem;

  // Active menu item on page load
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === item.url) handlerActiveItem(item.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isSelected = openItem === item.id;
  const iconcolor = theme.palette.text.primary;

  // level === 0 - list item button avatar style
  const listItemAvatarStyle = {
    p: 0,
    my: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'default',
    '&:hover, &:focus': { bgcolor: 'transparent', '& .MuiListItemAvatar-root': { bgcolor: 'action.hover' } },
    '&.Mui-selected': {
      bgcolor: 'transparent',
      '& .MuiListItemAvatar-root': { bgcolor: 'primary.lighter' },
      '&:hover, &:focus': { bgcolor: 'transparent', '& .MuiListItemAvatar-root': { bgcolor: 'primary.light' } }
    }
  };

  // level > 0 - popup list item text style
  const listItemStyle = {
    color: 'text.primary',
    '&.Mui-selected': {
      color: 'primary.main',
      bgcolor: 'transparent',
      '&:hover': { bgcolor: 'action.hover' },
      '&.Mui-focusVisible': { bgcolor: 'action.focus' },
      '& .MuiTypography-root': { fontWeight: 600 }
    }
  };

  return (
    <ListItemButton
      id={`${item.id}-btn`}
      selected={isSelected}
      disabled={item.disabled}
      disableRipple={level === 0}
      {...(level > 0 && { component: Link, href: item.url, ...(item?.target && { target: '_blank' }) })}
      sx={{ ...(level === 0 ? listItemAvatarStyle : listItemStyle) }}
    >
      {level === 0 && (
        <ButtonBase
          component={Link}
          href={item.url}
          {...(item?.target && { target: '_blank' })}
          tabIndex={-1}
          sx={{ borderRadius: 2 }}
          aria-label="list-button"
        >
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
      {level > 0 && <ListItemText primary={item.title} />}
    </ListItemButton>
  );
}

NavItem.propTypes = { item: PropTypes.any, level: PropTypes.number };

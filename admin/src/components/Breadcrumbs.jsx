'use client';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

// @next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// @mui
import { useTheme } from '@mui/material/styles';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

// @project
import { APP_DEFAULT_PATH } from '@/config';
import menuItems from '@/menu';
import { generateFocusStyle } from '@/utils/generateFocusStyle';

// @assets
import { IconChevronRight } from '@tabler/icons-react';

// @types

// @data
const homeBreadcrumb = { title: 'Home', url: APP_DEFAULT_PATH };

/***************************  BREADCRUMBS  ***************************/

export default function Breadcrumbs({ data }) {
  const theme = useTheme();
  const location = usePathname();

  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    if (data?.length) {
      dataHandler(data);
    } else {
      for (const menu of menuItems?.items) {
        if (menu.type && menu.type === 'group') {
          const matchedParents = findParentElements(menu.children || [], location);
          dataHandler(matchedParents || []);
          if (matchedParents) break;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, location]);

  const dataHandler = (data) => {
    const active = data.at(-1);
    const linkItems = data.slice(0, -1);
    if (active && active.url != homeBreadcrumb.url) {
      linkItems.unshift(homeBreadcrumb);
    }
    setActiveItem(active);
    setBreadcrumbItems(linkItems);
  };

  function findParentElements(navItems, targetUrl, parents = []) {
    for (const item of navItems) {
      // Add the current item to the parents array
      const newParents = [...parents, item];

      // Check if the current item matches the target URL
      if (item.url && targetUrl.includes(item.url)) {
        return newParents; // Return the array of parent elements
      }

      // If the item has children, recurse into them
      if (item.children) {
        const result = findParentElements(item.children, targetUrl, newParents);
        if (result) {
          return result; // Return the result if found in children
        }
      }
    }

    return null; // Return null if no match is found
  }

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" separator={<IconChevronRight size={16} />}>
      {breadcrumbItems.length &&
        breadcrumbItems.map((item, index) => (
          <Typography
            {...(item.url && { component: Link, href: item.url })}
            variant="body2"
            sx={{
              p: 0.5,
              color: 'grey.700',
              textDecoration: 'none',
              ...(item.url && { cursor: 'pointer', ':hover': { color: 'primary.main' } }),
              ':focus-visible': { outline: 'none', borderRadius: 0.25, ...generateFocusStyle(theme.palette.primary.main) }
            }}
            key={index}
          >
            {item.title}
          </Typography>
        ))}
      {activeItem && (
        <Typography variant="body2" sx={{ p: 0.5 }}>
          {activeItem.title}
        </Typography>
      )}
    </MuiBreadcrumbs>
  );
}

Breadcrumbs.propTypes = { data: PropTypes.array };

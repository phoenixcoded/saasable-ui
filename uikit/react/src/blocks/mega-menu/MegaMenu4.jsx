'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'motion/react';

// @project
import PreviewCard from '@/components/cards/PreviewCard';

/***************************  MEGA MENU - 4  ***************************/

/**
 *
 * Demos:
 * - [MegaMenu4](https://www.saasable.io/blocks/megamenu/megamenu4)
 *
 * API
 * - [MegaMenu4 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/megamenu/megamenu4#props-details)
 */

export default function MegaMenu4({ menuItems, footerData, popperWidth = 936, footerSX }) {
  return (
    <Box sx={{ maxWidth: { xs: 1, md: popperWidth } }}>
      <Grid container spacing={1} sx={{ p: 1, bgcolor: 'background.paper' }}>
        {menuItems.map((item, index) => (
          <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link {...(item.link && { component: NextLink, ...item.link, sx: { ...item.link?.sx } })} aria-label={item.title}>
                <PreviewCard {...item} />
              </Link>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      {footerData && <Box sx={{ p: 2.5, bgcolor: 'grey.100', ...footerSX }}>{footerData}</Box>}
    </Box>
  );
}

MegaMenu4.propTypes = { menuItems: PropTypes.array, footerData: PropTypes.node, popperWidth: PropTypes.number, footerSX: PropTypes.any };

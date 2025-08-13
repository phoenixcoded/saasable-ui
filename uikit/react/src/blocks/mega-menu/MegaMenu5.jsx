'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'motion/react';

// @project
import SvgIcon from '@/components/SvgIcon';

/***************************  MEGA MENU - 5  ***************************/

/**
 *
 * Demos:
 * - [MegaMenu5](https://www.saasable.io/blocks/megamenu/megamenu5)
 *
 * API
 * - [MegaMenu5 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/megamenu/megamenu5#props-details)
 */

export default function MegaMenu5({ menuItems, bannerData, popperWidth = 750 }) {
  const theme = useTheme();
  let gridItem = menuItems.length === 1 ? 12 : 6;

  return (
    <Grid container>
      {bannerData && (
        <Grid sx={{ py: 1, pl: { xs: 2, md: 1 }, pr: { xs: 2, sm: 1 } }} size={{ xs: 12, sm: 4.5 }}>
          <Box sx={{ p: 2.5, bgcolor: 'grey.100', height: 1, borderRadius: 2 }}>{bannerData}</Box>
        </Grid>
      )}
      <Grid size={{ xs: 12, sm: bannerData ? 7.5 : 12 }} sx={{ px: 1 }}>
        <Grid container spacing={1}>
          {menuItems.map((items, index) => (
            <Grid key={index} size={{ xs: 12, sm: menuItems.length > 2 ? 4 : gridItem }}>
              <List
                component="nav"
                sx={{ p: 1, width: '100%', maxWidth: { xs: 1, md: popperWidth }, display: 'flex', flexDirection: 'column' }}
                {...(items.title && {
                  subheader: (
                    <ListSubheader component="div" sx={{ typography: 'subtitle1', p: 1, color: 'text.primary', bgcolor: 'transparent' }}>
                      {items.title}
                    </ListSubheader>
                  )
                })}
              >
                {items?.itemsList &&
                  items?.itemsList.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                    >
                      {/* @ts-ignore */}
                      <ListItemButton
                        key={index}
                        {...(item && item?.link && item?.link !== undefined && { ...item.link })}
                        sx={{
                          py: 0.5,
                          px: 1.25,
                          my: 0.25,
                          borderRadius: 2,
                          '&:hover': { bgcolor: 'grey.50' },
                          '&:focus-visible': { bgcolor: 'grey.200' }
                        }}
                        TouchRippleProps={{
                          style: {
                            color: alpha(theme.palette.primary.main, 0.3)
                          }
                        }}
                      >
                        <ListItemText
                          primary={item.title}
                          secondary={item.content}
                          slotProps={{
                            primary: {
                              variant: 'body1',
                              sx: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', mr: 0.5, color: 'text.primary' }
                            }
                          }}
                        />
                        {item && item?.link && item?.link !== undefined && item?.link?.target === '_blank' ? (
                          <SvgIcon name="tabler-arrow-up-right" size={16} stroke={2} color={theme.palette.grey[800]} />
                        ) : (
                          <Chip
                            label={
                              <Typography variant="caption" sx={{ color: 'primary.main' }}>
                                {item.status}
                              </Typography>
                            }
                            size="small"
                            sx={{
                              bgcolor: 'primary.lighter',
                              '& .MuiChip-label': { px: 1, py: 0.25, minWidth: 20 }
                            }}
                          />
                        )}
                      </ListItemButton>
                    </motion.div>
                  ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

MegaMenu5.propTypes = { menuItems: PropTypes.array, bannerData: PropTypes.node, popperWidth: PropTypes.number };

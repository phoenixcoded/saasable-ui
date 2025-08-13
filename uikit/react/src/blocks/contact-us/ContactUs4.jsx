'use client';
import PropTypes from 'prop-types';

// @mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import { ContactUsForm2 } from '@/components/contact-us';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  CONTACT US - CARD  ***************************/

function ContactCard({ icon, title, content, link }) {
  return (
    <GraphicsCard sx={{ height: 1 }}>
      <Stack direction={{ xs: 'row', sm: 'column' }} sx={{ gap: { xs: 2, sm: 4, md: 5 }, height: 1, p: { xs: 2, sm: 3, md: 4 } }}>
        <Avatar sx={{ width: 60, height: 60, bgcolor: 'grey.300' }}>
          <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
        </Avatar>
        <Stack sx={{ gap: { xs: 2, md: 3 }, height: 1, alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Typeset
            {...{
              heading: title,
              caption: content,
              stackProps: { sx: { gap: 1 } },
              headingProps: { variant: 'h4' },
              captionProps: { variant: 'body1' }
            }}
          />
          {link && (
            <ButtonAnimationWrapper>
              <Button color="primary" variant="outlined" {...link} />
            </ButtonAnimationWrapper>
          )}
        </Stack>
      </Stack>
    </GraphicsCard>
  );
}

/***************************  CONTACT US - 4  ***************************/

/**
 *
 * Demos:
 * - [ContactUs4](https://www.saasable.io/blocks/contact-us/contact-us4)
 *
 * API:
 * - [ContactUs4 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/contact-us/contactus4#props-details)
 */

export default function ContactUs4({ heading, caption, list, showForm = true }) {
  const sectionPadding = { xs: 2, sm: 3, md: 5 };
  const cardRadius = { xs: 6, sm: 8 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Grid container spacing={1.5}>
          {showForm && (
            <Grid size={12}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.4
                }}
                style={{ height: '100%' }}
              >
                <GraphicsCard sx={{ height: 1, borderRadius: cardRadius }}>
                  <GraphicsCard sx={{ bgcolor: 'grey.200', borderRadius: cardRadius }}>
                    <Box sx={{ p: { xs: 2, sm: 4, md: 5 } }}>
                      {heading && (
                        <Typeset
                          {...{
                            heading,
                            caption,
                            stackProps: { sx: { alignItems: 'center', textAlign: 'center' } },
                            headingProps: { sx: { maxWidth: { xs: '85%', sm: '80%' } } },
                            captionProps: { sx: { maxWidth: { sm: '60%' } } }
                          }}
                        />
                      )}
                    </Box>
                  </GraphicsCard>
                  <Box sx={{ p: sectionPadding, px: { md: 24 } }}>
                    <ContactUsForm2 />
                  </Box>
                </GraphicsCard>
              </motion.div>
            </Grid>
          )}
          {list?.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: item.animationDelay
                }}
                style={{ height: '100%' }}
              >
                <ContactCard {...{ ...item }} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

ContactCard.propTypes = { icon: PropTypes.any, title: PropTypes.any, content: PropTypes.any, link: PropTypes.any };

ContactUs4.propTypes = { heading: PropTypes.any, caption: PropTypes.any, list: PropTypes.any, showForm: PropTypes.bool };

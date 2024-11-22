'use client';
import { useEffect, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SectionHero from '@/components/SectionHero';
import SvgIcon from '@/components/SvgIcon';

import useFocusWithin from '@/hooks/useFocusWithin';
import { PAGE_PATH } from '@/path';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import GetImagePath from '@/utils/GetImagePath';

// @assets
import Background from '@/images/graphics/Background';
import Wave from '@/images/graphics/Wave';

var SectionCategory;

(function (SectionCategory) {
  SectionCategory['ESSENTIAL'] = 'essential';
  SectionCategory['MARKETING'] = 'marketing';
  SectionCategory['FEATURE'] = 'feature';
})(SectionCategory || (SectionCategory = {}));

const imagePrefix = '/assets/images/presentation';

/***************************  SECTIONS - DATA  ***************************/

const sections = [
  {
    title: 'Nav Bar',
    subTitle: '10 Different Variants',
    image: `${imagePrefix}/navbar-light.svg`,
    link: PAGE_PATH.navbar,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Hero',
    subTitle: '17 Different Variants',
    image: `${imagePrefix}/hero-light.svg`,
    link: PAGE_PATH.hero,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Clientele',
    subTitle: '7 Different Variants',
    image: `${imagePrefix}/clientele-light.svg`,
    link: PAGE_PATH.clientele,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Benefits',
    subTitle: '9 Different Variants',
    image: `${imagePrefix}/benefits-light.svg`,
    link: PAGE_PATH.benefit,
    category: SectionCategory.FEATURE
  },
  {
    title: 'Feature',
    subTitle: '23 Different Variants',
    image: `${imagePrefix}/feature-light.svg`,
    link: PAGE_PATH.feature,
    category: SectionCategory.FEATURE
  },
  {
    title: 'Process',
    subTitle: '7 Different Variants',
    image: `${imagePrefix}/process-light.svg`,
    link: PAGE_PATH.process,
    category: SectionCategory.FEATURE
  },
  {
    title: 'Integration',
    subTitle: '8 Different Variants',
    image: `${imagePrefix}/integration-light.svg`,
    link: PAGE_PATH.integration,
    category: SectionCategory.FEATURE
  },
  {
    title: 'Testimonial',
    subTitle: '11 Different Variants',
    image: `${imagePrefix}/testimonial-light.svg`,
    link: PAGE_PATH.testimonial,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Call-To-Action',
    subTitle: '12 Different Variants',
    image: `${imagePrefix}/cta-light.svg`,
    link: PAGE_PATH.cta,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Blog',
    subTitle: '6 Different Variants',
    image: `${imagePrefix}/blog-light.svg`,
    link: PAGE_PATH.blog,
    category: SectionCategory.MARKETING
  },
  {
    title: 'FAQs',
    subTitle: '7 Different Variants',
    image: `${imagePrefix}/faqs-light.svg`,
    link: PAGE_PATH.faq,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Footer',
    subTitle: '7 Different Variants',
    image: `${imagePrefix}/footer-light.svg`,
    link: PAGE_PATH.footer,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Team',
    subTitle: '8 Different Variants',
    image: `${imagePrefix}/team-light.svg`,
    link: PAGE_PATH.team,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Contact Us',
    subTitle: '6 Different Variants',
    image: `${imagePrefix}/contact-us-light.svg`,
    link: PAGE_PATH.contactUs,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Gallery',
    subTitle: '4 Different Variants',
    image: `${imagePrefix}/gallery-light.svg`,
    link: PAGE_PATH.gallery,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Login',
    subTitle: '5 Different Variants',
    image: `${imagePrefix}/sign-in-light.svg`,
    link: PAGE_PATH.login,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Register',
    subTitle: '1 Variants',
    image: `${imagePrefix}/sign-up-light.svg`,
    link: PAGE_PATH.register,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Pricing',
    subTitle: '9 Different Variants',
    image: `${imagePrefix}/pricing-light.svg`,
    link: PAGE_PATH.pricing,
    category: SectionCategory.FEATURE
  },
  {
    title: 'Small Hero',
    subTitle: '7 Different Variants',
    image: `${imagePrefix}/small-hero-light.svg`,
    link: PAGE_PATH.smallHero,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Cookies',
    subTitle: '3 Different Variants',
    image: `${imagePrefix}/cookies-light.svg`,
    link: PAGE_PATH.cookie,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Top-Offer',
    subTitle: '5 Different Variants',
    image: `${imagePrefix}/top-offer-bar-light.svg`,
    link: PAGE_PATH.topOffer,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Mega Menu',
    subTitle: '4 Different Variants',
    image: `${imagePrefix}/mega-menu-light.svg`,
    link: PAGE_PATH.megaMenu,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'About',
    subTitle: '3 Different Variants',
    image: `${imagePrefix}/content-light.svg`,
    link: PAGE_PATH.about,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Forgot Password',
    subTitle: '1 Variants',
    image: `${imagePrefix}/forgot-pass-light.svg`,
    link: PAGE_PATH.forgotPassword,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Create New Password',
    subTitle: '1 Variants',
    image: `${imagePrefix}/new-pass-light.svg`,
    link: PAGE_PATH.newPassword,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'OTP Verification',
    subTitle: '1 Variants',
    image: `${imagePrefix}/otp-gen-light.svg`,
    link: PAGE_PATH.otpVerification,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: '404 Error',
    subTitle: '1 Variant',
    image: `${imagePrefix}/404-light.svg`,
    link: PAGE_PATH.error404,
    category: SectionCategory.ESSENTIAL
  },

  {
    title: '500 Error',
    subTitle: '1 Variant',
    image: `${imagePrefix}/500-light.svg`,
    link: PAGE_PATH.error500,
    category: SectionCategory.ESSENTIAL
  },

  {
    title: 'Under Maintenance',
    subTitle: '1 Variant',
    image: `${imagePrefix}/maintenance-light.svg`,
    link: PAGE_PATH.underMaintenance,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Coming Soon',
    subTitle: '1 Variant',
    image: `${imagePrefix}/coming-soon-light.svg`,
    link: PAGE_PATH.comingSoon,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Early Access',
    subTitle: '1 Variant',
    image: `${imagePrefix}/early-access-light.svg`,
    link: PAGE_PATH.earlyAccess,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Onboard',
    subTitle: '1 Variant',
    image: `${imagePrefix}/onboard-light.svg`,
    link: PAGE_PATH.onboard,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Other',
    subTitle: '3 Different Variants',
    image: `${imagePrefix}/other-light.svg`,
    link: PAGE_PATH.other,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Privacy Policy',
    subTitle: '1 Variant',
    image: `${imagePrefix}/privacy-policy-light.svg`,
    link: PAGE_PATH.privacyPolicy,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Terms Conditions',
    subTitle: '1 Variant',
    image: `${imagePrefix}/privacy-policy-light.svg`,
    link: PAGE_PATH.termsCondition,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Typography',
    subTitle: '1 Variant',
    image: `${imagePrefix}/typography-light.svg`,
    link: PAGE_PATH.typography,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Color',
    subTitle: '1 Variant',
    image: `${imagePrefix}/color-light.svg`,
    link: PAGE_PATH.color,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Icons',
    subTitle: '1 Variant',
    image: `${imagePrefix}/icon-light.svg`,
    link: PAGE_PATH.icon,
    category: SectionCategory.ESSENTIAL
  }
];

const filterList = [
  { title: 'All Section', value: '' },
  { title: 'Marketing', value: SectionCategory.MARKETING },
  { title: 'Feature', value: SectionCategory.FEATURE },
  { title: 'Essential', value: SectionCategory.ESSENTIAL }
];

/***************************  SECTIONS LAYOUT  ***************************/

export default function Sections() {
  const theme = useTheme();
  const [filterBy, setFilterBy] = useState('');
  const [filterSections, setFilterSections] = useState(sections);

  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (event) => {
    const search = event.target.value.trim().toLowerCase();
    setSearchValue(search);
  };

  useEffect(() => {
    const newData = sections.filter((value) => {
      if (searchValue) {
        return value.title.toLowerCase().includes(searchValue.toLowerCase());
      } else {
        return value;
      }
    });
    setFilterSections(newData);
  }, [searchValue]);

  const isFocusWithin = useFocusWithin();

  return (
    <>
      <SectionHero heading="Craft Stunning Design with SaasAble Blocks" search={false} offer />
      <ContainerWrapper>
        <Stack sx={{ py: 6, gap: { xs: 3, sm: 4, md: 5 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{ alignItems: 'center', justifyContent: 'space-between', gap: { xs: 2.5, md: 1.5 } }}
          >
            <OutlinedInput
              placeholder="Search for blocks... (e.g., Hero, Testimonial, Pricing)"
              slotProps={{ input: { 'aria-label': 'Search blocks' } }}
              sx={{ '.MuiOutlinedInput-input': { pl: 1.5 }, width: { sm: 456, xs: 1 } }}
              startAdornment={<SvgIcon name="tabler-search" color="grey.700" />}
              onChange={handleSearchValue}
            />
            <Stack direction="row" sx={{ gap: 1.5, flexWrap: 'wrap' }}>
              {filterList.map((item, index) => (
                <Button
                  key={index}
                  variant={filterBy === item.value ? 'contained' : 'outlined'}
                  size="small"
                  sx={{
                    ...theme.typography.subtitle2,
                    whiteSpace: 'nowrap',
                    [theme.breakpoints.down('sm')]: { px: 1.5, py: 1 }
                  }}
                  onClick={() => {
                    setFilterBy(item.value);
                    setFilterSections(item.value === '' ? sections : sections.filter((section) => section.category === item.value));
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Stack>
          </Stack>
          <Grid container spacing={1.5}>
            {filterSections.map((item, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 4 }}>
                <GraphicsCard sx={{ overflow: 'hidden', WebkitTapHighlightColor: 'transparent' }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5
                    }}
                  >
                    <GraphicsCard
                      sx={{
                        height: { xs: 240, sm: 324, md: 380 },
                        position: 'relative',
                        overflow: 'hidden',
                        ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
                      }}
                    >
                      <Link
                        href={item.link}
                        component={NextLink}
                        aria-label={item.title}
                        sx={{ position: 'absolute', top: 0, height: 1, width: 1, borderRadius: { xs: 6, sm: 8, md: 10 }, zIndex: 1 }}
                      />
                      <Background />
                      <Box sx={{ position: 'absolute', top: 0, width: 1, height: 1, textAlign: 'center' }}>
                        <CardMedia
                          component="img"
                          image={GetImagePath(item.image)}
                          sx={{ px: '14.5%', pt: '16%', pb: { xs: 2, md: 1 }, objectFit: 'contain' }}
                          alt="other sections"
                          loading="lazy"
                        />
                        <Box sx={{ '& div': { alignItems: 'center', pt: 0.875 } }}>
                          <Wave />
                        </Box>
                      </Box>
                      <Stack
                        sx={{
                          height: 177,
                          bottom: 0,
                          width: 1,
                          position: 'absolute',
                          justifyContent: 'end',
                          textAlign: 'center',
                          gap: { xs: 0.25, md: 0.5, sm: 1 },
                          p: 3,
                          background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} 0%, ${theme.palette.grey[100]} 100%)`
                        }}
                      >
                        <Typography variant="h4" sx={{ color: 'primary.main' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.subTitle}
                        </Typography>
                      </Stack>
                    </GraphicsCard>
                  </motion.div>
                </GraphicsCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </ContainerWrapper>
    </>
  );
}

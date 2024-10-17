'use client';

// @next
import NextLink from 'next/link';

// @mui
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import SvgIcon from '@/components/SvgIcon';

import { CopyrightType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  FOOTER - 7 DATA  ***************************/

const data = [
  {
    id: 'company',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Company',
    menu: [
      {
        label: 'Home',
        link: { href: '#' }
      },
      {
        label: 'About',
        link: { href: '#' }
      },
      {
        label: 'Contact Us',
        link: { href: '/contact', target: '_blank' }
      }
    ]
  },
  {
    id: 'support',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Support',
    menu: [
      {
        label: 'Pricing',
        link: { href: '#' }
      },
      {
        label: 'FAQ',
        link: { href: '#' }
      },
      {
        label: 'Support',
        link: { href: 'https://phoenixcoded.authordesk.app/', target: '_blank' }
      },
      {
        label: 'License Terms',
        link: { href: '#' }
      }
    ]
  },
  {
    id: 'resources',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Resources',
    menu: [
      {
        label: 'Freebies',
        link: { href: '#' }
      },
      {
        label: 'Documentation',
        link: { href: 'https://phoenixcoded.gitbook.io/saasable', target: '_blank' }
      },
      {
        label: 'Blog',
        link: { href: 'https://blog.saasable.io/', target: '_blank' }
      },
      {
        label: 'Privacy Policy',
        link: { href: '/privacy-policy', target: '_blank' }
      },
      {
        label: 'Refund Policy',
        link: { href: '#' }
      }
    ]
  }
];

/***************************  FOOTER - 7  ***************************/

export default function Footer7() {
  const iconProps = { color: 'text.secondary' };

  const contactDetails = {
    address: {
      icon: <SvgIcon name="tabler-map-pin" {...iconProps} />,
      title: 'Figma Version'
    },
    email: { icon: <SvgIcon name="tabler-route" {...iconProps} />, title: 'React Material UI Version' },
    mobile: { icon: <SvgIcon name="tabler-sparkles" {...iconProps} />, title: 'Documentation' }
  };

  const logoFollowContent = (
    <Stack sx={{ alignItems: 'flex-start', gap: { xs: 1.5, sm: 3 } }}>
      <LogoSection />
      <Typography variant="h6" sx={{ maxWidth: { sm: 280 }, mb: { xs: -1, sm: -2.5 } }}>
        {process.env.NEXT_PUBLIC_VERSION}
      </Typography>
      <Typography variant="body2" sx={{ maxWidth: { sm: 280 } }}>
        Explore the different versions of our SaasAble template.
      </Typography>
    </Stack>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <Grid container spacing={{ xs: 4, md: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction={{ sm: 'row', md: 'column' }} sx={{ gap: 3, justifyContent: 'space-between', height: 1 }}>
                {logoFollowContent}
                <Stack sx={{ gap: { xs: 2, sm: 2.5, md: 3 } }}>
                  <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                    {contactDetails.address.icon}
                    <Typography variant="body2" sx={{ color: 'text.secondary', width: '50%' }}>
                      {contactDetails.address.title}
                    </Typography>
                  </Stack>
                  <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                    {contactDetails.email.icon}
                    <Link component={NextLink} variant="body2" color="text.secondary" href={`tel:${contactDetails.email.title}`}>
                      {contactDetails.email.title}
                    </Link>
                  </Stack>
                  <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                    {contactDetails.mobile.icon}
                    <Link component={NextLink} variant="body2" color="text.secondary" href={`tel:${contactDetails.mobile.title}`}>
                      {contactDetails.mobile.title}
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Sitemap list={data} isMenuDesign />
            </Grid>
          </Grid>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <GraphicsCard sx={{ borderRadius: { xs: 6, sm: 8 } }}>
            <Stack
              direction={{ sm: 'row' }}
              sx={{
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: 'space-between' },
                gap: 1.5,
                py: { xs: 2, sm: 1.5 },
                px: { xs: 2, sm: 3 }
              }}
            >
              <Copyright type={CopyrightType.TYPE3} />
              <FollowUS heading={false} color="grey.100" />
            </Stack>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

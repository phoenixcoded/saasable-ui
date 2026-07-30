'use client';

// @next
import NextLink from 'next/link';

// @mui
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import branding from '@/branding.json';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import SvgIcon from '@/components/SvgIcon';

import { CopyrightType } from '@/enum';
import { DOCS_URL, FREEBIES_URL } from '@/path';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FOOTER - 7 DATA  ***************************/

/**
 *
 * Demos:
 * - [Footer7](https://www.saasable.io/blocks/footer/footer7)
 */

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
const data = [
  {
    id: 'resources',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Resources',
    menu: [
      {
        label: 'Freebies',
        link: { href: FREEBIES_URL, ...linkProps }
      },
      {
        label: 'Documentation',
        link: { href: DOCS_URL, ...linkProps }
      },
      {
        label: 'Blog',
        link: { href: 'https://blog.saasable.io/', ...linkProps }
      },
      {
        label: 'Refund Policy',
        link: { href: 'https://mui.com/store/customer-refund-policy/', ...linkProps }
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
        link: { href: 'https://mui.com/store/items/saasable-multipurpose-ui-kit-and-dashboard/', ...linkProps }
      },
      {
        label: 'FAQs',
        link: { href: 'https://phoenixcoded.gitbook.io/saasable/faq', ...linkProps }
      },
      {
        label: 'Support',
        link: { href: branding.company.socialLink.support, ...linkProps }
      },
      {
        label: 'License Terms',
        link: { href: 'https://mui.com/store/license/', ...linkProps }
      },
      {
        label: 'Discord',
        link: { href: branding.company.socialLink.discord, ...linkProps }
      }
    ]
  },
  {
    id: 'company',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Company',
    menu: [
      {
        label: 'Why Phoenixcoded?',
        link: {
          href: 'https://blog.saasable.io/a-decade-of-expertise-the-phoenixcoded-story-and-why-you-should-trust-us',
          ...linkProps
        }
      },
      {
        label: 'About',
        link: { href: '/about', ...linkProps }
      },
      {
        label: 'Contact Us',
        link: { href: '/contact', ...linkProps }
      }
    ]
  }
];

const iconProps = { color: 'text.secondary' };

const usefullLinks = [
  {
    icon: <SvgIcon name="tabler-brand-figma" {...iconProps} />,
    title: 'Figma Version 1.1.0',
    href: 'https://www.figma.com/community/file/1425095061180549847'
  },
  {
    icon: <SvgIcon name="tabler-route" {...iconProps} />,
    title: 'React Material UI v7',
    href: 'https://mui.com/material-ui/getting-started'
  },
  {
    icon: <SvgIcon name="tabler-sparkles" {...iconProps} />,
    title: 'Documentation',
    href: DOCS_URL
  }
];

/***************************  FOOTER - 7  ***************************/

export default function Footer7() {
  const logoFollowContent = (
    <Stack sx={{ alignItems: 'flex-start', gap: { xs: 1.5, sm: 3 } }}>
      <LogoSection />
      <Typography variant="h6" sx={{ maxWidth: { sm: 280 }, mb: { xs: -1, sm: -2.5 } }}>
        {process.env.NEXT_PUBLIC_VERSION}
      </Typography>
      <Typography variant="body2" sx={{ maxWidth: { sm: 280 } }}>
        Explore the different versions of our {branding.brandName} template.
      </Typography>
    </Stack>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
      >
        <Stack id="footer-7" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 7" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
          <Grid container spacing={{ xs: 4, md: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction={{ sm: 'row', md: 'column' }} sx={{ gap: 3, justifyContent: 'space-between', height: 1 }}>
                {logoFollowContent}
                <Stack sx={{ gap: { xs: 2, sm: 2.5, md: 3 } }}>
                  {usefullLinks.map((item, index) => (
                    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }} key={index}>
                      {item.icon}
                      <Link
                        component={NextLink}
                        variant="body2"
                        color="text.secondary"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Usefull Links"
                      >
                        {item.title}
                      </Link>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Sitemap list={data} isMenuDesign />
            </Grid>
          </Grid>
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
        </Stack>
      </motion.div>
    </ContainerWrapper>
  );
}

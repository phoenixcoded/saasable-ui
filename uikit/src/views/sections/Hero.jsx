// @mui
import Stack from '@mui/material/Stack';

// @project
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import Simulator from '@/components/Simulator';
import SimulatorTypeset from '@/components/SimulatorTypeset';
import { PRIVIEW_PATH, SECTION_PATH } from '@/path';
import { FIGMA_LINK } from '@/utils/constant';

// @types

/***************************  HERO - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'Hero' }
];

/***************************  HERO - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Default hero section 17',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero17
    },
    src: PRIVIEW_PATH.hero.hero17
  },
  {
    typeset: {
      heading: 'Default hero section 01',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero1
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 02',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero2
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 03',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero3
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 04',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero4
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 05',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero5
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 06',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero6
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 07',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero7
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 08',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero8
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 09',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero9
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 10',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero10
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 11',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero11
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 12',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero12
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 13',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero13
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 14',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero14
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 15',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero15
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default hero section 16',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.hero.variant.hero16
    },
    src: PRIVIEW_PATH.proPage
  }
];

/***************************  SECTIONS - HERO  ***************************/

export default function Hero() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Hero Section`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          {sectionsData.map((item, index) => (
            <Stack key={index} sx={{ gap: { xs: 1.5, md: 2.5 } }}>
              <SimulatorTypeset {...item.typeset} />
              <Simulator src={item.src} />
            </Stack>
          ))}
        </Stack>
      </ContainerWrapper>
    </>
  );
}

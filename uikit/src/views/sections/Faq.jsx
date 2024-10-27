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

/***************************  FAQ - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'FAQ' }
];

/***************************  FAQ - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Default faq section 06',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.faq.variant.faq6
    },
    src: PRIVIEW_PATH.faq.faq6
  },
  {
    typeset: {
      heading: 'Default faq section 01',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.faq.variant.faq1
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default faq section 02',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.faq.variant.faq2
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default faq section 03',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.faq.variant.faq3
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default faq section 04',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.faq.variant.faq4
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default faq section 05',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.faq.variant.faq5
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default faq section 07',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.faq.variant.faq7
    },
    src: PRIVIEW_PATH.proPage
  }
];

/***************************  SECTIONS - FAQ  ***************************/

export default function Faq() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} FAQ Section`, breadcrumbs }} />
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

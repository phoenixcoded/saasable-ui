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

/***************************  TESTIMONIAL - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'Testimonial' }
];

/***************************  TESTIMONIAL - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Default testimonial section 10',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial10
    },
    src: PRIVIEW_PATH.testimonial.testimonial10
  },
  {
    typeset: {
      heading: 'Default testimonial section 01',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial1
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default testimonial section 02',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial2
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default testimonial section 03',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial3
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default testimonial section 04',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial4
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default testimonial section 05',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial5
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default testimonial section 06',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial6
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default testimonial section 07',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial7
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default testimonial section 08',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial8
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default testimonial section 09',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial9
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default testimonial section 11',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial11
    },
    src: PRIVIEW_PATH.proPage
  }
];

/***************************  SECTIONS - TESTIMONIAL  ***************************/

export default function Testimonial() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Testimonial Section`, breadcrumbs }} />
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

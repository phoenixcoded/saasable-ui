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

/***************************  CALL TO ACTION - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'Call To Action' }
];

/***************************  CALL TO ACTION - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Default call to action section 04',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.cta.variant.cta4
    },
    src: PRIVIEW_PATH.cta.cta4
  },
  {
    typeset: {
      heading: 'Default call to action section 05',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.cta.variant.cta5
    },
    src: PRIVIEW_PATH.cta.cta5
  },
  {
    typeset: {
      heading: 'Default call to action section 01',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.cta.variant.cta1
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default call to action section 02',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.cta.variant.cta2
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default call to action section 03',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.cta.variant.cta3
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default call to action section 06',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.cta.variant.cta6
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default call to action section 07',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.cta.variant.cta7
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default call to action section 08',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.cta.variant.cta8
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default call to action section 09',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.cta.variant.cta9
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default call to action section 10',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.cta.variant.cta10
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default call to action section 11',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.cta.variant.cta11
    },
    src: PRIVIEW_PATH.proPage
  }
];

/***************************  SECTIONS - CALL TO ACTION  ***************************/

export default function Cta() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Call To Action Section`, breadcrumbs }} />
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

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

/***************************  FEATURE - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'Feature' }
];

/***************************  FEATURE - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Default feature section 18',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature18
    },
    src: PRIVIEW_PATH.feature.feature18
  },
  {
    typeset: {
      heading: 'Default feature section 20',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature20
    },
    src: PRIVIEW_PATH.feature.feature20
  },
  {
    typeset: {
      heading: 'Default feature section 21',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature21
    },
    src: PRIVIEW_PATH.feature.feature21
  },
  {
    typeset: {
      heading: 'Default feature section 01',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature1
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 02',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature2
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 03',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature3
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 04',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature4
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 05',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature5
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 06',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature6
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 07',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature7
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 08',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature8
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 09',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature9
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 10',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature10
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 11',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature11
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 12',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature12
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 13',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature13
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 14',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature14
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 15',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature15
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 16',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature16
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 17',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature17
    },
    src: PRIVIEW_PATH.proPage
  },

  {
    typeset: {
      heading: 'Default feature section 19',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature19
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 22',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature22
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default feature section 23',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.feature.variant.feature23
    },
    src: PRIVIEW_PATH.proPage
  }
];

/***************************  SECTIONS - FEATURE  ***************************/

export default function Feature() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Feature Section`, breadcrumbs }} />
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

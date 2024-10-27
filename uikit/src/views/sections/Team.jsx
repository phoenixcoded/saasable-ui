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

/***************************  TEAM - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'Team' }
];

/***************************  TEAM - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Default team section 01',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.team.variant.team1
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default team section 02',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.team.variant.team2
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default team section 03',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.team.variant.team3
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default team section 04',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.team.variant.team4
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default team section 05',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.team.variant.team5
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default team section 06',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.team.variant.team6
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default team section 07',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.team.variant.team7
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default team section 08',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.team.variant.team8
    },
    src: PRIVIEW_PATH.proPage
  }
];

/***************************  SECTIONS - TEAM  ***************************/

export default function Team() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Team Section`, breadcrumbs }} />
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

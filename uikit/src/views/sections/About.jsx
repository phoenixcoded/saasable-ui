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

/***************************  ABOUT - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'About' }
];

/***************************  ABOUT - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Default about section 01',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.about.variant.about1
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default about section 02',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.about.variant.about2
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Default about section 03',
      caption:
        'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
      figmaLink: FIGMA_LINK.about.variant.about3
    },
    src: PRIVIEW_PATH.proPage
  }
];

/***************************  SECTIONS - ABOUT  ***************************/

export default function About() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} About Section`, breadcrumbs }} />
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

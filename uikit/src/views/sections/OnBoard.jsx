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

/***************************  ONBOARD - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'Onboard' }
];

/***************************  ONBOARD - DATA  ***************************/

const sectionsData = {
  typeset: {
    heading: 'Default onboard section',
    caption:
      'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
    figmaLink: FIGMA_LINK.onboard.link
  },
  src: PRIVIEW_PATH.proPage
};

/***************************  SECTIONS - ONBOARD ***************************/

export default function OnBoard() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Onboard Section`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 1.5, md: 2.5 }, my: 6 }}>
          <SimulatorTypeset {...sectionsData.typeset} />
          <Simulator src={sectionsData.src} />
        </Stack>
      </ContainerWrapper>
    </>
  );
}

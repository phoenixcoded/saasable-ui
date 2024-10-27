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

/***************************  NEW PASSWORD - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'New Password' }
];

/***************************  NEW PASSWORD - DATA  ***************************/

const NewPasswordData = {
  typeset: {
    heading: 'Default new password section',
    caption:
      'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
    figmaLink: FIGMA_LINK.auth.newPassword.link
  },
  src: PRIVIEW_PATH.proPage
};

/***************************  SECTIONS - NEW PASSWORD  ***************************/

export default function NewPasswordPage() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} New Password Section`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 1.5, md: 2.5 }, my: 6 }}>
          <SimulatorTypeset {...NewPasswordData.typeset} />
          <Simulator src={NewPasswordData.src} />
        </Stack>
      </ContainerWrapper>
    </>
  );
}

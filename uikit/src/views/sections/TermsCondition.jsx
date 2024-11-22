// @mui
import Stack from '@mui/material/Stack';

// @project
import branding from '@/branding.json';
import TermsCondition from '@/blocks/TermsCondition';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import SimulatorTypeset from '@/components/SimulatorTypeset';

import { PRIVIEW_PATH, SECTION_PATH } from '@/path';
import { FIGMA_LINK } from '@/utils/constant';

// @types

/***************************  TERMS CONDITION - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Terms & Conditions' }
];

/***************************  TERMS CONDITION - DATA  ***************************/

const termsConditionData = {
  typeset: {
    heading: 'Terms & Conditions Sections',
    caption: '',
    figmaLink: FIGMA_LINK.termsCondition.link
  },
  src: PRIVIEW_PATH.termsCondition
};

/***************************  SECTIONS - TERMS CONDITION ***************************/

export default function TermsConditionPage() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Terms & Conditions Section`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 1.5, md: 2.5 }, my: 6 }}>
          <SimulatorTypeset {...termsConditionData.typeset} />
          <TermsCondition />
        </Stack>
      </ContainerWrapper>
    </>
  );
}

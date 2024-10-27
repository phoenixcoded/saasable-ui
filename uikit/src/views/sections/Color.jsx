// @mui
import Stack from '@mui/material/Stack';

// @project
import branding from '@/branding.json';
import { ProPage } from '@/blocks/pro-page';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import SimulatorTypeset from '@/components/SimulatorTypeset';
import { SECTION_PATH } from '@/path';
import { FIGMA_LINK } from '@/utils/constant';

// @types

/***************************  COLOR - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'Color' }
];

/***************************  COLOR - DATA  ***************************/

const colorData = {
  typeset: {
    heading: 'Default color section',
    caption:
      'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
    figmaLink: FIGMA_LINK.color.link
  }
};

const data = {
  image: '/assets/images/pro-page/Lock.svg'
};

/***************************  SECTIONS - COLOR  ***************************/

export default function ColorPage() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Color Section`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 1.5, md: 2.5 }, my: 6 }}>
          <SimulatorTypeset {...colorData.typeset} />
          <ProPage {...data} />
        </Stack>
      </ContainerWrapper>
    </>
  );
}

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

/***************************  BLOG DETAILS - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Blog Details' }
];

/***************************  BLOG DETAILS - DATA  ***************************/

const sectionsData = {
  typeset: {
    heading: 'Blog Details Section',
    caption: '',
    figmaLink: FIGMA_LINK.blogDetails.link
  },
  src: PRIVIEW_PATH.proPage
};

/***************************  SECTIONS - BLOG DETAILS  ***************************/

export default function BlogDetails() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Blog Details Sections`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 1.5, md: 2.5 }, my: 6 }}>
          <SimulatorTypeset {...sectionsData.typeset} />
          <Simulator src={sectionsData.src} defaultHeight={480} />
        </Stack>
      </ContainerWrapper>
    </>
  );
}

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

/***************************  ABOUT - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'About' }
];

/***************************  ABOUT - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'About Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.about.variant.about1
    },
    src: PRIVIEW_PATH.about.about1
  },
  {
    typeset: {
      heading: 'About Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.about.variant.about2
    },
    src: PRIVIEW_PATH.about.about2
  },
  {
    typeset: {
      heading: 'About Section - 03',
      caption: '',
      figmaLink: FIGMA_LINK.about.variant.about3
    },
    src: PRIVIEW_PATH.about.about3
  }
];

/***************************  SECTIONS - ABOUT  ***************************/

export default function About() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} About Sections`, breadcrumbs }} />
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

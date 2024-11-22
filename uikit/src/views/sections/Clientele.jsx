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

/***************************  CLIENTELE - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Clientele' }
];

/***************************  CLIENTELE - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Clientele Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.clientele.variant.clientele1
    },
    src: PRIVIEW_PATH.clientele.clientele3
  },
  {
    typeset: {
      heading: 'Clientele Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.clientele.variant.clientele2
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Clientele Section - 03',
      caption: '',
      figmaLink: FIGMA_LINK.clientele.variant.clientele3
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Clientele Section - 04',
      caption: '',
      figmaLink: FIGMA_LINK.clientele.variant.clientele4
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Clientele Section - 05',
      caption: '',
      figmaLink: FIGMA_LINK.clientele.variant.clientele5
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Clientele Section - 06',
      caption: '',
      figmaLink: FIGMA_LINK.clientele.variant.clientele6
    },
    src: PRIVIEW_PATH.proPage
  },
  {
    typeset: {
      heading: 'Clientele Section - 07',
      caption: '',
      figmaLink: FIGMA_LINK.clientele.variant.clientele7
    },
    src: PRIVIEW_PATH.proPage
  }
];

/***************************  SECTIONS - CLIENTELE  ***************************/

export default function Clientele() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Clientele Sections`, breadcrumbs }} />
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

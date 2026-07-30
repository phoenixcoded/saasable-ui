'use client';

// @project
import { Feature7 } from '@/blocks/feature';
import LazySection from '@/components/LazySection';
import SectionHero from '@/components/SectionHero';

// @data
import { clientele2, feature23, feature7, team, contactUS } from './data';

/***************************  PAGE - ABOUT  ***************************/

export default function About() {
  return (
    <>
      <SectionHero heading="More than a Company → A Commitment ✦" search={false} offer sxProps={{ pt: { xs: 11, sm: 14, md: 18.5 } }} />
      <Feature7 {...feature7} />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/team').then((module) => ({ default: module.Team5 })), props: team },
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature23 })), props: feature23 }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/clientele').then((module) => ({ default: module.Clientele2 })), props: clientele2 },
          {
            importFunc: () => import('@/blocks/contact-us').then((module) => ({ default: module.ContactUs4 })),
            props: { showForm: false, ...contactUS }
          }
        ]}
        offset="200px"
      />
    </>
  );
}

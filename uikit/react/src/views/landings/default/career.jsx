'use client';

// @mui
import Box from '@mui/material/Box';

// @project
import { Feature2 } from '@/blocks/feature';
import { SmallHero4 } from '@/blocks/small-hero';
import LazySection from '@/components/LazySection';

// @data
import { cta10, cta13, feature5, feature2, smallHero4 } from './data';

/***************************  PAGE - CAREER  ***************************/

export default function Career() {
  return (
    <>
      <Box sx={{ pt: { xs: 8, sm: 9, md: 10.5 } }} />
      <SmallHero4 {...smallHero4} />
      <Feature2 {...feature2} />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature5 })), props: feature5 },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta13 })), props: cta13 },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta10 })), props: cta10 }
        ]}
        offset="200px"
      />
    </>
  );
}

import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const SmallHero = dynamic(() => import('@/views/sections/SmallHero'));

/***************************  METADATA - SMALL HERO  ***************************/

export const metadata = { ...SEO_CONTENT.smallHero, openGraph: { ...SEO_CONTENT.smallHero, url: PAGE_PATH.smallHero } };

/***************************  PAGE - SMALL HERO  ***************************/

export default function SmallHeroPage() {
  return <SmallHero />;
}

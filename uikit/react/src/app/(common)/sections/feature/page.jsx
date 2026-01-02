import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Feature = dynamic(() => import('@/views/sections/Feature'));

/***************************  METADATA - FEATURE  ***************************/

export const metadata = { ...SEO_CONTENT.feature, openGraph: { ...SEO_CONTENT.feature, url: PAGE_PATH.feature } };

/***************************  PAGE - FEATURE  ***************************/

export default function FeaturePage() {
  return <Feature />;
}

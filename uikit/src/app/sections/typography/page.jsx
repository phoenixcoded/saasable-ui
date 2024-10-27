import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Typography = dynamic(() => import('@/views/sections/Typography'));

/***************************  METADATA - TYPOGRAPHY  ***************************/

export const metadata = { ...SEO_CONTENT.typography, openGraph: { ...SEO_CONTENT.typography, url: PAGE_PATH.typography } };

/***************************  PAGE - TYPOGRAPHY  ***************************/

export default function TypographyPage() {
  return <Typography />;
}

import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Color = dynamic(() => import('@/views/sections/Color'));

/***************************  METADATA - COLOR  ***************************/

export const metadata = { ...SEO_CONTENT.color, openGraph: { ...SEO_CONTENT.color, url: PAGE_PATH.color } };

/***************************  PAGE - COLOR  ***************************/

export default function ColorPage() {
  return <Color />;
}

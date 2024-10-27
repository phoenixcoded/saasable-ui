import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const About = dynamic(() => import('@/views/sections/About'));

/***************************  METADATA - ABOUT  ***************************/

export const metadata = { ...SEO_CONTENT.about, openGraph: { ...SEO_CONTENT.about, url: PAGE_PATH.about } };

/***************************  PAGE - ABOUT  ***************************/

export default function AboutPage() {
  return <About />;
}

import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const ComingSoon = dynamic(() => import('@/views/sections/ComingSoon'));

/***************************  METADATA - COMING SOON  ***************************/

export const metadata = { ...SEO_CONTENT.comingSoon, openGraph: { ...SEO_CONTENT.comingSoon, url: PAGE_PATH.comingSoon } };

/***************************  PAGE - COMING SOON  ***************************/

export default function ComingSoonPage() {
  return <ComingSoon />;
}

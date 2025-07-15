import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Clientele = dynamic(() => import('@/views/sections/Clientele'));

/***************************  METADATA - CLIENTELE  ***************************/

export const metadata = { ...SEO_CONTENT.clientele, openGraph: { ...SEO_CONTENT.clientele, url: PAGE_PATH.clientele } };

/***************************  PAGE - CLIENTELE  ***************************/

export default function ClientelePage() {
  return <Clientele />;
}

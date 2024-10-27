import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Cliental = dynamic(() => import('@/views/sections/Cliental'));

/***************************  METADATA - CLIENTAL  ***************************/

export const metadata = { ...SEO_CONTENT.cliental, openGraph: { ...SEO_CONTENT.cliental, url: PAGE_PATH.cliental } };

/***************************  PAGE - CLIENTAL  ***************************/

export default function ClientalPage() {
  return <Cliental />;
}

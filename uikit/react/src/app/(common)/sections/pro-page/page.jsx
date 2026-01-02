import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const ProPages = dynamic(() => import('@/views/sections/ProPage'));

/***************************  METADATA - PRO PAGE  ***************************/

export const metadata = { ...SEO_CONTENT.pricing, openGraph: { ...SEO_CONTENT.pricing, url: PAGE_PATH.pricing } };

/***************************  PAGE - PRICING  ***************************/

export default function ProPage() {
  return <ProPages />;
}

import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Cta = dynamic(() => import('@/views/sections/Cta'));

/***************************  METADATA - CALL TO ACTION  ***************************/

export const metadata = { ...SEO_CONTENT.cta, openGraph: { ...SEO_CONTENT.cta, url: PAGE_PATH.cta } };

/***************************  PAGE - CALL TO ACTION  ***************************/

export default function CtaPage() {
  return <Cta />;
}

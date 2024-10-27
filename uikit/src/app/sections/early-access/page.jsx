import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const EarlyAccess = dynamic(() => import('@/views/sections/EarlyAccess'));

/***************************  METADATA - EARLY ACCCESS  ***************************/

export const metadata = { ...SEO_CONTENT.earlyAccess, openGraph: { ...SEO_CONTENT.earlyAccess, url: PAGE_PATH.earlyAccess } };

/***************************  PAGE - EARLY ACCCESS  ***************************/

export default function EarlyAccessPage() {
  return <EarlyAccess />;
}

import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Icon = dynamic(() => import('@/views/sections/Icon'));

/***************************  METADATA - ICON  ***************************/

export const metadata = { ...SEO_CONTENT.icon, openGraph: { ...SEO_CONTENT.icon, url: PAGE_PATH.icon } };

/***************************  PAGE - ICON  ***************************/

export default function IconPage() {
  return <Icon />;
}

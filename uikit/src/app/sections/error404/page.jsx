import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Error404 = dynamic(() => import('@/views/sections/Error404'));

/***************************  METADATA - ERROR 404  ***************************/

export const metadata = { ...SEO_CONTENT.error404, openGraph: { ...SEO_CONTENT.error404, url: PAGE_PATH.error404 } };

/***************************  PAGE - ERROR 404  ***************************/

export default function Error404Page() {
  return <Error404 />;
}

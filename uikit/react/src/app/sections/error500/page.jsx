import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Error500 = dynamic(() => import('@/views/sections/Error500'));

/***************************  METADATA - ERROR 500  ***************************/

export const metadata = { ...SEO_CONTENT.error500, openGraph: { ...SEO_CONTENT.error500, url: PAGE_PATH.error500 } };

/***************************  PAGE - ERROR 500  ***************************/

export default function Error500Page() {
  return <Error500 />;
}

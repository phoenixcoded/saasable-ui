import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Cookie = dynamic(() => import('@/views/sections/Cookie'));

/***************************  METADATA - COOKIE  ***************************/

export const metadata = { ...SEO_CONTENT.cookie, openGraph: { ...SEO_CONTENT.cookie, url: PAGE_PATH.cookie } };

/***************************  PAGE - COOKIE  ***************************/

export default function CookiePage() {
  return <Cookie />;
}

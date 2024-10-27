import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const OnBoard = dynamic(() => import('@/views/sections/OnBoard'));

/***************************  METADATA - ONBOARD  ***************************/

export const metadata = { ...SEO_CONTENT.onBoard, openGraph: { ...SEO_CONTENT.onBoard, url: PAGE_PATH.onboard } };

/***************************  PAGE - ONBOARD  ***************************/

export default function OnBoardPage() {
  return <OnBoard />;
}

import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Team = dynamic(() => import('@/views/sections/Team'));

/***************************  METADATA - TEAM  ***************************/

export const metadata = { ...SEO_CONTENT.team, openGraph: { ...SEO_CONTENT.team, url: PAGE_PATH.team } };

/***************************  PAGE - TEAM  ***************************/

export default function TeamPage() {
  return <Team />;
}

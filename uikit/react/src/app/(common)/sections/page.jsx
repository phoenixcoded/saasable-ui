import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Sections = dynamic(() => import('@/views/sections'));

/***************************  METADATA - SECTIONS  ***************************/

export const metadata = { ...SEO_CONTENT.section };

/***************************  PAGE - SECTIONS  ***************************/

export default function SectionsPage() {
  return <Sections />;
}

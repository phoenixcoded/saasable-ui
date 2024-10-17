import dynamic from 'next/dynamic';

// @project
const Sections = dynamic(() => import('@/views/sections'));

export const metadata = {
  title: 'Sections'
};

/***************************  PAGE - SECTIONS  ***************************/

export default function SectionsPage() {
  return <Sections />;
}

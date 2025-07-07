import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Gallery = dynamic(() => import('@/views/sections/Gallery'));

/***************************  METADATA - GALLERY  ***************************/

export const metadata = { ...SEO_CONTENT.gallery, openGraph: { ...SEO_CONTENT.gallery, url: PAGE_PATH.gallery } };

/***************************  PAGE - GALLERY  ***************************/

export default function GalleryPage() {
  return <Gallery />;
}

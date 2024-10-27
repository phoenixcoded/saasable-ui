import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Blog = dynamic(() => import('@/views/sections/Blog'));

/***************************  METADATA - BLOG  ***************************/

export const metadata = { ...SEO_CONTENT.blog, openGraph: { ...SEO_CONTENT.blog, url: PAGE_PATH.blog } };

/***************************  PAGE - BLOG  ***************************/

export default function BlogPage() {
  return <Blog />;
}

// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const BlogDetails = dynamic(() => import('@/views/sections/BlogDetails'));

/***************************  METADATA - BLOG DETAILS  ***************************/

export const metadata = { ...SEO_CONTENT.blogDetails, openGraph: { ...SEO_CONTENT.blogDetails, url: PAGE_PATH.blogDetails } };

/***************************  PAGE - BLOG DETAILS  ***************************/

export default function BlogDetailsPage() {
  return <BlogDetails />;
}

import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Testimonial = dynamic(() => import('@/views/sections/Testimonial'));

/***************************  METADATA - TESTIMONIAL  ***************************/

export const metadata = { ...SEO_CONTENT.testimonial, openGraph: { ...SEO_CONTENT.testimonial, url: PAGE_PATH.testimonial } };

/***************************  PAGE - TESTIMONIAL  ***************************/

export default function TestimonialPage() {
  return <Testimonial />;
}

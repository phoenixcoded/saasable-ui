import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const ContactUs = dynamic(() => import('@/views/sections/ContactUs'));

/***************************  METADATA - CONTACT US  ***************************/

export const metadata = { ...SEO_CONTENT.contactUs, openGraph: { ...SEO_CONTENT.contactUs, url: PAGE_PATH.contactUs } };

/***************************  PAGE - CONTACT US  ***************************/

export default function ContactUsPage() {
  return <ContactUs />;
}

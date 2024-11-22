import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const ContactUs = dynamic(() => import('@/views/sections/ContactUs'));

/***************************  METADATA - CONTACT US  ***************************/

export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT US  ***************************/

export default function ContactUsPage() {
  return <ContactUs />;
}

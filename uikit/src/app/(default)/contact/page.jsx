import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Contact = dynamic(() => import('@/views/landings/default/contact'));

/***************************  METADATA - CONTACT  ***************************/

export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT  ***************************/

export default function ContactPage() {
  return <Contact />;
}

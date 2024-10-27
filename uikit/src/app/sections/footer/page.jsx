import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Footer = dynamic(() => import('@/views/sections/Footer'));

/***************************  METADATA - FOOTER  ***************************/

export const metadata = { ...SEO_CONTENT.footer, openGraph: { ...SEO_CONTENT.footer, url: PAGE_PATH.footer } };

/***************************  PAGE - FOOTER  ***************************/

export default function FooterPage() {
  return <Footer />;
}

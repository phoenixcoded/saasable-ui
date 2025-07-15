import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Navbar = dynamic(() => import('@/views/sections/Navbar'));

/***************************  METADATA - NAVBAR  ***************************/

export const metadata = { ...SEO_CONTENT.navbar, openGraph: { ...SEO_CONTENT.navbar, url: PAGE_PATH.navbar } };

/***************************  PAGE - NAVBAR  ***************************/

export default function NavbarPage() {
  return <Navbar />;
}

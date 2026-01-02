import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const NewPassword = dynamic(() => import('@/views/sections/NewPassword'));

/***************************  METADATA - NEW PASSWORD  ***************************/

export const metadata = { ...SEO_CONTENT.newPassword, openGraph: { ...SEO_CONTENT.newPassword, url: PAGE_PATH.newPassword } };

/***************************  PAGE - NEW PASSWORD  ***************************/

export default function NewPasswordPage() {
  return <NewPassword />;
}

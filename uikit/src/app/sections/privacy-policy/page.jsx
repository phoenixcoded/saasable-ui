import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const PrivacyPolicy = dynamic(() => import('@/views/sections/PrivacyPolicy'));

/***************************  METADATA - PRIVACY POLICY  ***************************/

export const metadata = {
  ...SEO_CONTENT.privacyPolicy,
  openGraph: { ...SEO_CONTENT.privacyPolicy, url: PAGE_PATH.privacyPolicy }
};

/***************************  PAGE - PRIVACY POLICY  ***************************/

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}

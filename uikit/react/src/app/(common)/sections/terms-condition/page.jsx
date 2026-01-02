import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const TermsCondition = dynamic(() => import('@/views/sections/TermsCondition'));

/***************************  METADATA - TERMS CONDITION  ***************************/

export const metadata = {
  ...SEO_CONTENT.termsCondition,
  openGraph: { ...SEO_CONTENT.termsCondition, url: PAGE_PATH.termsCondition }
};

/***************************  PAGE - TERMS CONDITION  ***************************/

export default function TermsConditionPage() {
  return <TermsCondition />;
}

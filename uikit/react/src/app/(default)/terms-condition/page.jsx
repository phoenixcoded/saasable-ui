import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const TermsCondition = dynamic(() => import('@/views/landings/default/terms-condition'));

/***************************  METADATA - TERMS CONDITION  ***************************/

export const metadata = {
  ...SEO_CONTENT.termsCondition,
  openGraph: { ...SEO_CONTENT.termsCondition, url: PAGE_PATH.termsConditionPage }
};

/*************************** PAGE - TERMS CONDITION ***************************/

export default function TermsConditionPage() {
  return <TermsCondition />;
}

import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Pricing = dynamic(() => import('@/views/sections/Pricing'));

/***************************  METADATA - PRICING  ***************************/

export const metadata = { ...SEO_CONTENT.pricing, openGraph: { ...SEO_CONTENT.pricing, url: PAGE_PATH.pricing } };

/***************************  PAGE - PRICING  ***************************/

export default function PricingPage() {
  return <Pricing />;
}

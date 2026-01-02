// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

import TopOffer from '@/views/sections/TopOffer';

/***************************  METADATA - TOP OFFER  ***************************/

export const metadata = { ...SEO_CONTENT.topOffer, openGraph: { ...SEO_CONTENT.topOffer, url: PAGE_PATH.topOffer } };

/***************************  PAGE - TOP OFFER  ***************************/

export default function TopOfferPage() {
  return <TopOffer />;
}

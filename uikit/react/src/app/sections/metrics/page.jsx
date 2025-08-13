import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Metrics = dynamic(() => import('@/views/sections/metrics'));

/***************************  METADATA - METRICS  ***************************/

export const metadata = { ...SEO_CONTENT.metrics, openGraph: { ...SEO_CONTENT.metrics, url: PAGE_PATH.metrics } };

/***************************  PAGE - METRICS  ***************************/

export default function MetricsPage() {
  return <Metrics />;
}

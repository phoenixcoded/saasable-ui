import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/routes/Path';
import { SEO_CONTENT } from '@/metadata';

const UnderMaintenance = dynamic(() => import('@/views/sections/UnderMaintenance'));

/***************************  METADATA - UNDER MAINTENANCE  ***************************/

export const metadata = {
  ...SEO_CONTENT.underMaintenance,
  openGraph: { ...SEO_CONTENT.underMaintenance, url: PAGE_PATH.underMaintenance }
};

/***************************  PAGE - UNDER MAINTENANCE  ***************************/

export default function UnderMaintenancePage() {
  return <UnderMaintenance />;
}

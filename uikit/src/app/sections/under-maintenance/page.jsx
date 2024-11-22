import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const UnderMaintenance = dynamic(() => import('@/views/sections/UnderMaintenance'));

/***************************  METADATA - UNDER MAINTENANCE  ***************************/

export const metadata = { ...SEO_CONTENT.underMaintenance };

/***************************  PAGE - UNDER MAINTENANCE  ***************************/

export default function UnderMaintenancePage() {
  return <UnderMaintenance />;
}

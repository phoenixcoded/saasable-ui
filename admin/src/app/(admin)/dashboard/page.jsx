// @next
import dynamic from 'next/dynamic';

// @project
const DashboardPage = dynamic(() => import('@/views/admin/dashboard'));

/***************************  DASHBOARD PAGE  ***************************/

export default function DashboardPages() {
  return <DashboardPage />;
}

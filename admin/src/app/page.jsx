// @next
import dynamic from 'next/dynamic';

const AdminLayout = dynamic(() => import('@/layouts/AdminLayout'));
const DashboardPage = dynamic(() => import('@/views/admin/dashboard'));

/***************************  MAIN - DEFAULT PAGE  ***************************/

export default function Home() {
  return (
    <AdminLayout>
      <DashboardPage />
    </AdminLayout>
  );
}

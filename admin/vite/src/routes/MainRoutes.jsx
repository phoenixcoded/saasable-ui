import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// @project
import Loadable from '@/components/Loadable';
import AdminLayout from '@/layouts/AdminLayout';

// Dashboard
const AnalyticsPage = Loadable(lazy(() => import('@/views/admin/dashboard')));

// Utils
const ColorPage = Loadable(lazy(() => import('@/views/components/utils/colors')));
const ShadowPage = Loadable(lazy(() => import('@/views/components/utils/shadow')));
const TypographyPage = Loadable(lazy(() => import('@/views/components/utils/typography')));

// Sample Page
const SamplePage = Loadable(lazy(() => import('@/views/admin/sample-page')));

const MainRoutes = {
  path: '/',
  element: <AdminLayout />,
  children: [
    { index: true, element: <Navigate to="/dashboard" replace /> },

    { path: 'dashboard', element: <AnalyticsPage /> },
    {
      path: 'utils',
      children: [
        { path: 'color', element: <ColorPage /> },
        { path: 'shadow', element: <ShadowPage /> },
        { path: 'typography', element: <TypographyPage /> }
      ]
    },
    { path: 'sample-page', element: <SamplePage /> }
  ]
};

export default MainRoutes;

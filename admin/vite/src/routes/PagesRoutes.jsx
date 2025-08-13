import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// @project
import Loadable from '@/components/Loadable';
import AuthLayout from '@/layouts/AuthLayout';

// auth
const LoginPage = Loadable(lazy(() => import('@/views/auth/login')));
const RegisterPage = Loadable(lazy(() => import('@/views/auth/register')));

/***************************  PAGES ROUTES  ***************************/

const PagesRoutes = {
  path: 'auth',
  element: <AuthLayout />,
  children: [
    { index: true, element: <Navigate to="login" replace /> },
    { path: 'login', element: <LoginPage /> },
    { path: 'register', element: <RegisterPage /> }
  ]
};

export default PagesRoutes;

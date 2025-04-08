import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @project
const AuthLayout = dynamic(() => import('@/layouts/AuthLayout'));

/***************************  LAYOUT - AUTH PAGES  ***************************/

export default function Layout({ children }) {
  return <AuthLayout>{children}</AuthLayout>;
}

Layout.propTypes = { children: PropTypes.any };

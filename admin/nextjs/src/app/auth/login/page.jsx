// @next
import dynamic from 'next/dynamic';

// @project

const AuthLogin = dynamic(() => import('@/views/auth/login'));

/***************************  AUTH - LOGIN  ***************************/

export default function Login() {
  return <AuthLogin />;
}

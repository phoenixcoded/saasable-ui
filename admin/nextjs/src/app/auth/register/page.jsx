// @next
import dynamic from 'next/dynamic';

// @project
const AuthRegister = dynamic(() => import('@/views/auth/register'));

/***************************  AUTH - REGISTER  ***************************/

export default function Register() {
  return <AuthRegister />;
}

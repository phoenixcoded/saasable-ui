// @next
import dynamic from 'next/dynamic';

// @project
const UtilsShadow = dynamic(() => import('@/views/components/utils/shadow'));

/***************************  UTILS - SHADOW  ***************************/

export default function Utils() {
  return <UtilsShadow />;
}

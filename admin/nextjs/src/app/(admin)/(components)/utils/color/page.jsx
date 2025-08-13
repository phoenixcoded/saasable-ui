// @next
import dynamic from 'next/dynamic';

// @project
const UtilsColors = dynamic(() => import('@/views/components/utils/colors'));

/***************************  UTILS - COLORS  ***************************/

export default function Utils() {
  return <UtilsColors />;
}

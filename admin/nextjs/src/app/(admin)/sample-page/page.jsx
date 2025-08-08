// @next
import dynamic from 'next/dynamic';

// @project
const SamplePage = dynamic(() => import('@/views/admin/sample-page'));

/***************************  SAMPLE PAGE  ***************************/

export default function SamplePages() {
  return <SamplePage />;
}

// @next
import dynamic from 'next/dynamic';

// @project
const DataDisplayTypography = dynamic(() => import('@/views/components/utils/typography'));

/***************************  DATA DISPLAY - TYPOGRAPHY  ***************************/

export default function DataDisplay() {
  return <DataDisplayTypography />;
}

// @next
import dynamic from 'next/dynamic';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const Main = dynamic(() => import('@/views/landings/default'));

/***************************  PAGE - ROOT  ***************************/

export default function HomePage() {
  return (
    <>
      <Main />

      {/* scroll to top section */}
      <ScrollFab />
    </>
  );
}

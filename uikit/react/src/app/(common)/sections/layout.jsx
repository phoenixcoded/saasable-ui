'use client';
import PropTypes from 'prop-types';

// @next
import dynamic from 'next/dynamic';

const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const SectionsLayout = dynamic(() => import('@/views/sections/layout'));

/***************************  LAYOUT - SECTIONS  ***************************/

export default function Sections({ children }) {
  return (
    <SectionsLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </SectionsLayout>
  );
}

Sections.propTypes = { children: PropTypes.any };

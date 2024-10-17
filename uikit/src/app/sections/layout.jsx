'use client';
import PropTypes from 'prop-types';

// @next
import dynamic from 'next/dynamic';

// @types

// @project
import useDataThemeMode from '@/hooks/useDataThemeMode';
import useScrollPosition from '@/hooks/useScrollPosition';

const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const SectionsLayout = dynamic(() => import('@/views/sections/layout'));

/***************************  LAYOUT - SECTIONS  ***************************/

export default function Sections({ children }) {
  useDataThemeMode();
  useScrollPosition();

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

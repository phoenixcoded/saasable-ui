'use client';
import PropTypes from 'prop-types';

import { useState, useRef, useEffect, createElement, useMemo } from 'react';

// @mui
import Box from '@mui/material/Box';

// @project
import Loader from '@/components/Loader';

export default function LazySection({ sections, fallback = <Loader />, offset = '0px', placeholderHeight = 400 }) {
  const sectionList = useMemo(() => (Array.isArray(sections) ? sections : [sections]), [sections]);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedComponents, setLoadedComponents] = useState(Array(sectionList.length).fill(null));
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          Promise.all(sectionList.map((section) => section.importFunc().then((module) => module.default))).then((components) =>
            setLoadedComponents(components)
          );
        }
      },
      { rootMargin: offset, threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [sectionList, offset, isVisible]);

  return (
    <Box ref={ref} sx={{ minHeight: placeholderHeight }}>
      {isVisible && loadedComponents.every((component) => component)
        ? sectionList.map((section, index) => createElement(loadedComponents[index], { key: index, ...section.props }))
        : isVisible && fallback}
    </Box>
  );
}

LazySection.propTypes = {
  sections: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
  fallback: PropTypes.node,
  Loader: PropTypes.any,
  offset: PropTypes.string,
  placeholderHeight: PropTypes.number
};

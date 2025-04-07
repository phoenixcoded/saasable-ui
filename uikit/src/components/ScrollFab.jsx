'use client';

import { useEffect, useState } from 'react';

// @mui
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import SvgIcon from './SvgIcon';

/***************************  COMMON - SCROLL TO TOP BUTTON  ***************************/

export default function ScrollFab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // if the user scrolls down, show the button
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);

    // attach scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // remove event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => isVisible && window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {isVisible && (
        <Box sx={{ position: 'fixed', zIndex: 3, right: { xs: 20, md: 40 }, bottom: { xs: 20, md: 40 } }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
            <Fab
              color="primary"
              rel="noopener noreferrer"
              aria-label="scroll to top"
              onClick={scrollToTop}
              sx={{ width: { xs: 40, lg: 52 }, height: { xs: 40, lg: 52 } }}
            >
              <SvgIcon name="tabler-arrow-up" color="background.default" />
            </Fab>
          </motion.div>
        </Box>
      )}
    </>
  );
}

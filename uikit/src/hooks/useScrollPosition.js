import { useEffect } from 'react';

/***************************  HOOKS - SCROLL POSITION  ***************************/

const useScrollPosition = () => {
  useEffect(() => {
    // fetch stored position on initial render
    const storedPosition = sessionStorage.getItem('scrollPosition');
    if (storedPosition) {
      const position = parseInt(storedPosition);
      window.scrollTo(0, position);
    }

    // update scroll position in session storage on scroll event
    const handleScroll = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollPosition;

'use client';

import { useEffect } from 'react';

// @project
import useBuyNowUrl from '@/hooks/useBuyNowUrl';
import { BUY_NOW_URL as STATIC_BUY_NOW_URL } from '@/path';

export default function BuyNowUrlSync() {
  const dynamicUrl = useBuyNowUrl();

  useEffect(() => {
    if (!dynamicUrl || dynamicUrl === STATIC_BUY_NOW_URL) return;

    const updateLinks = () => {
      const links = document.querySelectorAll(`a[href="${STATIC_BUY_NOW_URL}"]`);
      links.forEach((link) => {
        link.setAttribute('href', dynamicUrl);
      });
    };

    updateLinks();

    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldUpdate = true;
          break;
        }
      }
      if (shouldUpdate) {
        updateLinks();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [dynamicUrl]);

  return null;
}

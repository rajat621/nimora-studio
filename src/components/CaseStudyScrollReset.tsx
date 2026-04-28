'use client';

import { useLayoutEffect } from 'react';

const forceScrollTop = () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

export default function CaseStudyScrollReset() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = 'auto';

    forceScrollTop();

    requestAnimationFrame(() => {
      forceScrollTop();
      requestAnimationFrame(() => {
        forceScrollTop();
        root.style.scrollBehavior = previousScrollBehavior;
      });
    });

    return () => {
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return null;
}
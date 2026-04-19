'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const forceScrollTop = () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const resetScroll = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf(window);

  // Immediate reset
  forceScrollTop();

  // Double RAF — runs AFTER Next.js finishes its own scroll restoration
  requestAnimationFrame(() => {
    forceScrollTop();
    requestAnimationFrame(() => {
      forceScrollTop();
      ScrollTrigger.refresh();
    });
  });
};

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  // Disable browser scroll restoration — must be earliest possible
  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
  }

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useLayoutEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      resetScroll();
    }
  }, [pathname]);

  useLayoutEffect(() => {
    const handlePopState = () => resetScroll();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return null;
}
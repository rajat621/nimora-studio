'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// We'll import GSAP dynamically inside the component to avoid adding it to SSR bundle

const forceScrollTop = () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);
  const gsapRef = useRef<any | null>(null);
  const STRef = useRef<any | null>(null);

  // Disable browser scroll restoration — must be earliest possible
  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
  }

  useLayoutEffect(() => {
    // ensure manual restoration
    window.history.scrollRestoration = 'manual';

    let mounted = true;

    (async () => {
      try {
        const Gmod = (await import('gsap')).default ?? (await import('gsap'));
        const ST = (await import('gsap/ScrollTrigger')).default ?? (await import('gsap/ScrollTrigger'));
        Gmod.registerPlugin(ST);
        if (!mounted) return;
        gsapRef.current = Gmod;
        STRef.current = ST;
      } catch (err) {
        console.error('Failed to load GSAP for ScrollToTop:', err);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  useLayoutEffect(() => {
    const resetScrollLocal = () => {
      const G = gsapRef.current;
      const ST = STRef.current;

      if (ST && ST.getAll) {
        ST.getAll().forEach((trigger: any) => trigger.kill());
      }

      if (G && G.killTweensOf) {
        G.killTweensOf(window);
      }

      // Temporarily disable smooth scroll to force an instant jump to top
      const docEl = document.documentElement as HTMLElement;
      const prevScrollBehavior = docEl.style.scrollBehavior;
      try {
        docEl.style.scrollBehavior = "auto";
        forceScrollTop();

        // Double RAF — runs AFTER Next.js finishes its own scroll restoration
        requestAnimationFrame(() => {
          forceScrollTop();
          requestAnimationFrame(() => {
            forceScrollTop();
            if (ST && ST.refresh) ST.refresh();
          });
        });
      } finally {
        // restore previous behavior on next tick to avoid interfering with intentional smooth scrolling elsewhere
        requestAnimationFrame(() => {
          docEl.style.scrollBehavior = prevScrollBehavior || "";
        });
      }
    };

    // Ensure top-of-page on initial mount and on path changes
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      resetScrollLocal();
    } else {
      // initial mount (first render) — force top as well
      resetScrollLocal();
    }

    const handlePopState = () => resetScrollLocal();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [pathname]);

  return null;
}
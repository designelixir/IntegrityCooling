'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('section').forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top+=200 bottom', // top of section is 200px from bottom of viewport
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });
    });
  }, []);

  return <>{children}</>;
}
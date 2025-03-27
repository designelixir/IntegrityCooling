'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.gsap-container').forEach(container => {
      const targets = container.querySelectorAll('.gsap-objects');

      targets.forEach((el, index) => {
        gsap.fromTo(el,
          { opacity: 0, y: -15 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 40%',
              end: 'bottom top', // when container scrolls past top
              toggleActions: 'play reverse play reverse',
              scrub: false,
              once: false,
            },
            delay: index * 0.25,
          }
        );
      });
    });
  }, []);

  return <>{children}</>;
}
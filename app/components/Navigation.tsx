'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import BookButton from './BookButton';

export default function Navigation() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const isAtTopRef = useRef(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;

    gsap.set(nav, { y: 0 });

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 25 && isAtTopRef.current) {
        gsap.to(nav, {
          background: 'var(--color1)', 
          backdropFilter: 'blur(0)'
        })
        gsap.to(logo, {
          height: 50,
          width: (50 * 250) / 90,
          duration: 0.3,
          ease: 'power2.out',
        });
        isAtTopRef.current = false;
      } else if (scrollY <= 25 && !isAtTopRef.current) {
        gsap.to(nav, {
          background: 'unset', 
          backdropFilter: 'blur(1px)'
        })
        gsap.to(logo, {
          height: 90,
          width: 250,
          duration: 0.3,
          ease: 'power2.out',
        });
        isAtTopRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    const menu = menuRef.current;
    if (!menu) return;

    if (!menuOpen) {
      gsap.to(menu, {
        height: 'auto',
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        display: 'flex',
      });
    } else {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.out',
        display: 'none'
      });
    }

    setMenuOpen(prev => !prev);
  };

  return (
    <nav  className="flex-center-center flex-column nav-bar">
      <div className="flex-center-spacebetween nav-bar-inner" ref={navRef} style={{backgroundColor: menuOpen ? 'var(--navy)': 'unset'}}>
        <Link href="/" className="hover">
          <Image ref={logoRef} src="/integrity-full-white.svg" height={90} width={250} alt="Integrity Heating / Cooling logo" className="logo"/>
        </Link>

        <div className="nav-links flex-center-center no-flex-grow">
          <button className="mobile-menu-button" onClick={toggleMenu} >
            <Image
              src={menuOpen ? '/hamburger-open.svg' : '/hamburger.svg'}
              alt="Menu Button"
              height={35}
              width={35}
              className="menu-icon"
            />
          </button>
          <BookButton></BookButton>
        </div>
      </div>

      <div className="mobile-menu flex-center-center" ref={menuRef}>
        <div className="flex-center-center flex-wrap mobile-menu-links">
          <Link className="nav-link" href="#AboutSection">About Us</Link>
          <Link className="nav-link" href="#ServicesSection">Services</Link>
          <Link className="nav-link" href="#ContactSection">Contact</Link>
          
        </div>
      </div>
    </nav>
  );
}
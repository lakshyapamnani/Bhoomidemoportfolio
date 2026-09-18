import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import { NavLink } from '../../types';
import { MobileMenu } from './MobileMenu';

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Strategy', href: '#strategy' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F1E8]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(18,57,93,0.08)] py-3 border-b border-[#315D7E]/15'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-baseline gap-2 focus:outline-hidden focus:ring-2 focus:ring-[#173B5D] rounded-xs"
            aria-label="Bhoomi Dunka Portfolio Home"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#173B5D] transition-transform group-hover:scale-105">
              BD.
            </span>
            <span className="hidden sm:inline-block font-body text-[10px] tracking-[0.25em] uppercase text-[#315D7E] font-medium">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleSmoothScroll(link.href)}
                className="font-body text-xs lg:text-sm font-medium tracking-wider uppercase text-[#173A5D] hover:text-[#315D7E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#173B5D] hover:after:w-full after:transition-all cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-[#173B5D]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action: Let's work together */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleSmoothScroll('#contact')}
              className="group py-2 px-4 bg-[#173B5D] hover:bg-[#12395D] text-[#F5F1E8] font-body text-xs lg:text-sm font-medium tracking-wide border border-[#12395D] shadow-xs flex items-center gap-2 transition-all active:translate-y-0.5 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#173B5D]"
            >
              <span>Let's work together</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => handleSmoothScroll('#contact')}
              className="py-1.5 px-3 bg-[#173B5D] text-[#F5F1E8] font-body text-xs tracking-wider font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 text-[#173B5D] hover:bg-[#E9E2D5] rounded-xs border border-[#315D7E]/30 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#173B5D]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Scrapbook Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        onNavigate={handleSmoothScroll}
      />
    </>
  );
};

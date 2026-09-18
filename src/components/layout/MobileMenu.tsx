import React, { useEffect } from 'react';
import { X, ArrowRight, Instagram, Mail, Phone } from 'lucide-react';
import { NavLink } from '../../types';
import { Sticker } from '../common/Sticker';
import { Tape } from '../common/Tape';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  onNavigate: (href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
  onNavigate
}) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#12395D] text-[#F5F1E8] animate-in fade-in duration-200"
    >
      {/* Background paper noise */}
      <div className="absolute inset-0 bg-dark-paper-grain opacity-40 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-[#315D7E]/50">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold italic tracking-wider">BD.</span>
          <span className="text-[10px] font-body tracking-widest uppercase text-[#6F8DA5]">
            Portfolio 2026
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-[#F5F1E8] hover:text-[#E9E2D5] rounded-xs border border-[#315D7E] hover:border-[#6F8DA5] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#6F8DA5]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Menu Body / Scrapbook Card Style */}
      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="relative inline-block mb-4">
            <Tape variant="cream" width="w-20" height="h-6" rotation={-3} className="-top-3 left-4" />
            <div className="bg-[#173B5D] px-4 py-2 border border-[#315D7E]">
              <span className="font-script text-2xl text-[#E9E2D5]">Editorial Index</span>
            </div>
          </div>

          <nav className="flex flex-col space-y-4">
            {links.map((link, idx) => (
              <button
                key={link.href}
                onClick={() => onNavigate(link.href)}
                className="group flex items-baseline justify-between py-2 border-b border-[#315D7E]/40 text-left transition-colors hover:text-[#E9E2D5]"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#6F8DA5]">0{idx + 1}.</span>
                  <span className="font-display text-3xl sm:text-4xl tracking-wide group-hover:italic transition-all">
                    {link.label}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#6F8DA5] group-hover:text-[#F5F1E8] group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Contact Section */}
        <div className="mt-10 pt-6 border-t border-[#315D7E]/50">
          <div className="bg-[#173B5D]/80 p-4 border border-[#315D7E] relative mb-6">
            <p className="font-display text-xl text-[#F5F1E8] mb-1">
              Ready to elevate your digital presence?
            </p>
            <p className="font-body text-xs text-[#6F8DA5] mb-3">
              Strategy, design, and content with clear purpose.
            </p>
            <button
              onClick={() => onNavigate('#contact')}
              className="w-full py-2.5 px-5 bg-[#F5F1E8] text-[#173A5D] font-body text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-[#E9E2D5] transition-colors"
            >
              <span>Let's work together</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-[#6F8DA5]">
            <a
              href="https://instagram.com/bhoomidunka.studio"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F5F1E8] flex items-center gap-1.5 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>@bhoomidunka.studio</span>
            </a>
            <Sticker type="label" text="ONTARIO • 2026" variant="blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

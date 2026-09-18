import React from 'react';
import { ArrowUp, Instagram, Mail, MessageCircle } from 'lucide-react';
import { Sticker } from '../common/Sticker';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#12395D] text-[#F5F1E8] pt-16 pb-12 overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-dark-paper-grain opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#315D7E]/40 items-start">
          {/* Col 1: Brand & Core Quote */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-bold tracking-tight text-[#F5F1E8]">
                BD.
              </span>
              <span className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-[#6F8DA5]">
                Bhoomi Dunka • Studio
              </span>
            </div>

            <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-light italic text-[#E9E2D5] max-w-md leading-snug">
              "Let's create content with purpose."
            </p>

            <p className="font-body text-xs sm:text-sm text-[#6F8DA5] max-w-md leading-relaxed">
              Social Media Management, Creative Direction, and Visual Strategy for brands that
              cherish authenticity, editorial finesse, and measurable resonance.
            </p>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#6F8DA5]">
              Explore
            </p>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <a href="#about" className="hover:text-[#E9E2D5] transition-colors">
                  01. About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E9E2D5] transition-colors">
                  02. Editorial Services
                </a>
              </li>
              <li>
                <a href="#case-study" className="hover:text-[#E9E2D5] transition-colors">
                  03. Mimada Beauty Case Study
                </a>
              </li>
              <li>
                <a href="#strategy" className="hover:text-[#E9E2D5] transition-colors">
                  04. Content Strategy
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#E9E2D5] transition-colors">
                  05. Selected Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Studio Mark */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#6F8DA5]">
              Direct Inquiries
            </p>
            <div className="space-y-2 text-sm font-body">
              <a
                href="https://instagram.com/bhoomidunka.studio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[#E9E2D5] hover:text-[#F5F1E8] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#6F8DA5]" />
                <span>@bhoomidunka.studio</span>
              </a>
              <a
                href="mailto:hello@bhoomidunka.com"
                className="flex items-center gap-2.5 text-[#E9E2D5] hover:text-[#F5F1E8] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#6F8DA5]" />
                <span>hello@bhoomidunka.com</span>
              </a>
              <a
                href="https://wa.me/14165550192"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[#E9E2D5] hover:text-[#F5F1E8] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#6F8DA5]" />
                <span>WhatsApp (+1 416-555-0192)</span>
              </a>
            </div>

            <div className="pt-2">
              <Sticker type="wax-seal" rotation={-4} className="opacity-90" />
            </div>
          </div>
        </div>

        {/* Bottom copyright + back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-[#6F8DA5]">
          <p>© {new Date().getFullYear()} Bhoomi Dunka. Crafted with editorial aesthetics &amp; artisanal intent.</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-[#E9E2D5] hover:text-[#F5F1E8] transition-colors group cursor-pointer focus:outline-hidden"
          >
            <span>Back to top</span>
            <span className="p-1.5 rounded-xs border border-[#315D7E] group-hover:border-[#6F8DA5] transition-colors">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

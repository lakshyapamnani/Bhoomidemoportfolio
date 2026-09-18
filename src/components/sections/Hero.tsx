import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { heroLandscapeBg, envelopeScrapSvg } from '../../assets';
import { Tape } from '../common/Tape';
import { Sticker } from '../common/Sticker';
import { TornPaper } from '../common/TornPaper';

export const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const aboutEl = document.querySelector('#about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-0 bg-[#12395D]"
    >
      {/* Layer 1: Mountain / Sky Photography Background */}
      <div
        className="absolute inset-0 z-0 select-none pointer-events-none opacity-50 mix-blend-screen"
        dangerouslySetInnerHTML={{ __html: heroLandscapeBg }}
        aria-hidden="true"
      />

      {/* Layer 2: Subtle Deep Blue Editorial Gradient Overlay */}
      <div
        className="absolute inset-0 z-1 bg-gradient-to-b from-[#12395D]/85 via-[#173B5D]/70 to-[#12395D]/95 pointer-events-none"
        aria-hidden="true"
      />

      {/* Tactile paper grain */}
      <div className="absolute inset-0 z-2 bg-dark-paper-grain opacity-40 pointer-events-none" />

      {/* Scrapbook Floating Elements in Ambient Background */}
      <div className="absolute top-20 right-8 sm:right-16 lg:right-24 z-5 hidden sm:block pointer-events-none">
        <Sticker type="postage" rotation={6} />
      </div>

      <div className="absolute top-44 right-20 sm:right-32 lg:right-48 z-4 hidden sm:block pointer-events-none">
        <Sticker type="cancellation" rotation={-5} />
      </div>

      <div className="absolute bottom-24 left-6 sm:left-12 lg:left-20 z-5 hidden md:block pointer-events-none">
        <Sticker type="wax-seal" rotation={-12} />
      </div>

      {/* Main Composition: Resembles a physical scrapbook lying on a table */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center justify-center my-auto py-8 sm:py-12">
        <div className="relative max-w-2xl sm:max-w-3xl w-full">
          {/* Layer 5: Scrapbook Envelope underneath */}
          <div
            className="absolute -top-6 sm:-top-10 -right-4 sm:-right-8 w-64 sm:w-80 md:w-96 opacity-60 sm:opacity-85 pointer-events-none select-none z-0 transform rotate-3"
            dangerouslySetInnerHTML={{ __html: envelopeScrapSvg }}
            aria-hidden="true"
          />

          {/* Secondary Vintage Postcard Peek */}
          <div className="hidden lg:block absolute -left-12 top-1/4 -rotate-6 w-48 bg-[#E9E2D5] p-3 shadow-md border border-[#315D7E]/30 z-5 select-none">
            <Tape variant="navy" width="w-20" height="h-6" rotation={4} className="-top-3 left-6" />
            <p className="font-script text-xl text-[#173A5D]">Bhoomi Dunka</p>
            <p className="font-mono text-[9px] uppercase tracking-wider text-[#315D7E] mt-1">
              Field Notes • 2026
            </p>
          </div>

          {/* Layer 6: Cream Portfolio Card (Centerpiece) */}
          <div className="relative z-10 bg-[#F5F1E8] text-[#173A5D] p-6 sm:p-10 md:p-14 shadow-[0_20px_50px_rgba(18,57,93,0.3)] border border-[#E9E2D5] transform sm:-rotate-1 transition-transform duration-500 hover:rotate-0">
            {/* Top Washi Tapes fixing the card */}
            <div className="absolute -top-3.5 left-10 z-20">
              <Tape variant="navy" width="w-24 sm:w-28" rotation={-2} />
            </div>
            <div className="absolute -top-3.5 right-12 z-20">
              <Tape variant="cream" width="w-24 sm:w-28" rotation={3} />
            </div>

            {/* Tactile paper texture within card */}
            <div className="absolute inset-0 bg-paper-grain opacity-50 pointer-events-none" />

            {/* Inner Border Frame */}
            <div className="relative z-10 border border-[#315D7E]/20 p-5 sm:p-8 md:p-10 flex flex-col items-center text-center">
              {/* Top metadata tags */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <span className="font-body text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 bg-[#173B5D] text-[#F5F1E8] border border-[#12395D] shadow-xs">
                  Social Media
                </span>
                <span className="font-body text-[11px] sm:text-xs font-medium tracking-widest uppercase text-[#315D7E]">
                  2026 — Bhoomi Dunka
                </span>
              </div>

              {/* Main Headline: "Portfolio" */}
              <div className="relative my-2 sm:my-3">
                <span className="block font-script text-3xl sm:text-4xl text-[#315D7E]/70 -mb-2 sm:-mb-3 select-none">
                  curation &amp; strategy
                </span>
                <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-[#173B5D] leading-[0.95]">
                  Portfolio
                </h1>
              </div>

              {/* Roles: Social Media Manager & Visual Designer */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 my-6 text-sm sm:base md:text-lg font-body text-[#315D7E] border-y border-[#315D7E]/20 py-3 sm:py-3.5 w-full max-w-lg">
                <span className="font-medium tracking-wide">Social Media Manager</span>
                <span className="hidden sm:inline text-[#6F8DA5]">•</span>
                <span className="font-medium tracking-wide">Visual &amp; Graphic Designer</span>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#6F8DA5] max-w-md leading-relaxed mb-8">
                Editorial design, creative direction, and high-impact visual storytelling systems
                engineered to connect boutique brands with devoted audiences.
              </p>

              {/* CTA: "Explore My Work ↓" */}
              <div className="relative">
                <button
                  onClick={handleScrollDown}
                  className="group py-3 px-6 sm:py-3.5 sm:px-8 bg-[#173B5D] hover:bg-[#12395D] text-[#F5F1E8] font-body text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-md flex items-center gap-3 transition-all duration-200 cursor-pointer active:translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#173B5D]"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </button>
              </div>

              {/* Bottom Scrapbook Serial Number */}
              <div className="mt-8 pt-4 border-t border-dashed border-[#315D7E]/20 w-full flex items-center justify-between text-[10px] font-mono text-[#6F8DA5] uppercase tracking-wider">
                <span>Ref. No. BD-2026-CA</span>
                <span>Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3: Torn Paper Bottom Edge transitioning to About */}
      <div className="relative z-20 w-full">
        <TornPaper position="bottom" fillColor="#F5F1E8" shadow={true} />
      </div>
    </section>
  );
};

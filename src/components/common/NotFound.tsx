import React from 'react';
import { ArrowLeft, Home, Compass, Mail, Sparkles } from 'lucide-react';
import { Tape } from './Tape';
import { Sticker } from './Sticker';
import { Button } from './Button';

interface NotFoundProps {
  onBackToHome?: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  const handleHome = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#173A5D] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden selection:bg-[#12395D] selection:text-[#F5F1E8]">
      {/* Paper grain texture */}
      <div className="absolute inset-0 bg-paper-grain opacity-60 pointer-events-none" />

      {/* Decorative Stamp in Corner */}
      <div className="absolute top-10 right-10 hidden sm:block opacity-40 pointer-events-none">
        <Sticker type="postage" rotation={8} />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Layered Scrapbook Card */}
        <div className="relative bg-[#FFFFFF] p-6 sm:p-12 shadow-[0_25px_60px_rgba(18,57,93,0.14)] border border-[#E9E2D5]">
          {/* Taped top edge */}
          <div className="absolute -top-3.5 left-12 z-20">
            <Tape variant="navy" width="w-24" height="h-7" rotation={-2} />
          </div>
          <div className="absolute -top-3.5 right-12 z-20 hidden sm:block">
            <Tape variant="cream" width="w-20" height="h-6" rotation={3} />
          </div>

          {/* Header Metadata Tag */}
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-[#315D7E]/15">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#315D7E] px-2.5 py-1 bg-[#E9E2D5] border border-[#315D7E]/20">
                404 • Lost Document
              </span>
              <span className="font-mono text-xs text-[#6F8DA5]">STATUS: NOT FOUND</span>
            </div>
            <span className="font-script text-2xl text-[#6F8DA5]">lost in the margins</span>
          </div>

          {/* Big Number & Headline */}
          <div className="mb-6">
            <span className="font-display text-7xl sm:text-8xl md:text-9xl font-light text-[#173B5D]/20 leading-none block select-none -mb-4 sm:-mb-6">
              404
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#173B5D] tracking-tight leading-tight">
              This page does not exist in the journal.
            </h1>
          </div>

          {/* Narrative */}
          <p className="font-body text-sm sm:text-base text-[#315D7E] leading-relaxed max-w-lg mb-8">
            The editorial piece, case study, or link you are seeking may have been archived,
            relocated to a new section, or never filed into this edition.
          </p>

          {/* Suggested Destinations */}
          <div className="mb-8 p-4 sm:p-5 bg-[#F5F1E8] border border-[#315D7E]/15">
            <p className="font-body text-[11px] font-bold uppercase tracking-wider text-[#6F8DA5] mb-3">
              Curated Navigation Shortcuts:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-body font-semibold uppercase tracking-wider text-[#173B5D]">
              <a
                href="#services"
                onClick={handleHome}
                className="p-2.5 bg-white border border-[#315D7E]/20 hover:border-[#173B5D] flex items-center gap-2 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#315D7E]" />
                <span>Services</span>
              </a>
              <a
                href="#case-study"
                onClick={handleHome}
                className="p-2.5 bg-white border border-[#315D7E]/20 hover:border-[#173B5D] flex items-center gap-2 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#315D7E]" />
                <span>Case Study</span>
              </a>
              <a
                href="#contact"
                onClick={handleHome}
                className="p-2.5 bg-white border border-[#315D7E]/20 hover:border-[#173B5D] flex items-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#315D7E]" />
                <span>Inquiries</span>
              </a>
            </div>
          </div>

          {/* Back Home CTA */}
          <div className="pt-2 flex items-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={handleHome}
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              Return to Portfolio Cover
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { jacquelinePortraitSvg, svgToDataUri } from '../../assets';
import { Polaroid } from '../common/Polaroid';
import { Tape } from '../common/Tape';
import { Sticker } from '../common/Sticker';
import { Button } from '../common/Button';

export const About: React.FC = () => {
  const portraitUri = svgToDataUri(jacquelinePortraitSvg);

  const handleContactClick = () => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-36 bg-[#F5F1E8] overflow-hidden">
      {/* Paper noise texture */}
      <div className="absolute inset-0 bg-paper-grain opacity-50 pointer-events-none" />

      {/* Decorative background stamp */}
      <div className="absolute top-12 right-12 hidden lg:block opacity-40 pointer-events-none">
        <Sticker type="cancellation" rotation={8} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Text & Narrative (Col 7 on desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Small eyebrow & script greeting */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-[#315D7E] px-2.5 py-0.5 bg-[#E9E2D5] border border-[#315D7E]/20">
                  About Me
                </span>
                <span className="font-mono text-xs text-[#6F8DA5]">01 / 05</span>
              </div>
              <p className="font-script text-3xl sm:text-4xl text-[#315D7E] pt-2">
                Hello, I am
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#173B5D] tracking-tight leading-[1.05]">
                Bhoomi Dunka
              </h2>
            </div>

            {/* Core Description */}
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-[#173A5D] font-light leading-snug border-l-2 border-[#173B5D] pl-4 sm:pl-6 italic">
              "Social Media Manager and Visual Designer passionate about creating visual content
              that connects, communicates, and converts."
            </p>

            <p className="font-body text-sm sm:text-base text-[#315D7E] leading-relaxed max-w-xl">
              I firmly believe a brand never needs to shout to be heard. Through harmonious
              compositions, editorial typography, and an inbound strategy rooted in human empathy, I
              transform fragmented feeds into magnetic visual sanctuaries that enchant at first glance
              and foster enduring loyalty.
            </p>

            {/* Three Core Identity Pillars */}
            <div className="pt-2">
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6F8DA5] mb-3">
                Core Ethos
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="relative group">
                  <div className="px-4 py-2 bg-[#E9E2D5] border border-[#315D7E]/30 text-[#173A5D] font-body text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#315D7E]" />
                    <span>Creative</span>
                  </div>
                </div>

                <div className="relative group">
                  <div className="px-4 py-2 bg-[#E9E2D5] border border-[#315D7E]/30 text-[#173A5D] font-body text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#173B5D]" />
                    <span>Strategic</span>
                  </div>
                </div>

                <div className="relative group">
                  <div className="px-4 py-2 bg-[#E9E2D5] border border-[#315D7E]/30 text-[#173A5D] font-body text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6F8DA5]" />
                    <span>Passionate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={handleContactClick}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get in Touch
              </Button>

              <a
                href="#services"
                className="font-body text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#315D7E] hover:text-[#173B5D] underline underline-offset-4 transition-colors"
              >
                View Services →
              </a>
            </div>
          </div>

          {/* Right Column: Layered Scrapbook Polaroid Frame (Col 5 on desktop) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Background Craft Card Offset */}
              <div className="absolute inset-0 bg-[#E9E2D5] border border-[#315D7E]/20 transform rotate-4 shadow-lg" />

              {/* Little quote note clipped */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-[#173B5D] text-[#F5F1E8] p-3.5 sm:p-4 border border-[#315D7E] shadow-xl z-30 max-w-[200px] sm:max-w-[220px] -rotate-3">
                <Tape variant="cream" width="w-16" height="h-5" rotation={2} className="-top-2.5 left-4" />
                <p className="font-script text-xl text-[#E9E2D5] leading-tight">
                  "Design is silence with intention."
                </p>
                <p className="font-mono text-[9px] text-[#6F8DA5] uppercase tracking-wider mt-1">
                  Studio Bhoomi Dunka
                </p>
              </div>

              {/* Taped Polaroid-Style Frame */}
              <div className="relative z-20">
                <Polaroid
                  imageSrc={portraitUri}
                  alt="Bhoomi Dunka — Social Media Manager & Visual Designer"
                  caption="Bhoomi Dunka"
                  subcaption="Ontario, Canada • 2026 Edition"
                  rotation={-2}
                  tape={true}
                  tapeVariant="navy"
                  imageClassName="aspect-[4/5]"
                />
              </div>

              {/* Stamp on corner */}
              <div className="absolute -top-6 -right-6 z-30 hidden sm:block">
                <Sticker type="postage" rotation={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

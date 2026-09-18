import React from 'react';
import { BookOpen, HeartHandshake, Sparkles, Users, ArrowRight } from 'lucide-react';
import { strategyPillarsData } from '../../data/strategy';
import { SectionHeading } from '../common/SectionHeading';
import { TornPaper } from '../common/TornPaper';
import { Sticker } from '../common/Sticker';
import { Tape } from '../common/Tape';

export const StrategyGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#E9E2D5]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#E9E2D5]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#E9E2D5]" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-[#E9E2D5]" />;
    }
  };

  return (
    <section id="strategy" className="relative bg-[#173B5D] text-[#F5F1E8] pt-20 sm:pt-28 pb-20 sm:pb-28 overflow-hidden">
      {/* Top torn edge transition from previous section */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <TornPaper position="top" fillColor="#173B5D" shadow={true} />
      </div>

      {/* Dark paper texture */}
      <div className="absolute inset-0 bg-dark-paper-grain opacity-40 pointer-events-none" />

      {/* Decorative scrap stamp in background */}
      <div className="absolute top-24 right-12 hidden lg:block opacity-25 pointer-events-none">
        <Sticker type="postage" rotation={5} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6 border-b border-[#315D7E]/50 pb-10">
          <SectionHeading
            theme="dark"
            tag="Editorial Methodology"
            scriptTag="strategic inbound"
            title="Content Strategy"
            subtitle="Inbound marketing + value-driven storytelling"
          />

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#6F8DA5] uppercase tracking-wider">
              4 Pillars of Attraction &amp; Retention
            </span>
          </div>
        </div>

        {/* 4 Pillars Layout: Horizontal Editorial on Desktop, Horizontal Scroll on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#315D7E]/50 border-y md:border-y md:border-x border-[#315D7E]/50 bg-[#12395D]/40 backdrop-blur-xs">
          {strategyPillarsData.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#12395D]/80 transition-colors group relative"
            >
              <div>
                {/* Number & Icon with thin separator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#6F8DA5] tracking-widest uppercase">
                    Pillar {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#315D7E] flex items-center justify-center bg-[#173B5D] group-hover:border-[#6F8DA5] transition-colors">
                    {getIcon(pillar.icon)}
                  </div>
                </div>

                {/* Percentage weight tag */}
                <div className="mb-2">
                  <span className="font-body text-[10px] font-semibold tracking-widest uppercase text-[#6F8DA5] px-2 py-0.5 border border-[#315D7E]/60 bg-[#173B5D]">
                    {pillar.percentage} content share
                  </span>
                </div>

                {/* Pillar Name */}
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F1E8] mb-1">
                  {pillar.name}
                </h3>

                {/* Tagline */}
                <p className="font-script text-xl text-[#6F8DA5] mb-4">
                  {pillar.tagline}
                </p>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-[#E9E2D5]/80 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Examples bullet list */}
              <div className="pt-4 border-t border-dashed border-[#315D7E]/40">
                <p className="font-body text-[10px] font-bold uppercase tracking-wider text-[#6F8DA5] mb-2">
                  Key Formats:
                </p>
                <ul className="space-y-1.5 text-xs font-body text-[#E9E2D5]/70">
                  {pillar.examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#6F8DA5]">•</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout Note */}
        <div className="mt-12 p-6 bg-[#12395D] border border-[#315D7E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#6F8DA5] animate-pulse" />
            <p className="font-display text-lg text-[#F5F1E8] italic">
              "Harmonizing these four pillars prevents commercial burnout and sustains an engaged, high-intent community."
            </p>
          </div>
          <a
            href="#contact"
            className="font-body text-xs font-semibold uppercase tracking-wider text-[#E9E2D5] hover:text-[#FFFFFF] underline underline-offset-4 flex-shrink-0"
          >
            Design my tailored strategy →
          </a>
        </div>
      </div>

      {/* Bottom torn paper transition */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <TornPaper position="bottom" fillColor="#F5F1E8" shadow={true} />
      </div>
    </section>
  );
};

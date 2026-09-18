import React, { useState } from 'react';
import {
  execBeforeAfterSvg,
  execTrendsSvg,
  execRelatableSvg,
  execAestheticSvg,
  execBehindScenesSvg,
  svgToDataUri
} from '../../assets';
import { contentExecutionData } from '../../data/contentExecution';
import { SectionHeading } from '../common/SectionHeading';
import { Sticker } from '../common/Sticker';
import { Tape } from '../common/Tape';
import { Maximize2, X } from 'lucide-react';

export const ContentGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const imageMap: Record<string, string> = {
    execBeforeAfter: svgToDataUri(execBeforeAfterSvg),
    execTrends: svgToDataUri(execTrendsSvg),
    execRelatable: svgToDataUri(execRelatableSvg),
    execAesthetic: svgToDataUri(execAestheticSvg),
    execBehindScenes: svgToDataUri(execBehindScenesSvg)
  };

  return (
    <section id="execution" className="relative py-20 sm:py-28 md:py-36 bg-[#F5F1E8] overflow-hidden">
      {/* Paper grain */}
      <div className="absolute inset-0 bg-paper-grain opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            tag="Formats &amp; Creative Execution"
            scriptTag="visual curation"
            title="Content Execution"
            subtitle="☆ Multi-format diversification"
          />

          <div className="flex items-center gap-3">
            <Sticker text="5 Key Formats" variant="cream" rotation={2} />
          </div>
        </div>

        {/* Gallery: 5-column on desktop, smooth horizontal scrolling on mobile */}
        <div className="flex md:grid md:grid-cols-5 gap-5 sm:gap-6 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
          {contentExecutionData.map((item, idx) => {
            const imgSrc = imageMap[item.imageKey];
            const rotations = [-1.5, 1, -1, 1.5, -0.8];
            const rot = rotations[idx % rotations.length];

            return (
              <div
                key={item.id}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto snap-center group cursor-pointer"
                onClick={() => setSelectedItem(item.id)}
              >
                {/* Scrapbook card frame */}
                <div
                  className="bg-[#FFFFFF] p-2.5 sm:p-3 pb-4 sm:pb-5 shadow-[0_8px_25px_rgba(18,57,93,0.08)] border border-[#E9E2D5] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_16px_35px_rgba(18,57,93,0.15)] relative h-full flex flex-col justify-between"
                  style={{ transform: `rotate(${rot}deg)` }}
                >
                  {/* Top washi tape */}
                  <Tape
                    variant={idx % 2 === 0 ? 'cream' : 'kraft'}
                    width="w-20"
                    height="h-6"
                    rotation={idx % 2 === 0 ? -2 : 3}
                    className="-top-3 left-1/2 -translate-x-1/2"
                  />

                  <div>
                    {/* Image Container with preserved aspect ratio */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E9E2D5] border border-[#315D7E]/10 mb-3.5">
                      <img
                        src={imgSrc}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#173B5D]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2 bg-[#F5F1E8] text-[#173B5D] rounded-full shadow-md">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Category Label */}
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#6F8DA5]">
                        0{idx + 1} • {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg sm:text-xl font-medium text-[#173B5D] leading-snug mb-1.5">
                      {item.category}
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="font-body text-xs text-[#315D7E] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-dashed border-[#315D7E]/15 flex items-center justify-between text-[10px] font-mono text-[#6F8DA5]">
                    <span>EXP. 2026</span>
                    <span className="group-hover:text-[#173B5D] group-hover:underline">Details +</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden mt-4 text-center">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#6F8DA5]">
            ← Swipe to explore formats →
          </span>
        </div>
      </div>

      {/* Lightbox / Modal for enlarged item */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#12395D]/85 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedItem(null)}
        >
          {(() => {
            const active = contentExecutionData.find((it) => it.id === selectedItem);
            if (!active) return null;
            const activeImg = imageMap[active.imageKey];

            return (
              <div
                className="relative max-w-lg w-full bg-[#F5F1E8] p-5 sm:p-7 shadow-2xl border border-[#E9E2D5] select-none"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  aria-label="Close detailed view"
                  className="absolute top-4 right-4 p-2 text-[#173B5D] hover:bg-[#E9E2D5] rounded-xs border border-[#315D7E]/30"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="aspect-[3/4] max-h-[55vh] w-full overflow-hidden bg-[#E9E2D5] mb-4 border border-[#315D7E]/20">
                  <img
                    src={activeImg}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-xs text-[#315D7E] tracking-widest uppercase">
                    {active.tag}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#173B5D]">
                    {active.category}: {active.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#315D7E] leading-relaxed pt-1">
                    {active.description}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
};

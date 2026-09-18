import React from 'react';
import { Share2, Palette, Compass, ArrowUpRight, Check } from 'lucide-react';
import { Service } from '../../types';
import { PaperCard } from '../common/PaperCard';
import { Tape } from '../common/Tape';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const getIcon = () => {
    switch (service.iconName) {
      case 'Share2':
        return <Share2 className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Compass':
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  // Subtle rotation for scrapbook handmade feel
  const rotations = [-1, 0.8, -0.6];
  const currentRotation = rotations[index % rotations.length];

  return (
    <PaperCard
      variant={index === 1 ? 'cream' : 'paper'}
      rotation={currentRotation}
      className="p-6 sm:p-8 flex flex-col justify-between h-full group hover:-translate-y-1.5 transition-all duration-300"
      tape={true}
      tapePosition={index % 2 === 0 ? 'top-left' : 'top-right'}
      tapeVariant={index === 1 ? 'navy' : 'cream'}
    >
      <div>
        {/* Top bar: Number & Minimal Icon */}
        <div className="flex items-center justify-between pb-6 border-b border-[#315D7E]/15 mb-6">
          <span className="font-display text-4xl sm:text-5xl font-light italic text-[#315D7E]/50">
            {service.number}
          </span>

          <div className="w-11 h-11 rounded-full bg-[#E9E2D5] text-[#173B5D] border border-[#315D7E]/30 flex items-center justify-center transition-colors group-hover:bg-[#173B5D] group-hover:text-[#F5F1E8]">
            {getIcon()}
          </div>
        </div>

        {/* Tag pill */}
        <div className="mb-3">
          <span className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-[#315D7E] px-2 py-0.5 border border-[#315D7E]/25 bg-white/40">
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#173B5D] mb-2 leading-tight">
          {service.title}
        </h3>

        {/* Subtitle */}
        <p className="font-script text-xl sm:text-2xl text-[#315D7E] mb-4">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="font-body text-xs sm:text-sm text-[#315D7E] leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Deliverables list */}
        <div className="pt-4 border-t border-dashed border-[#315D7E]/20">
          <p className="font-body text-[11px] font-semibold uppercase tracking-wider text-[#6F8DA5] mb-3">
            What's Included:
          </p>
          <ul className="space-y-2 text-xs font-body text-[#173A5D]">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-[#315D7E] mt-0.5 flex-shrink-0">•</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Action / Consultar */}
      <div className="mt-8 pt-4 border-t border-[#315D7E]/10 flex items-center justify-between text-xs font-body font-semibold tracking-wider uppercase text-[#173B5D]">
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 hover:text-[#315D7E] transition-colors group-hover:translate-x-0.5 duration-200"
        >
          <span>Inquire About Service</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <span className="text-[10px] font-mono text-[#6F8DA5]">ACTIVE BOOKINGS</span>
      </div>
    </PaperCard>
  );
};

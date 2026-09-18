import React from 'react';
import { servicesData } from '../../data/services';
import { ServiceCard } from './ServiceCard';
import { SectionHeading } from '../common/SectionHeading';
import { Sticker } from '../common/Sticker';

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 md:py-36 bg-[#E9E2D5] overflow-hidden"
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-paper-grain opacity-60 pointer-events-none" />

      {/* Decorative scrap elements in background */}
      <div className="absolute top-12 left-8 hidden lg:block opacity-35 pointer-events-none">
        <Sticker type="postage" rotation={-8} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            tag="Value Proposition"
            scriptTag="editorial offerings"
            title="Services"
            subtitle="Strategy + Creativity + Measurable Impact"
          />

          <div className="max-w-xs text-xs sm:text-sm font-body text-[#315D7E] border-l border-[#315D7E]/30 pl-4 py-1 italic">
            "Every service is architected to transform digital content into an immersive aesthetic
            experience that converts profile visitors into high-intent clients."
          </div>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

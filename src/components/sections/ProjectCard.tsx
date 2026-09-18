import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';
import { Tape } from '../common/Tape';

interface ProjectCardProps {
  project: Project;
  imageSrc: string;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  imageSrc,
  index,
  onSelect
}) => {
  const isLarge = index === 0;

  return (
    <div
      onClick={() => onSelect(project)}
      className={`group cursor-pointer relative bg-[#F5F1E8] p-3.5 sm:p-5 pb-6 shadow-[0_10px_30px_rgba(18,57,93,0.09)] border border-[#E9E2D5] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(18,57,93,0.16)] flex flex-col justify-between ${
        isLarge ? 'md:col-span-2' : 'col-span-1'
      }`}
    >
      {/* Washi Tape on corner */}
      <Tape
        variant={index % 2 === 0 ? 'cream' : 'navy'}
        width="w-22 sm:w-26"
        height="h-6 sm:h-7"
        rotation={index % 2 === 0 ? -2 : 2.5}
        className="-top-3 left-6 sm:left-10"
      />

      <div>
        {/* Project Visual Container */}
        <div
          className={`relative overflow-hidden bg-[#E9E2D5] border border-[#315D7E]/15 mb-4 ${
            isLarge ? 'aspect-[16/10]' : 'aspect-[4/3]'
          }`}
        >
          <img
            src={imageSrc}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#12395D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Floating Category Pill */}
          <div className="absolute top-3 right-3 z-10">
            <span className="font-body text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-[#173B5D]/90 text-[#F5F1E8] backdrop-blur-xs border border-[#315D7E]">
              {project.category}
            </span>
          </div>
        </div>

        {/* Metadata & Title */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="font-mono text-[10px] sm:text-xs text-[#6F8DA5] tracking-wider uppercase">
            {project.client}
          </span>
          <span className="font-mono text-[10px] sm:text-xs text-[#315D7E] font-semibold">
            {project.year}
          </span>
        </div>

        {/* Project Name + Hover Arrow */}
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#173B5D] group-hover:text-[#315D7E] transition-colors leading-tight">
            {project.title}
          </h3>

          <div className="w-8 h-8 rounded-full border border-[#315D7E]/30 flex items-center justify-center text-[#173B5D] group-hover:bg-[#173B5D] group-hover:text-[#F5F1E8] group-hover:border-[#173B5D] transition-all flex-shrink-0">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Short Description */}
        <p className="font-body text-xs sm:text-sm text-[#315D7E] leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Deliverables tags */}
      <div className="mt-4 pt-3 border-t border-dashed border-[#315D7E]/15 flex flex-wrap gap-1.5">
        {project.deliverables.map((deliv, i) => (
          <span
            key={i}
            className="text-[10px] font-body text-[#173A5D]/80 bg-[#E9E2D5]/60 px-2 py-0.5 border border-[#315D7E]/10"
          >
            {deliv}
          </span>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  workMimadaCoverSvg,
  workLauraBotanicalsSvg,
  workStudioVotreSvg,
  workCafeMerSvg,
  workLuminaAtelierSvg,
  svgToDataUri
} from '../../assets';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from '../common/SectionHeading';
import { Sticker } from '../common/Sticker';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '../common/Button';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const imageMap: Record<string, string> = {
    workMimadaCover: svgToDataUri(workMimadaCoverSvg),
    workLauraBotanicals: svgToDataUri(workLauraBotanicalsSvg),
    workStudioVotre: svgToDataUri(workStudioVotreSvg),
    workCafeMer: svgToDataUri(workCafeMerSvg),
    workLuminaAtelier: svgToDataUri(workLuminaAtelierSvg)
  };

  return (
    <section id="work" className="relative py-20 sm:py-28 md:py-36 bg-[#E9E2D5] overflow-hidden">
      {/* Paper grain */}
      <div className="absolute inset-0 bg-paper-grain opacity-60 pointer-events-none" />

      {/* Decorative scrap background */}
      <div className="absolute top-16 right-12 hidden lg:block opacity-30 pointer-events-none">
        <Sticker type="wax-seal" rotation={-10} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            tag="Portfolio 2025 — 2026"
            scriptTag="brand curation"
            title="Selected Work"
            subtitle="Visual identities, feed architectures, and art direction with commercial impact."
          />

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#315D7E] uppercase tracking-wider">
              {projectsData.length} Featured Projects
            </span>
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              imageSrc={imageMap[project.imageKey]}
              index={index}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#12395D]/85 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#F5F1E8] p-6 sm:p-8 shadow-2xl border border-[#E9E2D5] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
              className="absolute top-5 right-5 p-2 text-[#173B5D] hover:bg-[#E9E2D5] rounded-xs border border-[#315D7E]/30"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#E9E2D5] border border-[#315D7E]/20 mb-6">
              <img
                src={imageMap[selectedProject.imageKey]}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#315D7E]/20 pb-3">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#315D7E]">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <span className="font-mono text-xs text-[#6F8DA5]">
                  Client: {selectedProject.client}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#173B5D]">
                {selectedProject.title}
              </h3>

              <p className="font-body text-sm sm:text-base text-[#315D7E] leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <p className="font-body text-xs font-bold uppercase tracking-wider text-[#173B5D] mb-2">
                  Deliverables crafted:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#E9E2D5] text-[#173A5D] text-xs font-body border border-[#315D7E]/20"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#315D7E]/20 flex items-center justify-between gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setSelectedProject(null);
                    const contactEl = document.querySelector('#contact');
                    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Inquire About a Similar Project
                </Button>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="font-body text-xs uppercase tracking-wider text-[#315D7E] hover:underline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

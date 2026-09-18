import React from 'react';
import { Tape } from './Tape';

interface PolaroidProps {
  imageSrc: string;
  alt: string;
  caption?: string;
  subcaption?: string;
  rotation?: number; // e.g. -2, 1.5, -1
  tape?: boolean;
  tapeVariant?: 'cream' | 'navy' | 'kraft';
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
  pinned?: boolean;
}

export const Polaroid: React.FC<PolaroidProps> = ({
  imageSrc,
  alt,
  caption,
  subcaption,
  rotation = -1.5,
  tape = true,
  tapeVariant = 'cream',
  className = '',
  imageClassName = 'aspect-[4/5]',
  aspectRatio,
  pinned = false
}) => {
  return (
    <div
      className={`relative inline-block bg-[#F5F1E8] p-3 sm:p-4 pb-5 sm:pb-6 shadow-[0_12px_32px_rgba(18,57,93,0.12)] border border-[#E9E2D5] select-none transition-transform duration-300 hover:rotate-0 hover:shadow-[0_18px_40px_rgba(18,57,93,0.16)] ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`
      }}
    >
      {/* Tape on top */}
      {tape && !pinned && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <Tape variant={tapeVariant} rotation={-1.5} />
        </div>
      )}

      {/* Pinned pushpin element */}
      {pinned && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 w-4 h-4 rounded-full bg-[#C59B27] border border-[#F5F1E8] shadow-md flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#8A6A14]" />
        </div>
      )}

      {/* Image frame */}
      <div
        className={`relative overflow-hidden bg-[#E9E2D5] border border-[#315D7E]/10 ${
          aspectRatio || imageClassName
        }`}
      >
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
        />
        {/* Subtle photo vignette */}
        <div
          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(18,57,93,0.1)]"
          aria-hidden="true"
        />
      </div>

      {/* Handwritten Caption Area */}
      {(caption || subcaption) && (
        <div className="mt-3.5 sm:mt-4 text-center px-1">
          {caption && (
            <p className="font-script text-2xl sm:text-3xl text-[#173A5D] leading-tight tracking-wide">
              {caption}
            </p>
          )}
          {subcaption && (
            <p className="font-body text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#6F8DA5] mt-0.5">
              {subcaption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

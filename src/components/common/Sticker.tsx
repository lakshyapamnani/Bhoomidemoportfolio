import React from 'react';
import { postageStampSvg, postalCancellationSvg, waxSealSvg } from '../../assets';

interface StickerProps {
  type?: 'postage' | 'cancellation' | 'wax-seal' | 'badge' | 'label';
  text?: string;
  subtext?: string;
  className?: string;
  rotation?: number;
  variant?: 'navy' | 'cream' | 'blue';
}

export const Sticker: React.FC<StickerProps> = ({
  type = 'badge',
  text,
  subtext,
  className = '',
  rotation = 0,
  variant = 'cream'
}) => {
  if (type === 'postage') {
    return (
      <div
        className={`inline-block select-none filter drop-shadow-md transition-transform duration-300 hover:rotate-1 ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
        dangerouslySetInnerHTML={{ __html: postageStampSvg }}
        aria-hidden="true"
      />
    );
  }

  if (type === 'cancellation') {
    return (
      <div
        className={`inline-block select-none pointer-events-none opacity-80 ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
        dangerouslySetInnerHTML={{ __html: postalCancellationSvg }}
        aria-hidden="true"
      />
    );
  }

  if (type === 'wax-seal') {
    return (
      <div
        className={`inline-block select-none filter drop-shadow-lg ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
        dangerouslySetInnerHTML={{ __html: waxSealSvg }}
        aria-hidden="true"
      />
    );
  }

  if (type === 'label') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1 font-body text-[11px] font-semibold tracking-wider uppercase rounded-xs border shadow-xs select-none ${
          variant === 'navy'
            ? 'bg-[#173B5D] text-[#F5F1E8] border-[#315D7E]'
            : variant === 'blue'
            ? 'bg-[#315D7E] text-[#F5F1E8] border-[#6F8DA5]'
            : 'bg-[#E9E2D5] text-[#173A5D] border-[#315D7E]/30'
        } ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <span>{text}</span>
        {subtext && <span className="opacity-60 text-[9px]">• {subtext}</span>}
      </div>
    );
  }

  // Star badge default
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 font-display text-sm md:text-base font-semibold tracking-wide border shadow-xs select-none ${
        variant === 'navy'
          ? 'bg-[#12395D] text-[#F5F1E8] border-[#6F8DA5]/40'
          : 'bg-[#F5F1E8] text-[#173A5D] border-[#315D7E]/40'
      } ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        clipPath: 'polygon(0% 0%, 98% 2%, 100% 98%, 2% 100%)'
      }}
    >
      <span className="text-[#315D7E] font-serif">☆</span>
      <span>{text || 'Editorial Seal'}</span>
    </div>
  );
};

import React from 'react';

interface SectionHeadingProps {
  tag?: string;
  scriptTag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  scriptTag,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';

  const alignClass =
    align === 'center'
      ? 'text-center items-center'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {/* Top Metadata Tag or Script Accent */}
      {(tag || scriptTag) && (
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          {tag && (
            <span
              className={`font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-0.5 border ${
                isDark
                  ? 'text-[#E9E2D5] border-[#315D7E] bg-[#12395D]/60'
                  : 'text-[#315D7E] border-[#315D7E]/30 bg-[#E9E2D5]/70'
              }`}
            >
              {tag}
            </span>
          )}
          {scriptTag && (
            <span
              className={`font-script text-2xl sm:text-3xl ${
                isDark ? 'text-[#6F8DA5]' : 'text-[#315D7E]'
              }`}
            >
              {scriptTag}
            </span>
          )}
        </div>
      )}

      {/* Main Serif Headline */}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight ${
          isDark ? 'text-[#F5F1E8]' : 'text-[#173A5D]'
        }`}
      >
        {title}
      </h2>

      {/* Editorial Subtitle */}
      {subtitle && (
        <p
          className={`font-body text-sm sm:text-base md:text-lg mt-3 font-normal max-w-2xl leading-relaxed ${
            isDark ? 'text-[#E9E2D5]/80' : 'text-[#315D7E]'
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Delicate horizontal divider */}
      <div
        className={`w-16 h-[1px] mt-4 ${
          isDark ? 'bg-[#315D7E]' : 'bg-[#315D7E]/30'
        } ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

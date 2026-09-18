import React from 'react';

interface TapeProps {
  className?: string;
  variant?: 'cream' | 'navy' | 'kraft';
  rotation?: number; // degrees, e.g. -3, 2, 4
  width?: string;
  height?: string;
}

export const Tape: React.FC<TapeProps> = ({
  className = '',
  variant = 'cream',
  rotation = -2,
  width = 'w-24 sm:w-28',
  height = 'h-7 sm:h-8'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'navy':
        return 'bg-[#315D7E]/80 border-y border-dashed border-[#F5F1E8]/30 shadow-xs text-[#F5F1E8]/70';
      case 'kraft':
        return 'bg-[#C8BA9C]/80 border-y border-dashed border-[#173A5D]/20 shadow-xs text-[#173A5D]/70';
      case 'cream':
      default:
        return 'bg-[#F5F1E8]/85 border-y border-dashed border-[#315D7E]/25 shadow-xs text-[#315D7E]/70';
    }
  };

  return (
    <div
      className={`pointer-events-none absolute z-20 backdrop-blur-[1px] select-none ${width} ${height} ${getVariantStyles()} ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        clipPath:
          'polygon(0% 12%, 3% 0%, 97% 4%, 100% 15%, 97% 92%, 94% 100%, 4% 96%, 0% 88%)'
      }}
      aria-hidden="true"
    >
      {/* Subtle fiber line texture */}
      <div className="w-full h-full opacity-20 flex items-center justify-between px-2 overflow-hidden text-[7px] tracking-widest uppercase font-mono">
        <span>• • •</span>
        <span>• • •</span>
      </div>
    </div>
  );
};

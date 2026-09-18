import React from 'react';
import { Tape } from './Tape';

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'paper' | 'cream' | 'navy' | 'blue';
  rotation?: number; // subtle angle e.g. -1, 0, 1
  tape?: boolean;
  tapePosition?: 'top' | 'top-left' | 'top-right';
  tapeVariant?: 'cream' | 'navy' | 'kraft';
  borderStyle?: 'solid' | 'dashed' | 'none';
  onClick?: () => void;
  id?: string;
}

export const PaperCard: React.FC<PaperCardProps> = ({
  children,
  className = '',
  variant = 'paper',
  rotation = 0,
  tape = false,
  tapePosition = 'top',
  tapeVariant = 'cream',
  borderStyle = 'solid',
  onClick,
  id
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'navy':
        return 'bg-[#173B5D] text-[#F5F1E8] shadow-[0_8px_30px_rgba(18,57,93,0.18)] border-[#315D7E]/50';
      case 'blue':
        return 'bg-[#315D7E] text-[#F5F1E8] shadow-[0_8px_25px_rgba(18,57,93,0.14)] border-[#6F8DA5]/40';
      case 'cream':
        return 'bg-[#E9E2D5] text-[#173A5D] shadow-[0_6px_22px_rgba(23,58,93,0.07)] border-[#315D7E]/20';
      case 'paper':
      default:
        return 'bg-[#F5F1E8] text-[#173A5D] shadow-[0_8px_25px_rgba(23,58,93,0.08)] border-[#E9E2D5]';
    }
  };

  const getBorderClasses = () => {
    switch (borderStyle) {
      case 'dashed':
        return 'border border-dashed';
      case 'none':
        return 'border-0';
      case 'solid':
      default:
        return 'border';
    }
  };

  const getTapePlacement = () => {
    switch (tapePosition) {
      case 'top-left':
        return '-top-3 left-4';
      case 'top-right':
        return '-top-3 right-4';
      case 'top':
      default:
        return '-top-3 left-1/2 -translate-x-1/2';
    }
  };

  return (
    <div
      id={id}
      onClick={onClick}
      className={`relative transition-all duration-300 ${getVariantStyles()} ${getBorderClasses()} ${className}`}
      style={{
        transform: rotation ? `rotate(${rotation}deg)` : undefined
      }}
    >
      {/* Optional Washi Tape */}
      {tape && (
        <div className={`absolute z-20 ${getTapePlacement()}`}>
          <Tape
            variant={tapeVariant}
            rotation={tapePosition === 'top-left' ? -4 : tapePosition === 'top-right' ? 3 : -1}
          />
        </div>
      )}

      {/* Subtle fiber grain overlay */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply ${
          variant === 'navy' || variant === 'blue' ? 'bg-dark-paper-grain' : 'bg-paper-grain'
        }`}
        aria-hidden="true"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

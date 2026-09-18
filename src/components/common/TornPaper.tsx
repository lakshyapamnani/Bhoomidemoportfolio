import React from 'react';

interface TornPaperProps {
  position?: 'top' | 'bottom';
  fillColor?: string; // e.g. '#F5F1E8' or '#173B5D' or '#12395D'
  className?: string;
  shadow?: boolean;
}

export const TornPaper: React.FC<TornPaperProps> = ({
  position = 'top',
  fillColor = '#F5F1E8',
  className = '',
  shadow = true
}) => {
  // Torn paper SVG path generator for realistic organic fiber rips
  const tornEdgePath =
    'M0,24 Q25,8 55,20 T110,6 T165,22 T220,10 T275,25 T330,8 T385,22 T440,9 T495,24 T550,8 T605,22 T660,7 T715,24 T770,11 T825,25 T880,9 T935,23 T990,8 T1045,24 T1100,10 T1155,25 T1210,8 T1265,23 T1320,11 T1375,24 T1430,9 T1485,23 T1540,8 T1595,24 T1650,10 T1705,25 T1760,8 T1815,23 T1870,11 T1920,22 L1920,40 L0,40 Z';

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none z-10 ${
        position === 'top' ? '-mb-[1px]' : '-mt-[1px]'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 40"
        preserveAspectRatio="none"
        className={`w-full h-7 sm:h-9 md:h-12 block ${
          position === 'bottom' ? 'rotate-180' : ''
        } ${shadow ? 'drop-shadow-[0_-3px_5px_rgba(18,57,93,0.12)]' : ''}`}
      >
        {/* Subtle fiber rim underneath */}
        <path
          d={tornEdgePath}
          fill={fillColor}
          opacity="0.98"
        />
        {/* Micro-fiber stroke */}
        <path
          d={tornEdgePath}
          fill="none"
          stroke="#E9E2D5"
          strokeWidth="0.8"
          strokeDasharray="4 2"
          opacity="0.7"
        />
      </svg>
    </div>
  );
};

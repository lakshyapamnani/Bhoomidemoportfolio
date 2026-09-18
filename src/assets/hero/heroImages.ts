/**
 * Hero Mountain / Sky Atmospheric Landscape
 */

export const heroLandscapeBg = `
<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyGrad" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#12395D" />
      <stop offset="45%" stop-color="#315D7E" />
      <stop offset="75%" stop-color="#6F8DA5" />
      <stop offset="95%" stop-color="#E9E2D5" />
      <stop offset="100%" stop-color="#F5F1E8" />
    </linearGradient>
    <linearGradient id="peakGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#315D7E" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#173B5D" />
    </linearGradient>
    <linearGradient id="peakGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#6F8DA5" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#315D7E" />
    </linearGradient>
    <radialGradient id="sunGlow" cx="65%" cy="35%" r="45%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.25" />
      <stop offset="50%" stop-color="#E9E2D5" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#12395D" stop-opacity="0" />
    </radialGradient>
    <filter id="mistFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" />
      <feDisplacementMap in="SourceGraphic" scale="25" />
    </filter>
  </defs>

  <!-- Sky Canvas -->
  <rect width="1920" height="1080" fill="url(#skyGrad)" />
  <rect width="1920" height="1080" fill="url(#sunGlow)" />

  <!-- Distant mountain silhouette layer 1 -->
  <path d="M0 680 L180 570 L340 640 L520 500 L760 620 L980 460 L1220 580 L1460 480 L1700 610 L1920 510 L1920 1080 L0 1080 Z" fill="#6F8DA5" opacity="0.35" />

  <!-- Mountain layer 2 -->
  <path d="M0 760 L220 610 L440 710 L680 540 L910 680 L1150 510 L1390 660 L1620 550 L1850 690 L1920 640 L1920 1080 L0 1080 Z" fill="url(#peakGrad2)" opacity="0.75" />

  <!-- Foreground Alpine Ridge -->
  <path d="M0 860 L190 710 L380 810 L590 650 L840 790 L1080 620 L1320 780 L1580 670 L1790 800 L1920 730 L1920 1080 L0 1080 Z" fill="url(#peakGrad1)" />

  <!-- Ethereal low-lying mist lines -->
  <ellipse cx="600" cy="720" rx="700" ry="80" fill="#E9E2D5" opacity="0.22" filter="blur(35px)" />
  <ellipse cx="1400" cy="760" rx="800" ry="90" fill="#F5F1E8" opacity="0.18" filter="blur(40px)" />
  
  <!-- Subtle star/grain overlay -->
  <circle cx="450" cy="180" r="1.5" fill="#FFFFFF" opacity="0.5" />
  <circle cx="820" cy="220" r="1" fill="#FFFFFF" opacity="0.4" />
  <circle cx="1280" cy="150" r="1.5" fill="#FFFFFF" opacity="0.6" />
  <circle cx="1590" cy="280" r="1" fill="#FFFFFF" opacity="0.4" />
</svg>
`;

export const envelopeScrapSvg = `
<svg width="400" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="envShadow" x="-10" y="-5" width="420" height="300" filterUnits="userSpaceOnUse">
      <feDropShadow dx="3" dy="8" stdDeviation="8" flood-color="#12395D" flood-opacity="0.15" />
    </filter>
    <linearGradient id="envGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5F1E8" />
      <stop offset="100%" stop-color="#E9E2D5" />
    </linearGradient>
  </defs>
  <!-- Envelope body -->
  <rect x="10" y="10" width="380" height="250" rx="3" fill="url(#envGrad)" stroke="#315D7E" stroke-opacity="0.25" stroke-width="1" filter="url(#envShadow)" />
  <!-- Envelope back flap fold lines -->
  <path d="M10 10 L200 150 L390 10" stroke="#315D7E" stroke-opacity="0.3" stroke-width="1.2" stroke-dasharray="2 1" />
  <path d="M10 260 L160 120" stroke="#315D7E" stroke-opacity="0.2" stroke-width="1" />
  <path d="M390 260 L240 120" stroke="#315D7E" stroke-opacity="0.2" stroke-width="1" />
  <!-- Vintage airmail border on left edge -->
  <g opacity="0.4">
    <rect x="12" y="12" width="6" height="14" fill="#315D7E" />
    <rect x="12" y="30" width="6" height="14" fill="#E9E2D5" />
    <rect x="12" y="48" width="6" height="14" fill="#173B5D" />
    <rect x="12" y="66" width="6" height="14" fill="#6F8DA5" />
  </g>
</svg>
`;

/**
 * Decorative Scrapbook SVG Stickers & Stamps
 */

export const postageStampSvg = `
<svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="stampShadow" x="-10" y="-10" width="140" height="170" filterUnits="userSpaceOnUse">
      <feDropShadow dx="1" dy="3" stdDeviation="3" flood-color="#12395D" flood-opacity="0.18" />
    </filter>
    <pattern id="serrated" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="6" cy="0" r="2.5" fill="#F5F1E8" />
    </pattern>
  </defs>
  <!-- Stamp body with cream tone -->
  <rect x="8" y="8" width="104" height="134" rx="2" fill="#E9E2D5" stroke="#315D7E" stroke-width="1.5" stroke-dasharray="4 2" />
  <rect x="14" y="14" width="92" height="122" fill="#173B5D" />
  
  <!-- Stamp graphic: mountain / sun silhouette -->
  <circle cx="60" cy="55" r="18" fill="#E9E2D5" opacity="0.3" />
  <path d="M26 100 L48 68 L64 88 L78 72 L94 100 Z" fill="#6F8DA5" />
  <path d="M42 100 L58 78 L72 96 L80 86 L94 100 Z" fill="#315D7E" />
  
  <text x="60" y="118" font-family="'Cormorant Garamond', Georgia, serif" font-size="10" fill="#F5F1E8" text-anchor="middle" letter-spacing="1">PORTFOLIO</text>
  <text x="60" y="128" font-family="'DM Sans', sans-serif" font-size="6.5" fill="#6F8DA5" text-anchor="middle" letter-spacing="2">2026 • 50¢</text>
</svg>
`;

export const postalCancellationSvg = `
<svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Double circle ink cancel mark -->
  <circle cx="45" cy="50" r="38" stroke="#315D7E" stroke-width="1.5" opacity="0.7" stroke-dasharray="120 4" />
  <circle cx="45" cy="50" r="30" stroke="#315D7E" stroke-width="0.8" opacity="0.6" />
  <text x="45" y="42" font-family="'DM Sans', sans-serif" font-size="7" fill="#173A5D" text-anchor="middle" font-weight="600" letter-spacing="1.5" opacity="0.75">ONTARIO • CAN</text>
  <text x="45" y="54" font-family="'DM Sans', sans-serif" font-size="8.5" fill="#173A5D" text-anchor="middle" font-weight="700" letter-spacing="1" opacity="0.85">18 • IX • 26</text>
  <text x="45" y="64" font-family="'Cormorant Garamond', Georgia, serif" font-size="7.5" font-style="italic" fill="#315D7E" text-anchor="middle" opacity="0.75">Special Edition</text>
  
  <!-- Wavy postmark lines -->
  <path d="M85 35 Q100 25 115 35 T145 35 T175 35" stroke="#315D7E" stroke-width="1.2" opacity="0.6" fill="none" />
  <path d="M85 45 Q100 35 115 45 T145 45 T175 45" stroke="#315D7E" stroke-width="1.2" opacity="0.6" fill="none" />
  <path d="M85 55 Q100 45 115 55 T145 55 T175 55" stroke="#315D7E" stroke-width="1.2" opacity="0.6" fill="none" />
  <path d="M85 65 Q100 55 115 65 T145 65 T175 65" stroke="#315D7E" stroke-width="1.2" opacity="0.6" fill="none" />
</svg>
`;

export const waxSealSvg = `
<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sealGrad" cx="40%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#315D7E" />
      <stop offset="60%" stop-color="#173B5D" />
      <stop offset="100%" stop-color="#12395D" />
    </radialGradient>
    <filter id="sealDrop" x="-5" y="-5" width="100" height="100" filterUnits="userSpaceOnUse">
      <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000" flood-opacity="0.25" />
    </filter>
  </defs>
  <!-- Irregular organic wax perimeter -->
  <path d="M45 5 C62 4, 78 12, 83 26 C88 40, 85 56, 78 69 C71 82, 54 87, 40 85 C26 83, 10 75, 6 60 C2 45, 8 28, 20 16 C32 4, 38 6, 45 5 Z" fill="url(#sealGrad)" filter="url(#sealDrop)" />
  <!-- Inner rim -->
  <circle cx="45" cy="46" r="28" stroke="#6F8DA5" stroke-width="1" opacity="0.4" stroke-dasharray="2 1" />
  <!-- Monogram BD -->
  <text x="45" y="53" font-family="'Cormorant Garamond', serif" font-size="22" font-weight="600" font-style="italic" fill="#F5F1E8" text-anchor="middle" letter-spacing="1">BD</text>
  <text x="45" y="64" font-family="'DM Sans', sans-serif" font-size="5.5" fill="#E9E2D5" text-anchor="middle" letter-spacing="2">EST. 2026</text>
</svg>
`;

/**
 * Editorial Portrait Asset for About Section
 * Realistic stylish digital illustration with film grain, warm tones, and editorial lighting.
 */

export const jacquelinePortraitSvg = `
<svg width="600" height="750" viewBox="0 0 600 750" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="studioWall" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E9E2D5" />
      <stop offset="60%" stop-color="#DCD4C4" />
      <stop offset="100%" stop-color="#C5BCAE" />
    </linearGradient>
    <linearGradient id="blazerGrad" x1="20%" y1="10%" x2="80%" y2="90%">
      <stop offset="0%" stop-color="#315D7E" />
      <stop offset="70%" stop-color="#173B5D" />
      <stop offset="100%" stop-color="#12395D" />
    </linearGradient>
    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCEEE6" />
      <stop offset="50%" stop-color="#F3DACD" />
      <stop offset="100%" stop-color="#E5C3B2" />
    </linearGradient>
    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2C201A" />
      <stop offset="60%" stop-color="#1A130F" />
      <stop offset="100%" stop-color="#0F0C0A" />
    </linearGradient>
    <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Studio Background -->
  <rect width="600" height="750" fill="url(#studioWall)" />

  <!-- Window Sunlight Cast (Artistic Diagonal Glow) -->
  <polygon points="120,0 320,0 220,750 0,750" fill="#FFFFFF" opacity="0.18" filter="url(#softGlow)" />
  
  <!-- Architectural Studio Column Shadow in Background -->
  <rect x="420" y="0" width="180" height="750" fill="#173B5D" opacity="0.08" />

  <!-- Shoulders / Chic Navy Editorial Blazer -->
  <path d="M110 540 C140 440, 230 420, 300 420 C370 420, 460 440, 490 540 L540 750 L60 750 Z" fill="url(#blazerGrad)" />
  
  <!-- Inner Linen Blouse (Warm Cream) -->
  <path d="M260 420 L300 520 L340 420 Z" fill="#F5F1E8" />
  <path d="M280 430 L300 510 L320 430 Z" fill="#E9E2D5" opacity="0.6" />
  <!-- Delicate gold pendant necklace -->
  <path d="M285 450 Q300 485 315 450" stroke="#C59B27" stroke-width="1.5" fill="none" />
  <circle cx="300" cy="485" r="3.5" fill="#C59B27" />

  <!-- Neck -->
  <path d="M265 330 C265 370, 275 410, 300 410 C325 410, 335 370, 335 330 Z" fill="url(#skinGrad)" />
  <path d="M270 360 C285 385, 315 385, 330 360" fill="#D3AFA0" opacity="0.3" />

  <!-- Long Brunette Wavy Hair (Back Layer) -->
  <path d="M190 260 C170 380, 160 520, 210 590 C225 610, 245 540, 250 480 C235 390, 240 310, 260 260 Z" fill="url(#hairGrad)" />
  <path d="M410 260 C430 380, 440 520, 390 590 C375 610, 355 540, 350 480 C365 390, 360 310, 340 260 Z" fill="url(#hairGrad)" />

  <!-- Head & Face Contours -->
  <ellipse cx="300" cy="270" rx="78" ry="98" fill="url(#skinGrad)" />

  <!-- Hair Forefront waves -->
  <path d="M222 250 C210 180, 260 130, 300 130 C350 130, 390 170, 380 250 C370 190, 335 155, 300 155 C265 155, 235 190, 222 250 Z" fill="url(#hairGrad)" />
  <!-- Side sweeps -->
  <path d="M222 240 C215 310, 205 380, 240 440 C242 410, 235 340, 240 280 Z" fill="#1A130F" />
  <path d="M378 240 C385 310, 395 380, 360 440 C358 410, 365 340, 360 280 Z" fill="#1A130F" />

  <!-- Eyebrows (Sculpted & Elegant) -->
  <path d="M255 242 Q272 236 288 242" stroke="#2C201A" stroke-width="2.2" stroke-linecap="round" fill="none" />
  <path d="M312 242 Q328 236 345 242" stroke="#2C201A" stroke-width="2.2" stroke-linecap="round" fill="none" />

  <!-- Eyes & Lashes -->
  <path d="M258 256 Q272 250 286 256" stroke="#1A130F" stroke-width="2" fill="none" />
  <circle cx="272" cy="256" r="4.5" fill="#3A271D" />
  <circle cx="273.5" cy="254.5" r="1.5" fill="#FFFFFF" />

  <path d="M314 256 Q328 250 342 256" stroke="#1A130F" stroke-width="2" fill="none" />
  <circle cx="328" cy="256" r="4.5" fill="#3A271D" />
  <circle cx="329.5" cy="254.5" r="1.5" fill="#FFFFFF" />

  <!-- Nose -->
  <path d="M299 254 L296 285 Q300 290 304 285" stroke="#CCA795" stroke-width="1.8" stroke-linecap="round" fill="none" />

  <!-- Warm Rosy Blush -->
  <circle cx="258" cy="285" r="18" fill="#E89B85" opacity="0.22" filter="blur(6px)" />
  <circle cx="342" cy="285" r="18" fill="#E89B85" opacity="0.22" filter="blur(6px)" />

  <!-- Lips (Terracotta Nude) -->
  <path d="M284 316 Q300 312 316 316 Q300 326 284 316 Z" fill="#B86D61" />
  <path d="M287 316 Q300 321 313 316" stroke="#8A463B" stroke-width="0.8" fill="none" />

  <!-- Chic Gold Hoop Earring -->
  <circle cx="224" cy="285" r="10" stroke="#C59B27" stroke-width="2.2" fill="none" />

  <!-- Vintage Camera Strap Accent on Shoulder -->
  <path d="M410 460 L490 650" stroke="#2C201A" stroke-width="12" opacity="0.85" stroke-linecap="square" />
  <path d="M410 460 L490 650" stroke="#DCD4C4" stroke-width="3" stroke-dasharray="6 4" fill="none" />

  <!-- Hand-drawn artist signature bottom watermark -->
  <text x="50" y="715" font-family="'Allura', cursive" font-size="28" fill="#173B5D" opacity="0.35">Bhoomi Dunka</text>
  <text x="50" y="732" font-family="'DM Sans', sans-serif" font-size="9" font-weight="600" letter-spacing="2" fill="#173B5D" opacity="0.45">STUDIO PORTRAIT • 2026</text>
</svg>
`;

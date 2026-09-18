/**
 * Content Execution Category Visuals (5 Formats)
 */

export const execBeforeAfterSvg = `
<svg width="450" height="600" viewBox="0 0 450 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="splitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E9E2D5" />
      <stop offset="50%" stop-color="#E9E2D5" />
      <stop offset="50.1%" stop-color="#173B5D" />
      <stop offset="100%" stop-color="#12395D" />
    </linearGradient>
  </defs>
  <rect width="450" height="600" fill="url(#splitGrad)" />

  <!-- Before side (Left) -->
  <text x="110" y="70" font-family="'DM Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="2" fill="#173A5D" text-anchor="middle">ANTES</text>
  <path d="M60 160 C50 260, 40 380, 80 460 C110 490, 160 460, 170 380 C180 300, 170 200, 150 160 Z" fill="#6B5B4D" />
  <circle cx="112" cy="190" r="30" fill="#E2DAC9" />
  <!-- Dull hair tone badge -->
  <rect x="35" y="520" width="150" height="36" rx="4" fill="#173A5D" />
  <text x="110" y="542" font-family="'DM Sans', sans-serif" font-size="10" font-weight="600" letter-spacing="1" fill="#F5F1E8" text-anchor="middle">Tono desigual / opaco</text>

  <!-- Divider line -->
  <line x1="225" y1="0" x2="225" y2="600" stroke="#F5F1E8" stroke-width="2" stroke-dasharray="8 4" />

  <!-- After side (Right) -->
  <text x="335" y="70" font-family="'DM Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="2" fill="#F5F1E8" text-anchor="middle">DESPUÉS</text>
  <path d="M280 150 C260 270, 250 400, 290 500 C340 520, 390 480, 410 390 C420 290, 400 190, 370 150 Z" fill="#CBB18B" />
  <circle cx="335" cy="180" r="32" fill="#F3DACD" />
  <!-- Gloss highlight -->
  <path d="M310 240 Q345 360 330 460" stroke="#FFF7EC" stroke-width="6" opacity="0.8" stroke-linecap="round" fill="none" />
  <rect x="260" y="520" width="150" height="36" rx="4" fill="#315D7E" />
  <text x="335" y="542" font-family="'DM Sans', sans-serif" font-size="10" font-weight="600" letter-spacing="1" fill="#F5F1E8" text-anchor="middle">Honey Melt + Gloss 3D</text>
</svg>
`;

export const execTrendsSvg = `
<svg width="450" height="600" viewBox="0 0 450 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="600" fill="#315D7E" />
  
  <!-- Video Reel frame UI -->
  <rect x="30" y="40" width="390" height="520" rx="16" fill="#173B5D" stroke="#6F8DA5" stroke-width="1.5" />
  
  <!-- Audio waveform / trending note -->
  <circle cx="75" cy="85" r="16" fill="#12395D" />
  <path d="M72 80 L72 90 M75 76 L75 94 M78 82 L78 88" stroke="#F5F1E8" stroke-width="2" stroke-linecap="round" />
  <text x="100" y="90" font-family="'DM Sans', sans-serif" font-size="11" font-weight="600" fill="#E9E2D5">Trending Audio • Original Remix</text>

  <!-- Big editorial hook card -->
  <rect x="55" y="160" width="340" height="150" rx="8" fill="#F5F1E8" />
  <text x="75" y="200" font-family="'DM Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="2" fill="#315D7E">POV SALÓN</text>
  <text x="75" y="240" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="600" fill="#173A5D">"Cuando tu clienta dice:</text>
  <text x="75" y="275" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="600" font-style="italic" fill="#315D7E">hazme lo que tú quieras"</text>

  <!-- Reels side action buttons -->
  <circle cx="380" cy="380" r="18" fill="#12395D" opacity="0.6" />
  <circle cx="380" cy="430" r="18" fill="#12395D" opacity="0.6" />
  <circle cx="380" cy="480" r="18" fill="#12395D" opacity="0.6" />

  <rect x="55" y="490" width="220" height="34" rx="4" fill="#12395D" />
  <text x="70" y="512" font-family="'DM Sans', sans-serif" font-size="11" font-weight="600" fill="#F5F1E8">128K Views • +340 Bookings</text>
</svg>
`;

export const execRelatableSvg = `
<svg width="450" height="600" viewBox="0 0 450 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="600" fill="#E9E2D5" />
  
  <!-- Aesthetic meme/tweet card layout -->
  <rect x="40" y="80" width="370" height="440" rx="12" fill="#F5F1E8" stroke="#315D7E" stroke-opacity="0.2" stroke-width="1.5" />

  <!-- Avatar & User -->
  <circle cx="85" cy="130" r="22" fill="#173B5D" />
  <text x="85" y="136" font-family="'Cormorant Garamond', serif" font-size="16" font-weight="600" fill="#F5F1E8" text-anchor="middle">M</text>
  <text x="120" y="125" font-family="'DM Sans', sans-serif" font-size="14" font-weight="700" fill="#173A5D">Mimada Beauty</text>
  <text x="120" y="142" font-family="'DM Sans', sans-serif" font-size="11" fill="#6F8DA5">@mimadabeauty • Ontario</text>

  <text x="65" y="210" font-family="'Cormorant Garamond', Georgia, serif" font-size="24" font-weight="600" fill="#173A5D">Terapia de salón:</text>
  <text x="65" y="250" font-family="'DM Sans', sans-serif" font-size="16" line-height="24" fill="#315D7E">Vienes por un corte de puntas y terminas contándole tu vida entera a tu estilista mientras el café está caliente.</text>
  
  <text x="65" y="340" font-family="'Cormorant Garamond', Georgia, serif" font-size="18" font-style="italic" fill="#173B5D">Confirmen en los comentarios si también es su lugar seguro ☕️✨</text>

  <!-- Engagement stats -->
  <line x1="65" y1="410" x2="385" y2="410" stroke="#E9E2D5" stroke-width="1.5" />
  <text x="65" y="445" font-family="'DM Sans', sans-serif" font-size="12" font-weight="600" fill="#173A5D">1,420 Likes • 288 Shares • 94 Saves</text>
</svg>
`;

export const execAestheticSvg = `
<svg width="450" height="600" viewBox="0 0 450 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aesBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#173B5D" />
      <stop offset="100%" stop-color="#315D7E" />
    </linearGradient>
  </defs>
  <rect width="450" height="600" fill="url(#aesBg)" />

  <!-- Collage of aesthetic textures & typography -->
  <rect x="40" y="50" width="170" height="240" fill="#F5F1E8" />
  <text x="55" y="160" font-family="'Cormorant Garamond', Georgia, serif" font-size="32" font-style="italic" fill="#173A5D">Elegance</text>
  <text x="55" y="185" font-family="'DM Sans', sans-serif" font-size="10" letter-spacing="2" fill="#315D7E">PALETTE NO. 04</text>

  <rect x="230" y="50" width="180" height="150" fill="#6F8DA5" opacity="0.5" />
  <circle cx="320" cy="125" r="40" fill="#E9E2D5" opacity="0.8" />

  <rect x="40" y="310" width="370" height="230" fill="#E9E2D5" />
  <rect x="60" y="330" width="330" height="150" fill="#173B5D" />
  <text x="80" y="410" font-family="'Cormorant Garamond', Georgia, serif" font-size="36" font-weight="500" fill="#F5F1E8">Visual Identity</text>
  <text x="80" y="435" font-family="'DM Sans', sans-serif" font-size="11" letter-spacing="2" fill="#6F8DA5">CONSISTENCY &amp; HARMONY</text>
  
  <text x="60" y="515" font-family="'DM Sans', sans-serif" font-size="11" font-weight="600" letter-spacing="1.5" fill="#173A5D">COLOR STORIES • ARCHITECTURAL BALANCE</text>
</svg>
`;

export const execBehindScenesSvg = `
<svg width="450" height="600" viewBox="0 0 450 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="600" fill="#12395D" />

  <rect x="35" y="45" width="380" height="510" fill="#F5F1E8" />
  
  <!-- Mixing bowls, brushes, formulation notes -->
  <rect x="55" y="65" width="340" height="280" fill="#E9E2D5" />
  <circle cx="160" cy="200" r="55" fill="#D6CEBE" stroke="#173B5D" stroke-width="2" />
  <circle cx="160" cy="200" r="42" fill="#8C7355" />
  <line x1="120" y1="240" x2="220" y2="140" stroke="#173B5D" stroke-width="6" stroke-linecap="round" />
  
  <circle cx="280" cy="210" r="45" fill="#D6CEBE" stroke="#173B5D" stroke-width="2" />
  <circle cx="280" cy="210" r="34" fill="#C59B27" opacity="0.8" />

  <!-- Hand-annotated formula card -->
  <text x="55" y="380" font-family="'Allura', cursive" font-size="32" fill="#173A5D">Detrás de cada fórmula</text>
  <text x="55" y="415" font-family="'DM Sans', sans-serif" font-size="13" font-weight="600" fill="#315D7E">El proceso químico y artesanal de crear tonos a medida.</text>
  <text x="55" y="445" font-family="'DM Sans', sans-serif" font-size="12" fill="#6F8DA5">Genera autoridad técnica + transparencia que convierte seguidores en clientes de alta fidelidad.</text>

  <!-- Polaroid tape on top -->
  <rect x="180" y="30" width="90" height="24" fill="#315D7E" opacity="0.75" transform="rotate(2 180 30)" />
</svg>
`;

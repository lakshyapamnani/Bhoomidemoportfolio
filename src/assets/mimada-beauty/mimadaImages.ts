/**
 * Mimada Beauty Salon & Skincare Assets (Ontario, Canada)
 */

export const mimadaLogoAvatarSvg = `
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#E9E2D5" />
  <circle cx="100" cy="100" r="82" stroke="#173B5D" stroke-width="2" stroke-dasharray="3 2" />
  <text x="100" y="96" font-family="'Cormorant Garamond', Georgia, serif" font-size="34" font-weight="600" font-style="italic" fill="#173B5D" text-anchor="middle">M</text>
  <text x="100" y="118" font-family="'DM Sans', sans-serif" font-size="10" font-weight="600" letter-spacing="3" fill="#315D7E" text-anchor="middle">MIMADA</text>
  <text x="100" y="132" font-family="'DM Sans', sans-serif" font-size="7" letter-spacing="2" fill="#6F8DA5" text-anchor="middle">HAIR &amp; SKIN</text>
</svg>
`;

export const mimadaBalayagePostSvg = `
<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="salonBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5F1E8" />
      <stop offset="50%" stop-color="#E9E2D5" />
      <stop offset="100%" stop-color="#D6CEBE" />
    </linearGradient>
    <linearGradient id="hairBlonde" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A3423" />
      <stop offset="35%" stop-color="#7C5B3E" />
      <stop offset="70%" stop-color="#CBB18B" />
      <stop offset="100%" stop-color="#EEDCC0" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#salonBg)" />
  
  <!-- Modern aesthetic salon arch mirror -->
  <path d="M150 600 L150 180 C150 90, 450 90, 450 180 L450 600 Z" fill="#E2DAC9" stroke="#315D7E" stroke-opacity="0.2" stroke-width="3" />
  
  <!-- Client hair silhouette showing dimensional honey balayage waves -->
  <path d="M220 200 C200 320, 180 440, 210 580 C230 600, 260 520, 280 450 C290 530, 310 600, 340 590 C370 570, 350 460, 360 380 C390 480, 410 560, 430 520 C420 380, 410 280, 380 200 C340 160, 260 160, 220 200 Z" fill="url(#hairBlonde)" />
  
  <!-- Subtle balayage ribbon highlights -->
  <path d="M250 280 Q270 380 260 480" stroke="#F3E5CF" stroke-width="8" opacity="0.6" stroke-linecap="round" fill="none" />
  <path d="M300 260 Q320 370 310 490" stroke="#F3E5CF" stroke-width="12" opacity="0.75" stroke-linecap="round" fill="none" />
  <path d="M350 270 Q370 360 360 460" stroke="#F3E5CF" stroke-width="7" opacity="0.6" stroke-linecap="round" fill="none" />

  <!-- Salon branded editorial overlay card -->
  <rect x="50" y="490" width="500" height="80" rx="4" fill="#173B5D" fill-opacity="0.92" />
  <text x="80" y="525" font-family="'Cormorant Garamond', Georgia, serif" font-size="22" font-weight="600" fill="#F5F1E8">Honey Melt Balayage • Seamless Blend</text>
  <text x="80" y="548" font-family="'DM Sans', sans-serif" font-size="11" letter-spacing="1.5" fill="#E9E2D5" opacity="0.8">TÉCNICA DE ILUMINACIÓN PERSONALIZADA • MIMADA BEAUTY</text>
</svg>
`;

export const mimadaSkincarePostSvg = `
<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skinBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5F1E8" />
      <stop offset="100%" stop-color="#E2DAC9" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#skinBg)" />
  
  <!-- Aesthetic marble tray -->
  <rect x="80" y="100" width="440" height="400" rx="16" fill="#EDE6DA" stroke="#6F8DA5" stroke-opacity="0.3" stroke-width="2" />
  
  <!-- Glass serum bottle with dropper -->
  <rect x="180" y="220" width="90" height="180" rx="12" fill="#315D7E" fill-opacity="0.2" stroke="#173B5D" stroke-width="2" />
  <rect x="200" y="170" width="50" height="50" rx="4" fill="#C59B27" opacity="0.8" />
  <rect x="215" y="130" width="20" height="40" rx="3" fill="#173B5D" />
  <text x="225" y="315" font-family="'DM Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="2" fill="#173B5D" text-anchor="middle">GLOW</text>
  <text x="225" y="332" font-family="'Cormorant Garamond', serif" font-size="13" font-style="italic" fill="#315D7E" text-anchor="middle">Hydra-Serum</text>

  <!-- Botanical olive branch decoration -->
  <path d="M320 420 Q360 300 420 180" stroke="#6F8DA5" stroke-width="2.5" fill="none" />
  <ellipse cx="340" cy="380" rx="18" ry="8" fill="#6F8DA5" opacity="0.5" transform="rotate(-30 340 380)" />
  <ellipse cx="370" cy="320" rx="20" ry="9" fill="#315D7E" opacity="0.6" transform="rotate(25 370 320)" />
  <ellipse cx="395" cy="250" rx="18" ry="8" fill="#6F8DA5" opacity="0.5" transform="rotate(-20 395 250)" />

  <rect x="60" y="40" width="280" height="42" rx="4" fill="#173B5D" />
  <text x="75" y="66" font-family="'DM Sans', sans-serif" font-size="12" font-weight="600" letter-spacing="2" fill="#F5F1E8">RUTINA SKINCARE • PASO 03</text>
</svg>
`;

export const mimadaEducationalPostSvg = `
<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="600" fill="#173B5D" />
  
  <rect x="30" y="30" width="540" height="540" stroke="#6F8DA5" stroke-width="1.5" stroke-dasharray="6 4" />
  
  <text x="60" y="90" font-family="'DM Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="3" fill="#6F8DA5">GUÍA DE CUIDADO • MIMADA</text>
  
  <text x="60" y="160" font-family="'Cormorant Garamond', Georgia, serif" font-size="42" font-weight="600" fill="#F5F1E8">3 Errores que dañan</text>
  <text x="60" y="210" font-family="'Cormorant Garamond', Georgia, serif" font-size="42" font-weight="600" font-style="italic" fill="#E9E2D5">tu color en verano</text>

  <!-- Item 1 -->
  <circle cx="85" cy="290" r="16" fill="#315D7E" />
  <text x="85" y="295" font-family="'DM Sans', sans-serif" font-size="13" font-weight="700" fill="#F5F1E8" text-anchor="middle">1</text>
  <text x="120" y="285" font-family="'DM Sans', sans-serif" font-size="17" font-weight="600" fill="#F5F1E8">No usar protector térmico diario</text>
  <text x="120" y="306" font-family="'DM Sans', sans-serif" font-size="13" fill="#E9E2D5" opacity="0.8">Los rayos UV oxidan el matiz rubio en 7 días.</text>

  <!-- Item 2 -->
  <circle cx="85" cy="370" r="16" fill="#315D7E" />
  <text x="85" y="375" font-family="'DM Sans', sans-serif" font-size="13" font-weight="700" fill="#F5F1E8" text-anchor="middle">2</text>
  <text x="120" y="365" font-family="'DM Sans', sans-serif" font-size="17" font-weight="600" fill="#F5F1E8">Lavar con agua excesivamente caliente</text>
  <text x="120" y="386" font-family="'DM Sans', sans-serif" font-size="13" fill="#E9E2D5" opacity="0.8">Abre la cutícula y deslava los pigmentos fríos.</text>

  <!-- Item 3 -->
  <circle cx="85" cy="450" r="16" fill="#315D7E" />
  <text x="85" y="455" font-family="'DM Sans', sans-serif" font-size="13" font-weight="700" fill="#F5F1E8" text-anchor="middle">3</text>
  <text x="120" y="445" font-family="'DM Sans', sans-serif" font-size="17" font-weight="600" fill="#F5F1E8">Saltar el tratamiento de hidratación</text>
  <text x="120" y="466" font-family="'DM Sans', sans-serif" font-size="13" fill="#E9E2D5" opacity="0.8">La hebra decolorada requiere lípidos y proteínas.</text>

  <!-- Bottom carousel CTA -->
  <rect x="60" y="505" width="480" height="40" rx="4" fill="#315D7E" />
  <text x="300" y="530" font-family="'DM Sans', sans-serif" font-size="12" font-weight="600" letter-spacing="2" fill="#F5F1E8" text-anchor="middle">DESLIZA PARA VER EL PROTOCOLO COMPLETO →</text>
</svg>
`;

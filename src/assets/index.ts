export * from './textures/paperTexture';
export * from './decorations/stickers';
export * from './hero/heroImages';
export * from './about/aboutImages';
export * from './mimada-beauty/mimadaImages';
export * from './work/workImages';
export * from './content/executionImages';

// Helper to convert SVG string to data URI for use in <img> tags or backgrounds
export function svgToDataUri(svgString: string): string {
  const cleaned = svgString.trim();
  return `data:image/svg+xml;utf8,${encodeURIComponent(cleaned)}`;
}

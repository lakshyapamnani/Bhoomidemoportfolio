import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'mimada-beauty-project',
    title: 'Mimada Beauty',
    client: 'Mimada Beauty Salon',
    category: 'Social Media & Strategy',
    year: '2026',
    description:
      'Comprehensive digital repositioning for an Ontario boutique salon: art direction, editorial feed architecture, short-form reel production, and inbound booking funnels.',
    deliverables: ['Content Strategy', 'Reels Production', 'Editorial Copywriting', 'Art Direction'],
    imageKey: 'workMimadaCover',
    featured: true
  },
  {
    id: 'laura-botanicals',
    title: "L'Aura Botanicals",
    client: "L'Aura Botanique Paris / Montreal",
    category: 'Branding & Social Media',
    year: '2026',
    description:
      'Digital rollout for an organic botanical skincare line. Sensory focus on wild ingredients, linen minimalism, and sustainable packaging narratives.',
    deliverables: ['Visual Identity', 'Feed Guidelines', 'Packaging Design', 'Launch Campaign'],
    imageKey: 'workLauraBotanicals',
    featured: false
  },
  {
    id: 'studio-votre',
    title: 'Studio Vôtre',
    client: 'Vôtre Architecture & Interiors',
    category: 'Art Direction & Content',
    year: '2025',
    description:
      'Visual content strategy for a high-end interior architecture atelier. Storytelling focused on raw materiality, natural light, and bespoke residential sanctuaries.',
    deliverables: ['Content Curation', 'Architectural Reels', 'Authority Strategy', 'Digital Press Kit'],
    imageKey: 'workStudioVotre',
    featured: false
  },
  {
    id: 'cafe-mer',
    title: 'Café Mer',
    client: 'Café Mer Micro-Roastery',
    category: 'Graphic Identity & Social',
    year: '2025',
    description:
      'Community, morning rituals, and reverence for specialty coffee beans. Daily Story interactions, local neighborhood loyalty, and subtle maritime aesthetics.',
    deliverables: ['Graphic Design', 'Instagram Community', 'Merchandising', 'Editorial Menu'],
    imageKey: 'workCafeMer',
    featured: false
  },
  {
    id: 'lumina-atelier',
    title: 'Lumina Atelier',
    client: 'Lumina Fine Jewelry',
    category: 'Media Production & Grid',
    year: '2026',
    description:
      'Macro cinematography for artisanal fine jewelry forged in recycled gold. Aspirational content capturing light refractions, gem precision, and heirloom longevity.',
    deliverables: ['Macro Product Video', 'Jewelry Reels', 'Seasonal Feed', 'Digital Lookbook'],
    imageKey: 'workLuminaAtelier',
    featured: false
  }
];


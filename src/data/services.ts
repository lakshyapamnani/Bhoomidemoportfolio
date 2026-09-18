import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'social-media',
    number: '01',
    title: 'Social Media Management',
    subtitle: 'Community, consistency, and intentional growth',
    description:
      'Comprehensive management of digital channels with a focus on real engagement, brand narrative, and positioning. We treat every single post as an editorial piece.',
    deliverables: [
      'Monthly editorial content calendar',
      'Active community management and inbound engagement',
      'Persuasive copywriting with distinct brand voice',
      'In-depth analytics report and KPI optimization',
      'Art direction for short-form video & reels'
    ],
    tag: 'Presence & Community',
    iconName: 'Share2'
  },
  {
    id: 'diseno-grafico',
    number: '02',
    title: 'Graphic Design',
    subtitle: 'Memorable visual identity with an editorial finish',
    description:
      'Cohesive and distinctive visual foundations: custom graphic systems, characterful typography, harmonic color palettes, and collateral that elevates perceived brand value.',
    deliverables: [
      'Visual identity systems and brand guidelines',
      'Custom bespoke templates and asset kits',
      'Editorial design for carousels and guides',
      'Branding for packaging and tactile print pieces',
      'Creative art direction for seasonal campaigns'
    ],
    tag: 'Aesthetics & Value',
    iconName: 'Palette'
  },
  {
    id: 'estrategia-contenido',
    number: '03',
    title: 'Content Strategy',
    subtitle: 'Inbound marketing that educates, inspires, and converts',
    description:
      'Results-oriented planning where every piece of content addresses a specific funnel objective. We translate your business value proposition into compelling editorial media.',
    deliverables: [
      'Content pillar architecture and messaging framework',
      'Organic inbound conversion funnels',
      'Market audit and direct competitor landscape analysis',
      'Structured storytelling scripts for video',
      'Conversion pathways to direct bookings and sales'
    ],
    tag: 'Strategy & ROI',
    iconName: 'Compass'
  }
];


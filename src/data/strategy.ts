import { StrategyPillar } from '../types';

export const strategyPillarsData: StrategyPillar[] = [
  {
    id: 'educativo',
    number: '01',
    name: 'Educational',
    tagline: 'Establishes technical authority',
    description:
      'Solves genuine pain points, teaches post-treatment rituals, and demystifies complex processes. Solidifies the brand as an unquestioned authority in its niche.',
    icon: 'BookOpen',
    examples: [
      'Step-by-step at-home care rituals',
      'Common mistakes compromising longevity',
      'Scientific breakdown of botanical ingredients'
    ],
    percentage: '35%'
  },
  {
    id: 'relatable',
    number: '02',
    name: 'Relatable',
    tagline: 'Human empathy & shared truths',
    description:
      'Reveals everyday realities, shared industry humor, and candid honesty. Lowers defensive barriers and makes your target audience feel intimately understood.',
    icon: 'HeartHandshake',
    examples: [
      'Candid day-in-the-life observations',
      'Subtly elevated and tastefully adapted trends',
      'Reflections and relatable client moments'
    ],
    percentage: '25%'
  },
  {
    id: 'aspiracional',
    number: '03',
    name: 'Aspirational',
    tagline: 'Desirability & visual standards',
    description:
      'Elevates brand perception through luminous photography, pristine styling, and aspirational results that project the serene lifestyle your clients crave.',
    icon: 'Sparkles',
    examples: [
      'High-contrast dramatic transformations',
      'Sensory product textures and macro still-lifes',
      'Curated moodboards and calming atmospheres'
    ],
    percentage: '25%'
  },
  {
    id: 'comunidad',
    number: '04',
    name: 'Community',
    tagline: 'Belonging & two-way dialogue',
    description:
      'Two-way conversational spaces where your audience transitions from passive viewers into loyal advocates. Cultivates long-term retention and organic referral.',
    icon: 'Users',
    examples: [
      'Interactive Q&A open mic Story sessions',
      'Client testimonials and personal journeys',
      'Spotlight features and UGC curation'
    ],
    percentage: '15%'
  }
];


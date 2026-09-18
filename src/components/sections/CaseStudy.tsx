import React, { useState } from 'react';
import {
  CheckCircle2,
  TrendingUp,
  Users,
  Calendar,
  Sparkles,
  Grid3X3,
  Film,
  Bookmark,
  Heart,
  MessageCircle,
  Send,
  MoreHorizontal,
  ChevronRight
} from 'lucide-react';
import { mimadaBeautyCaseStudy } from '../../data/caseStudies';
import {
  mimadaLogoAvatarSvg,
  mimadaBalayagePostSvg,
  mimadaSkincarePostSvg,
  mimadaEducationalPostSvg,
  svgToDataUri
} from '../../assets';
import { Sticker } from '../common/Sticker';
import { Tape } from '../common/Tape';
import { PaperCard } from '../common/PaperCard';

export const CaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'grid' | 'reels'>('grid');
  const [activePostIndex, setActivePostIndex] = useState(0);

  const avatarUri = svgToDataUri(mimadaLogoAvatarSvg);
  const balayageUri = svgToDataUri(mimadaBalayagePostSvg);
  const skincareUri = svgToDataUri(mimadaSkincarePostSvg);
  const educationalUri = svgToDataUri(mimadaEducationalPostSvg);

  const mockPosts = [
    {
      id: 'balayage',
      image: balayageUri,
      type: 'photo',
      likes: '1,280',
      comments: '64',
      caption: 'Honey Melt Balayage ✨ Dimensional technique to illuminate without compromising fiber health.'
    },
    {
      id: 'educational',
      image: educationalUri,
      type: 'carousel',
      likes: '2,410',
      comments: '138',
      caption: '3 Mistakes that oxidize your summer color. Save this hair ritual guide 📌'
    },
    {
      id: 'skincare',
      image: skincareUri,
      type: 'photo',
      likes: '980',
      comments: '42',
      caption: 'Step 03: Deep botanical hydration with botanical hyaluronic acid. Dewy radiance.'
    }
  ];

  return (
    <section id="case-study" className="relative py-20 sm:py-28 md:py-36 bg-[#F5F1E8] overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 bg-paper-grain opacity-50 pointer-events-none" />

      {/* Decorative Stamp in Corner */}
      <div className="absolute top-16 right-10 hidden xl:block pointer-events-none">
        <Sticker type="cancellation" rotation={-6} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Case Study Header Badge */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Sticker text="Case Study" variant="navy" rotation={-1} />
            <span className="font-mono text-xs text-[#315D7E] tracking-wider uppercase">
              ONTARIO, CANADA • 2026
            </span>
          </div>

          <span className="font-script text-2xl text-[#315D7E]">
            Brand Transformation
          </span>
        </div>

        {/* Case Study Title & Overview */}
        <div className="mb-14 sm:mb-18">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#173B5D] tracking-tight leading-none mb-4">
            {mimadaBeautyCaseStudy.title}
          </h2>

          <p className="font-display text-xl sm:text-2xl text-[#315D7E] italic max-w-3xl leading-relaxed mb-6">
            "{mimadaBeautyCaseStudy.tagline}"
          </p>

          <div className="bg-[#E9E2D5] p-5 sm:p-7 border-l-4 border-[#173B5D] max-w-4xl relative">
            <Tape variant="cream" width="w-20" height="h-6" rotation={2} className="-top-3 right-8" />
            <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#173B5D] mb-2">
              Context &amp; Diagnosis:
            </p>
            <p className="font-body text-sm sm:text-base text-[#173A5D] leading-relaxed">
              {mimadaBeautyCaseStudy.overview}
            </p>
          </div>
        </div>

        {/* Two-Column Grid: Case Study Content vs Realistic Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Objectives, Strategy, Execution & Results (Col 7) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Objectives Section */}
            <div className="bg-[#E9E2D5]/70 p-6 sm:p-8 border border-[#315D7E]/20 relative">
              <Tape variant="navy" width="w-24" height="h-6" rotation={-1.5} className="-top-3 left-6" />
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#173B5D] mb-4">
                Project Objectives
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {mimadaBeautyCaseStudy.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[#173A5D]">
                    <span className="w-5 h-5 rounded-full bg-[#173B5D] text-[#F5F1E8] flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-snug">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategy & Execution Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Strategy Card */}
              <div className="p-6 bg-[#F5F1E8] border border-[#315D7E]/25 shadow-xs">
                <p className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-[#6F8DA5] mb-2">
                  Pillar 01
                </p>
                <h4 className="font-display text-xl font-medium text-[#173B5D] mb-3">
                  {mimadaBeautyCaseStudy.strategy.title}
                </h4>
                <ul className="space-y-2 text-xs font-body text-[#315D7E]">
                  {mimadaBeautyCaseStudy.strategy.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#173B5D] mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Execution Card */}
              <div className="p-6 bg-[#F5F1E8] border border-[#315D7E]/25 shadow-xs">
                <p className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-[#6F8DA5] mb-2">
                  Pillar 02
                </p>
                <h4 className="font-display text-xl font-medium text-[#173B5D] mb-3">
                  {mimadaBeautyCaseStudy.execution.title}
                </h4>
                <ul className="space-y-2 text-xs font-body text-[#315D7E]">
                  {mimadaBeautyCaseStudy.execution.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#173B5D] mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results Metrics Banner */}
            <div>
              <p className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-[#315D7E] mb-4">
                Measurable 90-Day Impact
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {mimadaBeautyCaseStudy.results.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 bg-[#173B5D] text-[#F5F1E8] border border-[#12395D] shadow-sm flex flex-col justify-between"
                  >
                    <span className="font-display text-3xl sm:text-4xl font-light text-[#E9E2D5]">
                      {metric.value}
                    </span>
                    <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mt-1">
                      {metric.label}
                    </span>
                    <span className="font-body text-[10px] text-[#6F8DA5] mt-1 leading-snug">
                      {metric.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Realistic HTML/CSS Phone Mockup (Col 5) */}
          <div className="lg:col-span-5 flex justify-center sticky top-28">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Scrapbook Tape Over Mockup */}
              <div className="absolute -top-3 left-10 z-30 pointer-events-none">
                <Tape variant="navy" width="w-24" height="h-7" rotation={-3} />
              </div>

              {/* Realistic Phone Enclosure in pure HTML/CSS */}
              <div className="relative bg-[#173B5D] p-3 sm:p-3.5 rounded-[44px] shadow-[0_25px_60px_rgba(18,57,93,0.28)] border-4 border-[#315D7E]/40 select-none">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#12395D] rounded-full z-40 flex items-center justify-end px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#173B5D]" />
                </div>

                {/* Inner Screen */}
                <div className="bg-[#FFFFFF] text-[#173A5D] rounded-[36px] overflow-hidden flex flex-col font-sans border border-[#315D7E]/20">
                  {/* Status Bar */}
                  <div className="pt-2 px-6 pb-1 flex items-center justify-between text-[11px] font-semibold text-[#173A5D]">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px]">5G</span>
                      <div className="w-5 h-2.5 border border-[#173A5D] rounded-xs p-0.5">
                        <div className="w-full h-full bg-[#173A5D]" />
                      </div>
                    </div>
                  </div>

                  {/* Instagram Top Bar */}
                  <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display text-lg font-bold tracking-tight text-[#173B5D]">
                        mimadabeauty
                      </span>
                      <span className="w-3.5 h-3.5 bg-[#315D7E] text-white rounded-full flex items-center justify-center text-[8px]">
                        ✓
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MoreHorizontal className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Instagram Profile Header */}
                  <div className="p-3.5 pb-2">
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      {/* Avatar with gradient ring */}
                      <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#C59B27] via-[#315D7E] to-[#173B5D]">
                        <img
                          src={avatarUri}
                          alt="Mimada Beauty Profile"
                          className="w-14 h-14 rounded-full bg-white object-cover border border-white"
                        />
                      </div>

                      {/* Stat Counters */}
                      <div className="flex items-center gap-4 text-center">
                        <div>
                          <p className="text-xs font-bold text-[#173B5D]">
                            {mimadaBeautyCaseStudy.instagramStats.posts}
                          </p>
                          <p className="text-[10px] text-gray-500">posts</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#173B5D]">
                            {mimadaBeautyCaseStudy.instagramStats.followers}
                          </p>
                          <p className="text-[10px] text-gray-500">followers</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#173B5D]">
                            {mimadaBeautyCaseStudy.instagramStats.following}
                          </p>
                          <p className="text-[10px] text-gray-500">following</p>
                        </div>
                      </div>
                    </div>

                    {/* Bio Text */}
                    <div className="space-y-0.5 text-[11px] leading-snug">
                      <p className="font-bold text-[#173B5D]">Mimada Beauty | Hair &amp; Skin</p>
                      <p className="text-gray-500 text-[10px]">Beauty Salon &amp; Sanctuary • Ontario, Canada</p>
                      <p className="text-[#315D7E]">
                        ✨ Dimensional Balayage &amp; Skincare Rituals
                      </p>
                      <p className="text-[#173A5D]">☕️ Your mindful escape for elevated aesthetics</p>
                      <a href="#contact" className="font-semibold text-[#315D7E] text-[10px] block">
                        mimadabeauty.ca/book ↗
                      </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-3 gap-1.5 mt-2.5">
                      <button className="py-1 bg-[#173B5D] text-white text-[10px] font-semibold rounded-md text-center">
                        Follow
                      </button>
                      <button className="py-1 bg-gray-100 text-[#173B5D] text-[10px] font-semibold rounded-md text-center">
                        Message
                      </button>
                      <button className="py-1 bg-gray-100 text-[#173B5D] text-[10px] font-semibold rounded-md text-center">
                        Book
                      </button>
                    </div>

                    {/* Story Highlights */}
                    <div className="flex items-center gap-3 overflow-x-auto py-2.5 no-scrollbar">
                      {['Reviews', 'Balayage', 'Skincare', 'Menu', 'The Salon'].map((story, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-[#E9E2D5] border border-gray-300 flex items-center justify-center text-[10px] font-semibold text-[#173B5D]">
                            {story[0]}
                          </div>
                          <span className="text-[9px] text-gray-600 truncate max-w-[42px]">
                            {story}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tabs: Grid vs Reels */}
                  <div className="flex border-t border-gray-200">
                    <button
                      onClick={() => setActiveTab('grid')}
                      className={`flex-1 py-2 flex justify-center items-center border-b-2 ${
                        activeTab === 'grid'
                          ? 'border-[#173B5D] text-[#173B5D]'
                          : 'border-transparent text-gray-400'
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveTab('reels')}
                      className={`flex-1 py-2 flex justify-center items-center border-b-2 ${
                        activeTab === 'reels'
                          ? 'border-[#173B5D] text-[#173B5D]'
                          : 'border-transparent text-gray-400'
                      }`}
                    >
                      <Film className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Interactive Feed Grid */}
                  <div className="grid grid-cols-3 gap-0.5 bg-gray-100 p-0.5 min-h-[190px]">
                    {mockPosts.map((post, idx) => (
                      <div
                        key={post.id}
                        onClick={() => setActivePostIndex(idx)}
                        className={`relative aspect-square cursor-pointer overflow-hidden group ${
                          activePostIndex === idx ? 'ring-2 ring-[#173B5D]' : ''
                        }`}
                      >
                        <img
                          src={post.image}
                          alt={post.caption}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                        {post.type === 'carousel' && (
                          <div className="absolute top-1 right-1 text-white text-[9px] drop-shadow-sm">
                            ❏
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Active Post Selected Preview */}
                  <div className="p-3 bg-gray-50 border-t border-gray-200 text-[11px]">
                    <div className="flex items-center justify-between text-[#173A5D] mb-1.5">
                      <div className="flex items-center gap-3">
                        <Heart className="w-3.5 h-3.5 text-[#173B5D] fill-[#173B5D]" />
                        <MessageCircle className="w-3.5 h-3.5 text-gray-600" />
                        <Send className="w-3.5 h-3.5 text-gray-600" />
                      </div>
                      <Bookmark className="w-3.5 h-3.5 text-gray-600" />
                    </div>
                    <p className="text-[10px] font-bold text-[#173B5D]">
                      {mockPosts[activePostIndex].likes} likes
                    </p>
                    <p className="text-[10px] text-gray-700 line-clamp-2 mt-0.5">
                      <span className="font-bold text-[#173B5D] mr-1">mimadabeauty</span>
                      {mockPosts[activePostIndex].caption}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Scrapbook Note */}
              <div className="mt-4 text-center">
                <span className="font-script text-xl text-[#315D7E]">
                  Live Curated Feed • Ontario, 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

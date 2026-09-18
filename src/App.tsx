/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Jacqueline Páez — Editorial Portfolio Website
 * Social Media Manager & Diseñadora Gráfica
 */

import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { CaseStudy } from './components/sections/CaseStudy';
import { StrategyGrid } from './components/sections/StrategyGrid';
import { ContentGallery } from './components/sections/ContentGallery';
import { SelectedWork } from './components/sections/SelectedWork';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#173A5D] selection:bg-[#12395D] selection:text-[#F5F1E8] flex flex-col relative">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero / Portfolio Cover */}
        <Hero />

        {/* 2. About Jacqueline Páez */}
        <About />

        {/* 3. Services */}
        <Services />

        {/* 4. Featured Case Study: Mimada Beauty */}
        <CaseStudy />

        {/* 5. Content Strategy Pillars */}
        <StrategyGrid />

        {/* 6. Content Execution Formats */}
        <ContentGallery />

        {/* 7. Selected Work Portfolio */}
        <SelectedWork />

        {/* 8. Contact CTA & Inquiry */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}


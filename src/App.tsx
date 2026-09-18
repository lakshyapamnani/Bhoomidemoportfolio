/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Bhoomi Dunka — Editorial Portfolio Website
 * Social Media Manager & Graphic Designer
 */

import React, { useState, useEffect } from 'react';
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
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { NotFound } from './components/common/NotFound';

export default function App() {
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const checkRoute = () => {
      const hash = window.location.hash;
      const pathname = window.location.pathname;

      // Detect explicit 404 test hash or non-root unknown route
      if (
        hash === '#/404' ||
        hash === '#404' ||
        (pathname !== '/' && pathname !== '' && !pathname.startsWith('/#'))
      ) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    };

    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);
    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  }, []);

  const handleReturnHome = () => {
    setIsNotFound(false);
    window.location.hash = '';
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      {isNotFound ? (
        <NotFound onBackToHome={handleReturnHome} />
      ) : (
        <div className="min-h-screen bg-[#F5F1E8] text-[#173A5D] selection:bg-[#12395D] selection:text-[#F5F1E8] flex flex-col relative">
          {/* Sticky Navigation Bar */}
          <Navbar />

          {/* Main Content Sections */}
          <main id="main-content" className="flex-grow">
            {/* 1. Hero / Portfolio Cover */}
            <Hero />

            {/* 2. About Bhoomi Dunka */}
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
      )}
    </ErrorBoundary>
  );
}


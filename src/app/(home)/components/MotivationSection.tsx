'use client';

import { memo } from 'react';

import QuoteCard from '@/components/ui/cards/QuoteCard';
import { motivationQuotes } from '@/data/motivation';
import { horizontalCarouselKeyNav } from '@/utils/keyboard';

/**
 * Motivation Section Component
 *
 * A horizontal scrolling carousel of beautifully styled motivational quotes.
 * Designed to inspire visitors and encourage daily engagement with MEGA.
 *
 * Optimized for:
 * - Performance: Memoized section and cards; minimal re-renders.
 * - SEO: Semantic markup with <blockquote> and <cite>; keyword-rich subtitle.
 * - Accessibility: ARIA region with roledescription; proper labeling and focus management.
 * - Best Practices: Data-driven; consistent carousel pattern with other sections; subtle animations.
 */
function MotivationSection() {

  return (
    // Main motivation section with vertical padding and light background
    <section
      aria-labelledby="motivation-title"
      id="motivation"
      className="py-4 lg:py-8 bg-background"
    >
      {/* Centered content wrapper */}
      <div className="container">
        {/* Section Heading */}
        {/* Primary heading with accessible ID reference */}
        <h2 id="motivation-title" className="section-title">
          Daily Motivation
        </h2>
        {/* Descriptive subtitle for inspiration and SEO */}
        <p className="section-subtitle">
          Fuel your ambition with powerful words from visionary leaders. Start each day with purpose, resilience, and passion for innovation.
        </p>

        {/* Motivation Carousel */}
        {/* Horizontal scrolling carousel with keyboard navigation support */}
        <div
          className="carousel-x scrollbar-hidden focus-ring"
          role="region"
          aria-roledescription="carousel"
          aria-label="Daily motivational quotes carousel"
          tabIndex={0}
          onKeyDown={horizontalCarouselKeyNav}
        >
          {motivationQuotes.map((quote) => (
            // Individual motivational quote card
            <QuoteCard key={quote.id} {...quote} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(MotivationSection);
'use client';

import { memo } from 'react';

import EventCard from '@/components/ui/cards/EventCard';
import { totalEvents } from '@/data/event';
import { horizontalCarouselKeyNav } from '@/utils/keyboard';

/**
 * TotalEvents Section Component
 *
 * A horizontal scrolling carousel showcasing MEGA events with visual status indicators.
 * Currently displays all events (easily extensible to filters: upcoming/past).
 *
 * Optimized for:
 * - Performance: Memoized section; child cards are memoized with lazy-loaded images.
 * - SEO: Clear heading structure; keyword-rich subtitle; strong internal linking.
 * - Accessibility: Proper ARIA region; semantic HTML; status announced via aria-label.
 * - Best Practices: Pure CSS snap scrolling; data-driven; consistent with other sections (Podcasts, Circles).
 */
function TotalEventsSection() {
  return (
    // Main events section with vertical padding and anchor target
    <section
      aria-labelledby="total-events-title"
      id="events"
      className="py-4 pt-8 lg:py-8 lg:pt-16"
    >
      {/* Centered content wrapper */}
      <div className="container">
        {/* Section Heading */}
        {/* Primary heading with accessible ID reference */}
        <h2 id="total-events-title" className="section-title">
          Our Events
        </h2>
        {/* Descriptive subtitle for engagement and SEO */}
        <p className="section-subtitle">
          Join our exciting events, workshops, hackathons, tech fairs, and educational programs to level up your skills and network.
        </p>

        {/* Events Carousel */}
        {/* Horizontal scrolling carousel with snap behavior and keyboard navigation support */}
        <div
          className="carousel-x scrollbar-hidden focus-ring"
          role="region"
          aria-roledescription="carousel"
          aria-label="MEGA events showcase carousel"
          tabIndex={0}
          onKeyDown={horizontalCarouselKeyNav}
        >
          {totalEvents.map((event) => (
            // Individual event card from data
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(TotalEventsSection);
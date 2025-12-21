'use client';

import React, { memo } from 'react';
import { EpisodeCard } from '@/components/ui/cards/EpisodeCard';
import { backgroundDualEpisodes, imageLeftEpisodes, imageRightEpisodes } from '@/data/episode';
import { horizontalCarouselKeyNav } from '@/utils/keyboard';


/**
 * Podcasts Section Component
 *
 * A multi-section horizontal scrolling showcase of MEGA podcast episodes, grouped by visual variant.
 * Optimized for:
 * - Performance: Memoized, lazy-loaded images (handled in EpisodeCard), minimal re-renders
 * - SEO: Semantic structure, proper headings, descriptive content
 * - Accessibility: ARIA regions, labeled sections, focus management
 * - Best Practices: Data-driven, responsive carousels with snap scrolling, consistent spacing
 */
function PodcastsSection() {
  return (
    // Main podcasts section with vertical padding and anchor target
    <section aria-labelledby="podcasts-title" id="podcasts" className="py-4 lg:py-8">
      {/* Centered content wrapper */}
      <div className="container">
        {/* Section Heading */}
        {/* Primary heading with accessible ID reference */}
        <h2 id="podcasts-title" className="section-title">
          MEGA Podcasts
        </h2>
        {/* Descriptive subtitle for engagement and SEO */}
        <p className="section-subtitle">
          Listen to inspiring stories, insights, and advice from tech leaders and innovators.
        </p>

        {/* Image-Right Episodes Carousel */}
        {/* Horizontal carousel for episodes with podcast image on the right */}
        <div
          className="carousel-x scrollbar-hidden focus-ring"
          role="region"
          aria-labelledby="podcasts-title"
          aria-label="Image-right podcast episodes carousel"
          tabIndex={0}
          onKeyDown={horizontalCarouselKeyNav}
        >
          {imageRightEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} {...episode} />
          ))}
        </div>

        {/* Background-Dual Episodes Carousel */}
        {/* Horizontal carousel for episodes with dual decorative background images */}
        <div
          className="carousel-x scrollbar-hidden focus-ring"
          role="region"
          aria-labelledby="podcasts-title"
          aria-label="Background-dual podcast episodes carousel"
          tabIndex={0}
          onKeyDown={horizontalCarouselKeyNav}
        >
          {backgroundDualEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} {...episode} />
          ))}
        </div>

        {/* Image-Left Episodes Carousel */}
        {/* Horizontal carousel for episodes with podcast image on the left */}
        <div
          className="carousel-x scrollbar-hidden focus-ring"
          role="region"
          aria-labelledby="podcasts-title"
          aria-label="Image-left podcast episodes carousel"
          tabIndex={0}
          onKeyDown={horizontalCarouselKeyNav}
        >
          {imageLeftEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} {...episode} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(PodcastsSection);
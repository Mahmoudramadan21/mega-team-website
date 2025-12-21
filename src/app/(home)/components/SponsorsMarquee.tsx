'use client';

import { memo } from 'react';
import Image from 'next/image';
import { sponsors } from '@/data/sponser';
import { horizontalCarouselKeyNav } from '@/utils/keyboard';

/**
 * SponsorsMarquee Component
 *
 * An infinite horizontal scrolling marquee showcasing sponsor logos.
 * Perfect for footer-adjacent or dedicated partnership sections.
 *
 * Optimized for:
 * - Performance: Memoized component; lazy-loaded images; will-change for smooth animation.
 * - SEO: Proper alt text with sponsor names; hidden accessible heading.
 * - Accessibility: sr-only heading; meaningful alt attributes; reduced motion support.
 * - Best Practices: Pure CSS animation (no JS overhead); duplicated list for seamless loop; semantic list structure.
 */
function SponsorsMarquee() {
  return (
    // Main section with vertical padding, hidden overflow, and light background
    <section
      aria-labelledby="sponsors-title"
      className="overflow-hidden py-10 bg-background"
    >
      {/* Accessible heading - hidden visually but available for screen readers and SEO */}
      <h2 id="sponsors-title" className="sr-only">
        Our Sponsors and Partners
      </h2>

      {/* Full-width wrapper for marquee animation */}
      <div className="relative w-full">
        {/* Marquee container with infinite scroll */}
        {/* Infinite horizontal marquee list with CSS animation and keyboard support */}
        <ul
          className="flex items-center gap-16 w-max will-change-transform motion-reduce:animate-none animate-marquee focus-ring"
          role="list"
          aria-label="Our sponsors and partners logos scrolling continuously. Use Tab to focus and Arrow keys to navigate."
          tabIndex={0}
          onKeyDown={horizontalCarouselKeyNav}
        >
          {/* Duplicate the list for seamless infinite effect */}
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            // Individual sponsor item - non-shrinking with centered logo
            <li
              key={`${sponsor.id}-${index}`}
              className="flex shrink-0 items-center justify-center px-4"
            >
              {/* Logo figure with fixed size and focus support */}
              <figure className="relative w-40 h-40 focus-ring" aria-label={sponsor.name} tabIndex={0}>
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  sizes="160px"
                  className="object-contain"
                  loading="lazy"
                  priority={false}
                />
                <figcaption className="sr-only">{sponsor.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default memo(SponsorsMarquee);
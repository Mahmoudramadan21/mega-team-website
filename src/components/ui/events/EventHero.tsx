'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg';
import { EventData } from '@/types/event';

/**
 * EventHero Component
 *
 * Prominent hero section for event pages, displaying the event poster image,
 * dynamic title (adjusted for registration mode), back navigation link,
 * and a status badge when registration is open.
 *
 * Key Features & Optimizations:
 * - Responsive title sizing and centered layout
 * - Priority-loaded hero image with fixed height for consistent layout
 * - Accessible back link with hidden text for screen readers and visible icon
 * - Conditional "Open" badge positioned over the image
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - All Tailwind classes ordered according to official guidelines:
 *   Layout → Box Model → Typography → Visual → Transitions
 */

type EventHeroMode = 'registration' | 'details';

interface EventHeroProps {
  event: EventData;
  mode?: EventHeroMode;
}

function EventHero({ event, mode }: EventHeroProps) {
  return (
    <>
      {/* Back Link & Page Title */}
      {/* Header row with back link, centered title, and balanced spacing */}
      <div className="flex items-center justify-between gap-8 mb-12 text-primary-500">
        {/* Back to home navigation link with visible icon and hidden text for accessibility */}
        <Link
          href="/"
          className="focus-ring hover:text-primary-300 transition-colors"
        >
          <ArrowRightIcon className="h-6 w-6 rotate-180" aria-hidden="true" />
          <span className="sr-only">Back to Home</span>
        </Link>

        {/* Main page title with responsive sizing and dynamic text based on mode */}
        <h1 className="grow text-center font-bold text-xl md:text-2xl lg:text-3xl">
          {mode === 'registration' ? `Register for ${event.title}` : event.title}
        </h1>

        {/* Invisible spacer to perfectly balance the flex layout against the back button */}
        <div className="w-8" aria-hidden="true" />
      </div>

      {/* Hero Image with Optional Status Badge */}
      {/* Hero image container with rounded corners and prominent shadow */}
      <div className="relative mb-6 overflow-hidden rounded-2xl shadow-2xl">
        {/* Priority-loaded event poster image with responsive cover fit */}
        <Image
          src={event.image.src}
          alt={event.image.alt}
          width={event.image.width}
          height={224}
          priority
          className="w-full max-h-56 object-cover object-center"
        />

        {event.state === 'open' && (
          // Conditional "Open" status badge overlaid on the top-left of the image
          <span
            className="absolute left-0 top-4 px-10 py-2 rounded-r-full text-sm font-semibold bg-[#34C759] text-neutral-50"
            aria-label="Registration is open"
          >
            Open
          </span>
        )}
      </div>
    </>
  );
}

export default memo(EventHero);
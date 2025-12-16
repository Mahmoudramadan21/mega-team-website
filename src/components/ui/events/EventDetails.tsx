'use client';

import React, { memo } from 'react';
import { EventData } from '@/types/event';

import CalendarIcon from '@/assets/icons/calender-icon.svg';
import ClockIcon from '@/assets/icons/clock-icon.svg';
import MapPinIcon from '@/assets/icons/map-pin-icon.svg';
import RecordIcon from '@/assets/icons/record-icon.svg';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: CalendarIcon,
  'map-pin': MapPinIcon,
  clock: ClockIcon,
  record: RecordIcon,
};

/**
 * EventDetails Component
 *
 * Displays detailed information about a single event, including the title,
 * full description, and structured meta details (e.g., date, time, location, sessions).
 *
 * Key Features & Optimizations:
 * - Semantic <dl>/<dt>/<dd> structure for excellent accessibility and SEO
 * - Responsive grid layout for meta items (1 column on mobile, 2 on larger screens)
 * - Preserves line breaks in description via whitespace-pre-line
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - Icons are decorative and hidden from screen readers
 * - All Tailwind classes ordered according to official guidelines:
 *   Layout → Box Model → Typography → Visual → Transitions
 */

interface EventDetailsProps {
  event: EventData;
}

function EventDetails({ event }: EventDetailsProps) {
  return (
    // Main event details section with bottom margin spacing
    <section className="mb-12">
      {/* Event title heading with responsive sizing and primary color */}
      <h2 className="mb-4 font-bold text-xl md:text-2xl lg:text-3xl text-primary-500">
        {event.title}
      </h2>

      {/* Event description with preserved line breaks and responsive text size */}
      <p className="mb-8 md:text-lg leading-relaxed text-neutral-600 whitespace-pre-line">
        {event.description}
      </p>

      {/* Responsive definition list grid for event metadata (1col mobile, 2col desktop) */}
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {event.meta.map(({ icon, label, value }) => {
          const IconComponent = iconMap[icon];
          if (!IconComponent) {
            return null;
          }

          // Individual meta item row with icon and label-value pair
          return(
            <div
              key={label}
              className="flex items-center gap-5"
            >
              {/* Decorative meta icon, fixed size and hidden from screen readers */}
              <IconComponent
                className="h-6 w-6 shrink-0 text-primary-500"
                aria-hidden="true"
              />

              {/* Label and value container */}
              <div>
                {/* Meta label with medium font weight */}
                <dt className="font-medium text-neutral-600">
                  {label}
                </dt>
                {/* Meta value with bold weight and responsive sizing */}
                <dd className="font-semibold text-sm md:text-lg">
                  {value}
                </dd>
              </div>
            </div>
          )
        })}
      </dl>
    </section>
  );
}

export default memo(EventDetails);
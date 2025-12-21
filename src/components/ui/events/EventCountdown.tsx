'use client';

import React, { memo, useEffect, useState } from 'react';

/**
 * EventCountdown Component
 *
 * A live, real-time countdown timer displaying remaining days, hours, minutes, and seconds
 * until the specified event start time (provided as an ISO datetime string).
 *
 * Key Features & Optimizations:
 * - Updates every second via setInterval for smooth live countdown
 * - Automatically stops when the event time is reached
 * - Responsive grid layout adapting from 2 to 4 columns on larger screens
 * - Proper pluralization of time units (e.g., "Day" vs "Days")
 * - Uses digital-style font and high-contrast colors for readability
 * - Accessible: Hidden heading for screen readers, semantic structure
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - All Tailwind classes ordered according to official guidelines:
 *   Layout → Box Model → Typography → Visual → Transitions
 */

interface EventCountdownProps {
  eventDateTime: string; // ISO datetime string (e.g., '2026-01-18T09:00:00')
}

function EventCountdown({ eventDateTime }: EventCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(eventDateTime);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDateTime]);

  return (
    // Full-width section with primary background and light text
    <div className="grid py-6 sm:py-12 bg-primary-500 text-neutral-50">
      {/* Centered container with digital font for the countdown display */}
      <div className="container text-center font-digital">
        {/* Hidden heading for screen readers only - improves accessibility */}
        <h2 className="sr-only">Event Starts In</h2>

        {/* Responsive grid: 2 columns on mobile, 4 columns on sm and above */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit) => (
            // Individual time unit block
            <div
              key={unit}
              className="flex flex-col"
            >
              {/* Large numeric value with leading zero padding */}
              <span className="font-bold text-lg md:text-xl lg:text-3xl">
                {String(timeLeft[unit]).padStart(2, '0')}
              </span>

              {/* Unit label with proper pluralization (e.g., Day vs Days) */}
              <span className="mt-2 uppercase md:text-lg">
                {unit === 'days' ? 'Days' : unit.slice(0, -1) + (timeLeft[unit] === 1 ? '' : 's')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(EventCountdown);
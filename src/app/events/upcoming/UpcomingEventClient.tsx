'use client';

import React, { useState } from 'react';
import EventCountdown from '@/components/ui/events/EventCountdown';
import EventHero from '@/components/ui/events/EventHero';
import EventDetails from '@/components/ui/events/EventDetails';
import RegistrationForm from '@/components/ui/events/RegistrationForm';
import SuccessModal from '@/components/ui/events/SuccessModal';
import Script from 'next/script';
import { upcomingEvent } from '@/data/upcoming-event';

export default function UpcomingEventClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Structured data for the upcoming event (Event schema.org markup) */}
      <Script
        id="upcoming-event-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: upcomingEvent.title,
            description: upcomingEvent.description.split('\n\n')[0].slice(0, 300) + '...',
            startDate: upcomingEvent.dateTime ? new Date(upcomingEvent.dateTime).toISOString() : undefined,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            image: upcomingEvent.image.src ? `https://megateam.vercel.app/${upcomingEvent.image.src}` : undefined,
            organizer: {
              "@type": "Organization",
              name: "MEGA Team Mansoura University",
              url: "https://megateam.vercel.app"
            },
            location: {
              "@type": "Place",
              name: "Mansoura University",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mansoura",
                addressCountry: "EG"
              }
            },
            offers: {
              "@type": "Offer",
              name: "Registration Required",
              price: "0",
              priceCurrency: "EGP",
              url: "https://megateam.vercel.app/events/upcoming",
              availability: "https://schema.org/LimitedAvailability"
            },
            performer: {
              "@type": "Organization",
              name: "MEGA Team"
            }
          })
        }}
      />

      {/* Live countdown timer to the event start time */}
      <EventCountdown eventDateTime={upcomingEvent.dateTime ?? '2026-01-18T09:00:00'} />

      {/* Main content area with vertical padding */}
      <div className="container py-10 lg:py-16">
        {/* Hero section adapted for registration mode */}
        <EventHero event={upcomingEvent} mode="registration" />
        
        {/* Detailed event information (date, location, sessions, etc.) */}
        <EventDetails event={upcomingEvent} />
        
        {/* Registration form with success callback to open modal */}
        <RegistrationForm onSuccess={() => setIsModalOpen(true)} />
      </div>

      {/* Success confirmation modal after successful registration */}
      <SuccessModal
        event={upcomingEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
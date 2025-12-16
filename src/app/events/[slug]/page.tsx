import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { totalEvents } from '@/data/event';

import EventHero from '@/components/ui/events/EventHero';
import EventDetails from '@/components/ui/events/EventDetails';
import Script from 'next/script';

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate dynamic metadata for each past event detail page
 * Inherits from root layout (title template "%s | MEGA", metadataBase, etc.)
 */
export async function generateMetadata(
  { params }: EventPageProps,
): Promise<Metadata> {
  const { slug } = await params;
  const event = totalEvents.find((e) => e.slug === slug);

  if (!event) {
    return { title: 'Event Not Found' };
  }

  // Extract first paragraph for concise, attractive meta description
  const firstParagraph = event.description.split('\n\n')[0].slice(0, 200) + '...';

  const pageTitle = `${event.title} Event`;
  const pageDescription = `${firstParagraph} Discover this past event by MEGA Team at Mansoura University focusing on tech skills and innovation.`;

  return {
    title: pageTitle,
    description: pageDescription,

    keywords: [
      `${event.title} MEGA`,
      `${event.title} Mansoura University`,
      'MEGA tech event',
      'MEGA Mansoura',
      'student tech workshop Mansoura',
      ...event.meta.map((m) => m.value),
    ],

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: `https://megateam.vercel.app/events/${slug}`,
    },

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `/events/${slug}`,
      images: [
        {
          url: event.image.src,
          width: event.image.width,
          height: event.image.height,
          alt: event.image.alt,
        },
      ],
      type: 'article',
      locale: 'en_US',
    },

    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [event.image.src],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;

  const event = totalEvents.find((event) => event.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      {/* Structured data for the past event (Event schema.org markup) */}
      <Script
        id={`event-schema-${event.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: event.title,
            description: event.description.split('\n\n')[0].slice(0, 300) + '...',
            startDate: event.dateTime ? new Date(event.dateTime).toISOString() : undefined,
            eventStatus: "https://schema.org/EventCancelled", // Adjust as needed; past events are often treated as completed by search engines
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            image: event.image.src ? `https://megateam.vercel.app/${event.image.src}` : undefined,
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
              name: "Free Registration",
              price: "0",
              priceCurrency: "EGP",
              url: `https://megateam.vercel.app/events/${event.slug}`
            }
          })
        }}
      />

      {/* Main content area with vertical padding */}
      <div className="container py-10 lg:py-16">
        {/* Hero section in details mode for past events */}
        <EventHero event={event} mode="details" />
        
        {/* Detailed event information (description, meta, etc.) */}
        <EventDetails event={event} />
      </div>
    </>
  );
}

/**
 * Pre-render all past event detail pages at build time (SSG)
 * Benefits: Lightning-fast load times, excellent SEO indexing, and high Lighthouse scores
 */
export async function generateStaticParams() {
  return totalEvents.map((event) => ({
    slug: event.slug,
  }));
}
import { EventData } from '@/types/event';

/**
 * upcomingEvent
 *
 * Featured / spotlight event.
 * - Uses the same EventData model for consistency.
 * - Rich metadata for detailed display.
 * - CMS/API ready.
 */
export const upcomingEvent: EventData = {
  slug: 'magicoders',

  title: 'MagiCoders',

  description:
    "Learn how to build a strong CV, understand how companies choose candidates, and gain the skills you need to stand out. MEGA connects you with real companies, internships, and career paths—helping bridge the gap between university and the job market. Whether you're a student or a fresh graduate, this event is for you.",

  state: 'open',

  link: '/events/upcoming',

  image: {
    src: '/images/next-event.png',
    alt: 'MagiCoders event poster featuring speakers, workshops, and participants at Mansoura University',
    width: 630,
    height: 600,
  },

  dateTime: '2026-01-18',

  meta: [
    {
      icon: "calendar",
      label: 'Date',
      value: 'Saturday, January 18, 2026',
    },
    {
      icon: "clock",
      label: 'Time',
      value: '9:00 AM – 6:00 PM',
    },
    {
      icon: "map-pin",
      label: 'Location',
      value: 'ITI, Mansoura University',
    },
    {
      icon: "record",
      label: 'Sessions',
      value: '6 Sessions',
    },
  ],

  cta: {
    label: 'Learn More',
    href: '/events/upcoming',
    ariaLabel: 'Learn more about MagiCoders event',
  },

  registration: {
    registeredCount: 150,
    progress: 75,
  },
} as const;

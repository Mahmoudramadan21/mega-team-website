// types/event.ts
import { ComponentType, SVGProps } from 'react';


/**
 * EventState
 */
export type EventState = 'open' | 'soon' | 'closed';

/**
 * Event Image
 */
export interface EventImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Event Meta Item (Date, Time, Location, etc.)
 */
export interface EventMetaItem {
  icon: string;
  label: string;
  value: string;
}

/**
 * Event CTA
 */
export interface EventCTA {
  label: string;
  href: string;
  ariaLabel: string;
}

/**
 * Event Registration Info
 */
export interface EventRegistration {
  registeredCount: number;
  progress: number; // 0 → 100
}

/**
 * Main Event Model
 *
 * Works for:
 * - Event cards
 * - Spotlight section
 * - Event details page
 * - CMS / API
 */
export interface EventData {
  slug: string;

  title: string;
  description: string;

  state: EventState;
  link: string;

  image: EventImage;

  /** Optional but recommended for <time> semantics */
  dateTime?: string;

  /** Flexible meta data */
  meta: readonly EventMetaItem[];

  /** Optional – only for featured / upcoming events */
  cta?: EventCTA;
  registration?: EventRegistration;
}

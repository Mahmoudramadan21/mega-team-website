/**
 * Sponsor
 *
 * Structure for a single sponsor/partner entry.
 * Includes:
 * - id: Unique identifier.
 * - name: Official name of the sponsor (used in alt text for SEO and accessibility).
 * - logo: Path to the sponsor's logo image (optimized for lazy loading).
 */
interface Sponsor {
  id: number;
  name: string;
  logo: string;
}

/**
 * sponsors
 *
 * Centralized list of MEGA sponsors and partners.
 * - Kept in-component due to small, stable dataset (no need for separate file).
 * - Data-driven for easy updates (just add/remove objects).
 * - Logos should be optimized SVGs or compressed PNGs for fast loading.
 * - Duplicated in render for seamless infinite marquee effect.
 */
export const sponsors: Sponsor[] = [
  { id: 1, name: 'Tesla', logo: '/logos/tesla.png' },
  { id: 2, name: 'Hult Prize', logo: '/logos/hult.png' },
  { id: 3, name: 'Triago', logo: '/logos/triago.png' },
  { id: 4, name: 'Techno Club', logo: '/logos/techno.png' },
  { id: 5, name: 'ITI', logo: '/logos/iti.png' },
  { id: 6, name: 'Creativa', logo: '/logos/creativa.png' },
  { id: 7, name: 'Madarek Academy', logo: '/logos/madarek.png' },
] as const;


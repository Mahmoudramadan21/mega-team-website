# MEGA Team MU - Official Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-blue.50?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-18.3-green?logo=react&logoColor=white)](https://react.dev)

The official website for **MEGA Team MU** – the leading volunteer student tech community at Mansoura University. Empowering tech enthusiasts through hands-on projects, workshops, events, circles, and mentorship since 2018.

## ✨ Live Demo

🔗 [https://megateam.vercel.app](https://megateam.vercel.app)

## 📱 Features

### 🚀 Core Features
- **Fully Responsive** – Mobile-first design optimized for all devices
- **Performance Optimized** – Lighthouse 95+ scores (Performance, SEO, Accessibility)
- **SEO-First** – Dynamic metadata, schema.org structured data, sitemap, robots.txt
- **Accessibility (A11y)** – WCAG 2.1 AA compliant, ARIA labels, keyboard navigation
- **Progressive Web App Ready** – Manifest, theme colors, offline support
- **Internationalization Ready** – RTL/LTR support, easy language switching

### 📂 Key Sections
| Section | Description | Components |
|---------|-------------|------------|
| **Hero** | Bold introduction with auto-rotating images | `HeroSection.tsx` |
| **Upcoming Events** | Live countdown + registration form | `UpcomingEventSection.tsx`, `EventCountdown.tsx` |
| **Circles** | Filterable tech/non-tech tracks showcase | `CirclesSection.tsx`, `CircleCard.tsx` |
| **Past Events** | Horizontal carousel of completed events | `TotalEventsSection.tsx` |
| **Podcasts** | Multi-variant episode cards | `PodcastsSection.tsx`, `EpisodeCard.tsx` |
| **Motivation** | Inspirational quotes carousel | `MotivationSection.tsx`, `QuoteCard.tsx` |
| **Sponsors** | Infinite scrolling marquee | `SponsorsMarquee.tsx` |

### 🎯 Dynamic Pages
- `/circles/[slug]` – Individual circle details with navigation carousel
- `/events/upcoming` – Event registration with countdown, form, success modal
- `/events/[slug]` – Past event details with structured data

## 🛠 Tech Stack

```
Frontend: Next.js 14.2.3 (App Router) + TypeScript 5.4 + React 18.3
Styling: Tailwind CSS 3.4.1 (Layout→Box→Typography→Visual→Transitions order)
UI: Custom components with Framer Motion animations
Data: TypeScript interfaces + static JSON data files
SEO: Dynamic metadata + schema.org structured data + Sitemap/robots.txt
Images: Next.js Image Optimization + WebP/AVIF support
Forms: Google Apps Script → Google Sheets integration
Deployment: Vercel (zero-config)
```

## 📁 Project Structure

```
app/
├── (home)/                 # Landing page sections
│   ├── components/         # Hero, Events, Circles, Podcasts, etc.
│   └── page.tsx            # Home page orchestrator
├── circles/                # Dynamic circle pages
│   ├── layout.tsx          # Circle navigation carousel
│   └── [slug]/page.tsx     # Individual circle details
├── events/                 # Event pages
│   ├── upcoming/           # Registration page
│   │   ├── page.tsx        # Server metadata
│   │   └── UpcomingEventClient.tsx  # Client components
│   └── [slug]/page.tsx     # Past event details
├── globals.css             # Tailwind + custom utilities
├── layout.tsx              # Root layout + metadata + schema
├── page.tsx                # Redirect to home
├── robots.ts               # SEO robots.txt
└── sitemap.ts              # Dynamic sitemap generation

components/ui/              # Reusable UI components
├── cards/                  # CircleCard, EpisodeCard, QuoteCard
├── events/                 # EventHero, EventDetails, RegistrationForm
└── layout/                 # Header, Footer

data/                       # Static data sources
├── circle.ts
├── episode.ts
├── event.ts
└── motivation.ts

types/                      # TypeScript interfaces
├── circle.ts
├── episode.ts
└── event.ts

utils/                      # Shared utilities
└── keyboard.ts             # Carousel keyboard navigation
```

## 🎨 Design System

### Tailwind Class Order (Strictly Enforced)
```
Layout → Box Model → Typography → Visual → Transitions
```
**Example:**
```tsx
className="flex flex-col gap-4 p-6 font-bold text-xl text-primary-500 hover:bg-primary-400 transition-all"
```

### Key Utilities (Custom)
- `focus-ring` – Accessible focus outlines
- `btn` – Button base styles
- `section-title`, `section-subtitle` – Typography utilities
- `scrollbar-hidden` – Custom scrollbar hiding

### Color Palette
| Name | Value | Usage |
|------|-------|-------|
| Primary | `#3B82F6` | CTAs, accents, links |
| Neutral | `neutral-XXX` | Text, backgrounds |
| Background | `#F8FAFC` | Sections, cards |

### Typography Scale
- **Headings**: `text-3xl lg:text-4xl xl:text-5xl font-bold`
- **Body**: `text-base lg:text-lg leading-relaxed`
- **Custom**: Cairo font for Arabic content

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 18+ | pnpm 9+ (recommended)
```

### Installation
```bash
# Clone & Install
git clone https://github.com/Mahmoudramadan21/mega-team-website
cd mega-team-website
npm install

# Development
npm dev

# Build & Preview
npm build
npm start
```

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://megateam.vercel.app
```

## 🔧 Customization

### 1. Update Content
Edit data files in `/data/`:
```ts
// data/event.ts, data/circle.ts, data/episode.ts, data/motivation.ts
export const totalEvents = [...];
```

### 2. Registration Form
Google Apps Script URL in `RegistrationForm.tsx`:
```tsx
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

### 3. Deploy to Vercel
```bash
pnpm build
vercel --prod
```

## 📊 Performance & SEO

### Lighthouse Scores (Target)
| Metric | Score | Optimization |
|--------|-------|--------------|
| **Performance** | 95+ | Next.js Image, lazy loading, code splitting |
| **Accessibility** | 100 | ARIA, focus management, semantic HTML |
| **Best Practices** | 100 | Modern JS, security headers |
| **SEO** | 100 | Dynamic metadata, schema.org, sitemap |

### SEO Features Implemented
✅ Dynamic page metadata  
✅ Structured data (Organization, Event, EducationalOrganization)  
✅ Sitemap.xml generation  
✅ robots.txt  
✅ Canonical URLs  
✅ Open Graph / Twitter Cards  
✅ Breadcrumb support ready  
✅ hreflang ready  

## ♿ Accessibility

- **Keyboard Navigation**: Full carousel support (`horizontalCarouselKeyNav`)
- **Screen Reader**: ARIA labels, roles, live regions
- **Focus Management**: Custom `focus-ring`, skip links ready
- **Color Contrast**: WCAG 2.1 AA compliant
- **Reduced Motion**: `motion-reduce:` prefixes

## 📱 Responsive Breakpoints

| Breakpoint | Tailwind | Width |
|------------|----------|-------|
| Mobile | `default` | < 640px |
| Tablet | `md:` | ≥ 768px |
| Laptop | `lg:` | ≥ 1024px |
| Desktop | `xl:` | ≥ 1280px |

## 🤝 Contributing

1. Fork the repo
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Style
```bash
pnpm lint          # ESLint + Prettier
pnpm format        # Prettier format
pnpm type-check    # TypeScript
```

## 📄 License

This project is [MIT](LICENSE) licensed.

```
MEGA Team MU © 2018-2025
Built with ❤️ by MEGA Team Members
Mansoura University, Egypt
```

## 🙌 Acknowledgments

- **Next.js Team** – Amazing framework
- **Tailwind Labs** – Utility-first CSS
- **Vercel** – Lightning-fast deployment
- **MEGA Team Members** – Content & vision

---

⭐ **Star this repo if you found it helpful!**  
📢 **Follow [@MegaTeamMU](https://x.com/MegaTeamMU) for updates**

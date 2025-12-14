import type { Metadata, Viewport } from "next";
import Script from 'next/script'; 
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

/**
 * Global metadata for the entire site.
 * This is defined in the root layout and will be inherited by all pages.
 * Nested pages/layouts can override or extend specific fields (e.g., title, description).
 *
 * Best practices applied:
 * - Use metadataBase for absolute URLs (required for OG images, canonical, etc.).
 * - Provide a title template for consistent branding across pages (%s = page-specific title).
 * - Rich Open Graph and Twitter cards for better social sharing previews.
 * - Viewport and charset for mobile/responsiveness.
 * - Robots: allow full indexing (adjust if needed for staging).
 * - Icons: assumes you have favicon.ico, apple-touch-icon.png, etc. in /public or /app.
 * - Alternates: add if you support multiple languages later.
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  // Base URL – replace with your production domain
  metadataBase: new URL("https://megateam.vercel.app"), // CHANGE THIS TO YOUR ACTUAL DOMAIN

  // Title configuration
  title: {
    default: "Build Tech Skills | MEGA",
    template: "%s | MEGA", // Page-specific titles will appear as "Page Title | MEGA"
  },

  // Core SEO tags
  description:
    "Build real tech skills with MEGA – leading volunteer student tech community at Mansoura University. Hands-on projects, workshops, events, and expert mentorship in UI/UX, Flutter, Data Science, Backend & more.",
  
  keywords: [
    "MEGA",
    "MEGA Mansoura",
    "MEGA Mansoura University",
    "MEGA MU",
    "tech community Mansoura",
    "student tech team Mansoura",
    "programming workshops Mansoura",
    "UI/UX Mansoura",
    "Flutter Mansoura",
    "Data Science Mansoura",
    "Backend Development Mansoura",
    "tech events Mansoura University",
  ],

  alternates: {
    canonical: `https://megateam.vercel.app`,
  },

  authors: [{ name: "MEGA Team" }],
  creator: "MEGA Team",
  publisher: "MEGA Team",

  // Robots – allow search engines to index and follow
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "MEGA | Build Tech Skills",
    description:
      "Build real tech skills through hands-on projects, workshops, events, and mentorship. Join MEGA – leading student tech community at Mansoura University.",    
    siteName: "MEGA",
    images: [
      {
        url: "/og-image.jpg", // Recommended: 1200x630 PNG in /public
        width: 1200,
        height: 630,
        alt: "MEGA Team Logo and Banner",
      },
    ],
    locale: "en_US", // Change to "ar_EG" if primary language is Arabic
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MEGA | Build Tech Skills",
    description:
      "Hands-on projects, workshops & mentorship to build real tech skills. Join MEGA at Mansoura University.",    
    images: ["/twitter-image.jpg"], // Optional: separate image, or reuse OG
    creator: "@mega_team", // Replace with your X/Twitter handle
    site: "@mega_team",
  },

  // Additional useful tags
  manifest: "/manifest.json", // If you have a PWA manifest
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Root HTML element with English language and left-to-right direction
    <html lang="en" dir="ltr">
      {/* Inline schema.org Organization markup for enhanced SEO and rich results */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MEGA Team",
            alternateName: "MEGA Mansoura University",
            url: "https://megateam.vercel.app/",
            logo: "https://megateam.vercel.app/images/logo.svg",
            description: "MEGA is a leading volunteer student tech community at Mansoura University focused on Computer Science and IT skills through real projects, events, workshops, and mentorship.",
            foundingDate: "2018",
            founder: {
              "@type": "Person",
              name: "MEGA Founding Members"
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mansoura",
              addressRegion: "Dakahlia",
              addressCountry: "EG"
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "General Inquiry",
              email: "mega.team.mu@gmail.com"
            },
            sameAs: [
              "https://www.facebook.com/megateam.mu18",
              "https://www.instagram.com/megateammu",
              "https://x.com/MegaTeamMU", 
              "https://eg.linkedin.com/company/mega-team-mu",
              "https://www.youtube.com/@MEGATeamMU" 
            ]
          })
        }}
      />
      {/* Main body content wrapper */}
      <body>
        {/* Site header component - includes navigation and logo */}
        <Header />
        {/* Primary content area for page-specific children */}
        <main>{children}</main>
        {/* Site footer component - includes links, contact info, and copyright */}
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://sahinoglu.az";

export const metadata: Metadata = {
  title: {
    default: "Şahinoğlu Construction — Bünövrədən Açar Təhvilinə | Bakı, Abşeron",
    template: "%s | Şahinoğlu Construction",
  },
  description:
    "Şahinoğlu Construction — Bakı və Abşeronda premium fərdi ev, villa tikintisi və təmir. 14 il təcrübə, 127+ tamamlanmış obyekt, 48500+ m² tikinti sahəsi. Layihələndirmədən açar təhvilinə.",
  keywords: [
    "tikinti şirkəti bakı",
    "fərdi ev tikintisi",
    "villa tikintisi abşeron",
    "təmir renovasiya bakı",
    "premium tikinti",
    "sahinoglu construction",
    "bünövrə açar təhvil",
    "ev tikintisi qiyməti",
    "villa layihələndirmə",
    "tikinti şirkətləri",
    "construction company baku",
    "private house construction",
    "villa construction azerbaijan",
  ],
  authors: [{ name: "Şahinoğlu Construction" }],
  creator: "Şahinoğlu Construction",
  publisher: "Şahinoğlu Construction",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: SITE_URL,
    siteName: "Şahinoğlu Construction",
    title: "Şahinoğlu Construction — Bünövrədən Açar Təhvilinə",
    description:
      "Bakı və Abşeronda premium fərdi ev, villa tikintisi və təmir. 14 il təcrübə, 127+ tamamlanmış obyekt.",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Şahinoğlu Construction — Premium Tikinti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Şahinoğlu Construction — Bünövrədən Açar Təhvilinə",
    description:
      "Bakı və Abşeronda premium fərdi ev, villa tikintisi və təmir. 14 il təcrübə, 127+ tamamlanmış obyekt.",
    images: ["/image.png"],
  },
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
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Şahinoğlu Construction",
    alternateName: "Şahinoğlu Tikinti",
    description:
      "Bakı və Abşeronda premium fərdi ev, villa tikintisi və təmir xidmətləri.",
    url: SITE_URL,
    telephone: "+994705552726",
    email: "info@sahinoglu.az",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Abşeron rayonu, Xırdalan",
      addressLocality: "Bakı",
      addressRegion: "Bakı",
      addressCountry: "AZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4442,
      longitude: 49.9657,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    image: "/image.png",
    priceRange: "$$",
    sameAs: ["https://instagram.com/shahinoglu_construction"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tikinti Xidmətləri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fərdi Ev Tikintisi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Villa Layihələndirmə",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Təmir / Renovasiya",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Açar Təhvili",
          },
        },
      ],
    },
  };

  return (
    <html lang="az">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="pb-14 lg:pb-0">
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url(/image.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div
          className="fixed inset-0 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(240,235,227,0.85) 0%, rgba(240,235,227,0.75) 50%, rgba(240,235,227,0.9) 100%)",
          }}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

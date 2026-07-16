import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://saguarodigitalventures.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saguaro Digital Ventures | Modern Software, Southwestern Roots",
    template: "%s | Saguaro Digital Ventures",
  },
  description:
    "Saguaro Digital Ventures is an Arizona-based software company building practical SaaS products and digital tools with thoughtful engineering and long-term vision.",
  keywords: [
    "Saguaro Digital Ventures",
    "Arizona software company",
    "SaaS products",
    "Monte Estate",
    "real estate investment software",
    "software venture studio",
  ],
  authors: [{ name: "Saguaro Digital Ventures" }],
  creator: "Saguaro Digital Ventures",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Saguaro Digital Ventures",
    title: "Saguaro Digital Ventures | Modern Software, Southwestern Roots",
    description:
      "Building practical software inspired by the resilience of the Southwest. Explore the products Saguaro Digital Ventures builds and owns.",
    images: [
      {
        url: "/images/hero-saguaro.jpg",
        width: 2272,
        height: 1704,
        alt: "A saguaro cactus silhouetted against a golden Arizona sunset with mountains in the distance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saguaro Digital Ventures",
    description:
      "Arizona-based software company building practical SaaS products and digital tools.",
    images: ["/images/hero-saguaro.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1917" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored ? stored : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Saguaro Digital Ventures",
              url: siteUrl,
              description:
                "Arizona-based software company building practical SaaS products and digital tools.",
              address: {
                "@type": "PostalAddress",
                addressRegion: "AZ",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

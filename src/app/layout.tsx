import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/component/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jymarkb.info";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jay Mark Borja | Full-Stack Web Developer",
    template: "%s | Jay Mark Borja",
  },
  description:
    "Full-stack web developer based in Quezon City, Philippines. Specializing in React, Next.js, Symfony, Laravel, Node.js, and AWS. Available for freelance and full-time work.",
  applicationName: "Jay Mark Borja Portfolio",
  authors: [{ name: "Jay Mark Borja", url: SITE_URL }],
  creator: "Jay Mark Borja",
  publisher: "Jay Mark Borja",
  generator: "Next.js",
  keywords: [
    "Jay Mark Borja",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Symfony Developer",
    "Laravel Developer",
    "Node.js Developer",
    "TypeScript",
    "AWS",
    "Quezon City",
    "Philippines",
    "Freelance Developer",
    "Hire Developer",
    "Portfolio",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Jay Mark Borja",
    title: "Jay Mark Borja | Full-Stack Web Developer",
    description:
      "Full-stack web developer based in Quezon City, Philippines. React, Next.js, Symfony, Laravel, Node.js, AWS.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jay Mark Borja — Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Mark Borja | Full-Stack Web Developer",
    description:
      "Full-stack web developer based in Quezon City, Philippines. React, Next.js, Symfony, Laravel, Node.js, AWS.",
    images: ["/opengraph-image"],
    creator: "@jymarkb",
  },
  icons: {
    icon: [
      { url: "/images/mobile-logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: { url: "/images/mobile-logo.svg", type: "image/svg+xml" },
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafbfc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1c" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jay Mark Borja",
  url: SITE_URL,
  image: `${SITE_URL}/images/webp/avatar.webp`,
  jobTitle: "Full-Stack Web Developer",
  description:
    "Full-stack web developer specializing in React, Next.js, Symfony, Laravel, Node.js, and AWS.",
  email: "mailto:dev.jymarkb@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quezon City",
    addressCountry: "PH",
  },
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Symfony",
    "Laravel",
    "Node.js",
    "AWS",
    "Docker",
    "MySQL",
    "REST APIs",
  ],
  sameAs: [
    "https://github.com/jymarkb",
    "https://www.linkedin.com/in/jaymark-borja/",
    "https://leetcode.com/u/jymarkb/",
    "https://www.hackerrank.com/profile/jymark_borja",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jay Mark Borja Portfolio",
  url: SITE_URL,
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    name: "Jay Mark Borja",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth ${poppins.variable} `}
      suppressHydrationWarning
    >
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Jay Mark Borja" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

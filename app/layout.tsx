import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono, Dancing_Script, Aclonica } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const aclonica = Aclonica({
  variable: "--font-aclonica",
  subsets: ["latin"],
  weight: ["400"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Laryx",
  url: "https://laryx.ai",
  description: "High-quality software systems, platforms, and tools.",
  logo: "https://laryx.ai/logo.png",
  sameAs: [
    "https://twitter.com/laryx",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@laryx.ai",
    contactType: "sales",
  },
  areaServed: "Worldwide",
  serviceType: "Software Development",
};

export const metadata: Metadata = {
  title: {
    default: "Laryx - High-Performance Software Systems",
    template: "%s | Laryx",
  },
  description:
    "Laryx designs and builds high-quality software systems, platforms, and tools — with an unwavering focus on performance, reliability, security, and scalable architecture.",
  keywords: ["software architecture", "AI agents", "technical systems", "scalable platforms", "developer tools"],
  authors: [{ name: "Laryx" }],
  creator: "Laryx",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://laryx.ai",
    siteName: "Laryx",
    title: "Laryx - High-Performance Software Systems",
    description: "High-quality software systems, platforms, and tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Laryx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laryx - High-Performance Software Systems",
    description: "High-quality software systems, platforms, and tools.",
    creator: "@laryx",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${jakartaSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased`}
        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
      >
        <a href="#features" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}

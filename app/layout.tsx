import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mohit Chandel — Full Stack Blockchain Engineer",
  description:
    "Full Stack Blockchain Engineer, currently at India. Focused on DAps and experiences, working remotely.",
  generator: "Next.js",
  applicationName: "Mohit Chandel",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "blockchain developer",
    "smart contracts",
    "solidity",
    "web3",
    "blockchain",
    "ethereum",
    "web3 developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "India",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Mohit Chandel — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently at Kora. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
    url: "https://www.mohitchandel.in/",
    siteName: "www.mohitchandel.in",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4E16AQEEUjOhQQhusQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1713422779306?e=1730332800&v=beta&t=BmJCjmLijOVPSQ3PMzen2xe8f-a5yxhS-RS5s6K1Nhc",
        width: 1200,
        height: 630,
        alt: "Mohit Chandel — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Blockchain Engineer",
    description:
      "Full Stack Blockchain Engineer, currently at India. Focused on DAps and experiences, working remotely.",
    creator: "mohitchandel",
    creatorId: "1243720976552144897",
    images: [
      "https://media.licdn.com/dms/image/v2/D4E16AQEEUjOhQQhusQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1713422779306?e=1730332800&v=beta&t=BmJCjmLijOVPSQ3PMzen2xe8f-a5yxhS-RS5s6K1Nhc",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

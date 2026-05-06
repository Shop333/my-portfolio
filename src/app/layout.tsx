import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardShell from "@/components/dashboard/DashboardShell";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 1. Basic Metadata
  title: "Moh Ahlul Firdaus | Junior Full Stack Developer",
  description: "Portfolio of Moh Ahlul Firdaus, a Junior Full Stack Developer specializing in Frontend, React, and Mobile Development.",
  metadataBase: new URL("https://my-portfolio-khaki-beta-3t8b3jy9v8.vercel.app"),
  
  // 2. SEO Keywords (Biar gampang dicari di Google)
  keywords: [
    "Moh Ahlul Firdaus", 
    "Ahlul Firdaus", 
    "Web Developer Bali", 
    "Frontend Developer Jembrana", 
    "Full Stack Developer Indonesia",
    "Portfolio OS",
    "Next.js Developer"
  ],
  authors: [{ name: "Moh Ahlul Firdaus" }],

  // 3. Icons
  icons: {
    icon: "/favicon.ico",
  },

  // 4. Open Graph (Untuk WA, LinkedIn, IG, FB)
  openGraph: {
    title: "Moh Ahlul Firdaus | Portfolio OS",
    description: "Junior Full Stack Developer Portfolio - Specialized in Frontend",
    url: "https://my-portfolio-khaki-beta-3t8b3jy9v8.vercel.app",
    siteName: "Ahlul Firdaus Portfolio",
    images: [
      {
        url: "/og-image.webp", // Gambar preview di folder public
        width: 1200,
        height: 630,
        alt: "Ahlul Firdaus Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // 5. Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Moh Ahlul Firdaus | Portfolio OS",
    description: "Junior Full Stack Developer Portfolio",
    images: ["/og-image.webp"],
  },

  // 6. Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  // 7. Verification (Opsional: Kalau kamu sudah punya Google Search Console)
  // verification: {
  //   google: "kode-verifikasi-google-kamu",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className="dark scroll-smooth" 
      data-scroll-behavior="smooth"
    >
      <body 
        className={`${inter.className} bg-[#030303] text-zinc-400 antialiased selection:bg-sky-500/30 selection:text-sky-200`}
      >
        <Provider>
          {/* DashboardShell membungkus children untuk layout konsisten */}
          <DashboardShell>
            {children}
          </DashboardShell>
        </Provider>
      </body>
    </html>
  );
}

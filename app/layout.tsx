import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Sparkling Minds Technologies - Enterprise IT Solutions",
  description:
    "Leading IT services company specializing in AI, web development, mobile apps, cloud solutions, and digital transformation for healthcare, proptech, startups, and enterprises.",
  generator: "Sparkling Minds Technologies",
  keywords: [
    "IT services",
    "AI development",
    "web development",
    "mobile apps",
    "cloud solutions",
    "digital transformation",
  ],
  authors: [{ name: "Sparkling Minds Technologies" }],
  openGraph: {
    title: "Sparkling Minds Technologies - Enterprise IT Solutions",
    description:
      "Leading IT services company specializing in AI, web development, mobile apps, cloud solutions, and digital transformation.",
    url: "https://sparklingminds.tech",
    siteName: "Sparkling Minds Technologies",
    images: [
      {
        url: "/images/smt-logo.png",
        width: 1200,
        height: 630,
        alt: "Sparkling Minds Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparkling Minds Technologies - Enterprise IT Solutions",
    description:
      "Leading IT services company specializing in AI, web development, mobile apps, cloud solutions, and digital transformation.",
    images: ["/images/smt-logo.png"],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/smt-logo.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="min-h-screen overflow-hidden">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

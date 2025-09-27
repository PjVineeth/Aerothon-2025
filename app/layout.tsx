import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ClickSpark } from "@/components/click-spark"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "AEROTHON 2025 - Innovating the Future of Aerospace",
  description:
    "A flagship national-level hackathon by HAL in collaboration with IIIT Dharwad. Join the brightest minds to tackle real-world aerospace challenges.",
  generator: "Aerothan-2025.app",
  keywords: "hackathon, aerospace, HAL, IIIT Dharwad, innovation, technology, aviation",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <ClickSpark />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

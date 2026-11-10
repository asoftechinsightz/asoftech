import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/content/site";
import { absoluteUrl, buildMetadata, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.name,
    description:
      "AsoftechInsightz delivers enterprise technology consulting, digital engineering, AI automation, and SaaS products including GrowthEdge360, CareerEdge360, CyberEdge360, and OpsEdge360.",
    path: "/",
  }),
  metadataBase: new URL(absoluteUrl("/")),
  applicationName: siteConfig.name,
  keywords: [
    "IT consulting India",
    "website development",
    "mobile app development",
    "automated sales marketing",
    "BFSI consulting",
    "enterprise architecture",
    "cybersecurity assessment",
    "observability",
    "AI automation",
    "career coaching",
    "GrowthEdge360",
    "CareerEdge360",
    "CyberEdge360",
    "OpsEdge360",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

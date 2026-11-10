import { brand } from "@asoftech/design-tokens";

export const siteConfig = {
  name: brand.name,
  tagline: brand.tagline,
  hero: brand.hero,
  positioning: brand.positioning,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? brand.siteUrl,
  locale: "en_IN",
  contactEmail: "contact@asoftechinsightz.com",
  careersEmail: "careers@asoftechinsightz.com",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "GrowthEdge360",
        href: "/products/growthedge360",
        description: "AI-powered growth and marketing automation",
      },
      {
        label: "CareerEdge360",
        href: "/products/careeredge360",
        description: "Career intelligence and coaching platform",
      },
      {
        label: "CyberEdge360",
        href: "/products/cyberedge360",
        description: "Cybersecurity assessment and governance",
      },
      {
        label: "OpsEdge360",
        href: "/products/opsedge360",
        description: "Observability, ITOM, and AIOps",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Website Development",
        href: "/services/website-development",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      {
        label: "Automated Sales & Marketing",
        href: "/services/automated-sales-marketing",
      },
      {
        label: "Enterprise Architecture",
        href: "/services/enterprise-architecture",
      },
      {
        label: "Cybersecurity & GRC",
        href: "/services/cybersecurity-grc",
      },
      {
        label: "All services",
        href: "/services",
        description: "View the full service catalogue",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  products: [
    { label: "GrowthEdge360", href: "/products/growthedge360" },
    { label: "CareerEdge360", href: "/products/careeredge360" },
    { label: "CyberEdge360", href: "/products/cyberedge360" },
    { label: "OpsEdge360", href: "/products/opsedge360" },
  ],
  services: [
    { label: "Digital Engineering", href: "/services/website-development" },
    {
      label: "Automated Sales & Marketing",
      href: "/services/automated-sales-marketing",
    },
    {
      label: "Enterprise Architecture",
      href: "/services/enterprise-architecture",
    },
    { label: "Cybersecurity & GRC", href: "/services/cybersecurity-grc" },
    { label: "Observability & AIOps", href: "/services/observability-aiops" },
    { label: "All services", href: "/services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

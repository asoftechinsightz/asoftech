export const colors = {
  primaryNavy: "#07162E",
  secondaryNavy: "#0B1D3A",
  electricBlue: "#176BFF",
  neonCyan: "#00D7F5",
  cloudWhite: "#F7FAFF",
  slate: "#53657D",
  darkText: "#14243B",
  white: "#FFFFFF",
} as const;

export const brand = {
  name: "AsoftechInsightz",
  tagline: "Technology. Intelligence. Growth.",
  hero: "Build. Automate. Secure. Grow.",
  positioning:
    "Enterprise Technology Consulting | Digital Engineering | AI Automation | SaaS Products",
  siteUrl: "https://www.asoftechinsightz.com",
} as const;

export type BrandColor = keyof typeof colors;

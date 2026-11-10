export type Industry = {
  slug: string;
  title: string;
  summary: string;
  challenges: string[];
  focusAreas: string[];
  relevantServices: { label: string; href: string }[];
  relevantProducts: { label: string; href: string }[];
};

export const industries: Industry[] = [
  {
    slug: "bfsi",
    title: "BFSI",
    summary:
      "Help banks, NBFCs, and financial institutions modernise digital journeys, strengthen controls conversations, and improve platform reliability.",
    challenges: [
      "Legacy platforms slowing digital product delivery",
      "Fragmented customer journeys across channels",
      "Heightened expectations for security and operational resilience",
      "Complex stakeholder alignment across business, risk, and IT",
    ],
    focusAreas: [
      "Digital channel and service experience modernisation",
      "Enterprise architecture and integration strategy",
      "Cybersecurity assessment and GRC support",
      "Observability for critical customer journeys",
    ],
    relevantServices: [
      { label: "BFSI Consulting", href: "/services/bfsi-consulting" },
      {
        label: "Enterprise Architecture",
        href: "/services/enterprise-architecture",
      },
      { label: "Cybersecurity & GRC", href: "/services/cybersecurity-grc" },
    ],
    relevantProducts: [
      { label: "CyberEdge360", href: "/products/cyberedge360" },
      { label: "OpsEdge360", href: "/products/opsedge360" },
    ],
  },
  {
    slug: "insurance",
    title: "Insurance",
    summary:
      "Support insurers with digital distribution experiences, operational platforms, and risk-aware technology programmes.",
    challenges: [
      "Distributor and customer experience inconsistency",
      "Claims and policy operations still reliant on fragmented tools",
      "Data quality challenges for product and risk teams",
      "Need for stronger security and audit readiness conversations",
    ],
    focusAreas: [
      "Digital portals and partner experiences",
      "Process automation for operations teams",
      "Data engineering foundations",
      "Security and observability for core journeys",
    ],
    relevantServices: [
      { label: "Website Development", href: "/services/website-development" },
      {
        label: "AI Business Automation",
        href: "/services/ai-business-automation",
      },
      { label: "Data Engineering", href: "/services/data-engineering" },
    ],
    relevantProducts: [
      { label: "GrowthEdge360", href: "/products/growthedge360" },
      { label: "OpsEdge360", href: "/products/opsedge360" },
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    summary:
      "Enable retailers to improve digital commerce, campaign operations, and store-connected technology experiences.",
    challenges: [
      "Catalogue and campaign operations spread across tools",
      "Inconsistent omnichannel customer journeys",
      "Limited visibility into digital funnel hygiene",
      "Integration complexity between commerce, CRM, and fulfilment",
    ],
    focusAreas: [
      "Ecommerce and brand website engineering",
      "Automated sales and marketing operations",
      "CRM and messaging automation",
      "Analytics-ready data pipelines",
    ],
    relevantServices: [
      { label: "Ecommerce Development", href: "/services/ecommerce-development" },
      {
        label: "Automated Sales & Marketing",
        href: "/services/automated-sales-marketing",
      },
      { label: "CRM Automation", href: "/services/crm-automation" },
    ],
    relevantProducts: [
      { label: "GrowthEdge360", href: "/products/growthedge360" },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary:
      "Work with healthcare organisations on digital experiences, secure operations, and practical automation—always with privacy as a design constraint.",
    challenges: [
      "Sensitive data handling requirements",
      "Fragmented patient and operations workflows",
      "Limited observability across clinical and support systems",
      "Need for careful change management",
    ],
    focusAreas: [
      "Secure digital experience delivery",
      "Process automation with human oversight",
      "Cybersecurity and privacy-minded architecture",
      "Operational monitoring for critical services",
    ],
    relevantServices: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Cybersecurity & GRC", href: "/services/cybersecurity-grc" },
      {
        label: "Observability & AIOps",
        href: "/services/observability-aiops",
      },
    ],
    relevantProducts: [
      { label: "CyberEdge360", href: "/products/cyberedge360" },
      { label: "OpsEdge360", href: "/products/opsedge360" },
    ],
  },
  {
    slug: "government",
    title: "Government",
    summary:
      "Support public-sector digital programmes with clear architecture, accessible citizen experiences, and responsible security practice.",
    challenges: [
      "Complex stakeholder and procurement environments",
      "Legacy system constraints",
      "Accessibility and transparency expectations",
      "Security and audit readiness requirements",
    ],
    focusAreas: [
      "Citizen-facing digital experiences",
      "Enterprise architecture advisory",
      "Cloud infrastructure foundations",
      "Cybersecurity assessment support",
    ],
    relevantServices: [
      {
        label: "Enterprise Architecture",
        href: "/services/enterprise-architecture",
      },
      { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
      { label: "Cybersecurity & GRC", href: "/services/cybersecurity-grc" },
    ],
    relevantProducts: [
      { label: "CyberEdge360", href: "/products/cyberedge360" },
      { label: "OpsEdge360", href: "/products/opsedge360" },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary:
      "Help manufacturers connect operations technology conversations with modern IT practices across monitoring, data, and digital enablement.",
    challenges: [
      "Plant and enterprise system fragmentation",
      "Limited visibility into production-supporting IT services",
      "Skills and career development needs across technical teams",
      "Security exposure as connectivity expands",
    ],
    focusAreas: [
      "Observability for operationally critical systems",
      "Data engineering for operational reporting",
      "Secure infrastructure modernisation",
      "Workforce capability and coaching programmes",
    ],
    relevantServices: [
      {
        label: "Observability & AIOps",
        href: "/services/observability-aiops",
      },
      { label: "Data Engineering", href: "/services/data-engineering" },
      { label: "Career Coaching", href: "/services/career-coaching" },
    ],
    relevantProducts: [
      { label: "OpsEdge360", href: "/products/opsedge360" },
      { label: "CareerEdge360", href: "/products/careeredge360" },
    ],
  },
  {
    slug: "telecom",
    title: "Telecom",
    summary:
      "Partner with telecom organisations on digital customer experiences, service reliability, and large-scale operations visibility.",
    challenges: [
      "High-volume customer interaction channels",
      "Complex service assurance expectations",
      "Integration across BSS/OSS-adjacent landscapes",
      "Continuous need for automation and monitoring maturity",
    ],
    focusAreas: [
      "Digital and mobile experience engineering",
      "WhatsApp and messaging automation patterns",
      "Observability and incident operations",
      "AI-assisted operational workflows",
    ],
    relevantServices: [
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      { label: "WhatsApp Automation", href: "/services/whatsapp-automation" },
      {
        label: "Observability & AIOps",
        href: "/services/observability-aiops",
      },
    ],
    relevantProducts: [
      { label: "OpsEdge360", href: "/products/opsedge360" },
      { label: "GrowthEdge360", href: "/products/growthedge360" },
    ],
  },
  {
    slug: "energy",
    title: "Energy",
    summary:
      "Support energy and utilities technology programmes spanning secure infrastructure, operational visibility, and digital stakeholder experiences.",
    challenges: [
      "Critical infrastructure reliability expectations",
      "Expanding cyber risk surface",
      "Field and enterprise process fragmentation",
      "Need for trustworthy operational data",
    ],
    focusAreas: [
      "Cybersecurity and governance support",
      "Cloud and infrastructure modernisation",
      "Observability for critical services",
      "Data foundations for operations reporting",
    ],
    relevantServices: [
      { label: "Cybersecurity & GRC", href: "/services/cybersecurity-grc" },
      { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
      { label: "Data Engineering", href: "/services/data-engineering" },
    ],
    relevantProducts: [
      { label: "CyberEdge360", href: "/products/cyberedge360" },
      { label: "OpsEdge360", href: "/products/opsedge360" },
    ],
  },
  {
    slug: "it-ites",
    title: "IT & ITeS",
    summary:
      "Help IT and ITeS organisations productise offerings, strengthen delivery platforms, and upskill talent with structured career programmes.",
    challenges: [
      "Productising services into scalable platforms",
      "Maintaining delivery quality across distributed teams",
      "Talent development and career pathway clarity",
      "Need for stronger internal tooling and automation",
    ],
    focusAreas: [
      "SaaS and platform engineering",
      "AI and business automation",
      "Career coaching and capability programmes",
      "Growth operations for service sales teams",
    ],
    relevantServices: [
      { label: "SaaS Development", href: "/services/saas-development" },
      {
        label: "AI Business Automation",
        href: "/services/ai-business-automation",
      },
      { label: "Career Coaching", href: "/services/career-coaching" },
    ],
    relevantProducts: [
      { label: "CareerEdge360", href: "/products/careeredge360" },
      { label: "GrowthEdge360", href: "/products/growthedge360" },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export const industrySlugs = industries.map((industry) => industry.slug);

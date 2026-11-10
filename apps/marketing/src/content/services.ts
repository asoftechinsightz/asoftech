export type ServiceCategory =
  | "digital"
  | "growth"
  | "enterprise"
  | "security"
  | "ops"
  | "data"
  | "career";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  outcomes: string[];
  capabilities: string[];
  whoFor: string[];
  relatedHref?: string;
  relatedLabel?: string;
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    category: "digital",
    summary:
      "Design and engineer responsive corporate, product, and campaign websites that communicate clearly, load quickly, and support measurable enquiry journeys.",
    outcomes: [
      "Modern marketing and product web experiences aligned to brand",
      "Accessible, responsive layouts across desktop and mobile",
      "SEO-ready information architecture and metadata foundations",
      "Secure, maintainable delivery with clear handover documentation",
    ],
    capabilities: [
      "Information architecture and UX for corporate sites",
      "Component-driven UI implementation",
      "Content modelling for marketing pages and landing flows",
      "Performance, accessibility, and basic technical SEO hygiene",
      "Analytics event planning for key conversion points",
      "Hosting-ready builds for VPS or managed platforms",
    ],
    whoFor: [
      "Enterprises refreshing corporate web presence",
      "Product companies launching portfolio sites",
      "SMBs needing a professional digital storefront",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "digital",
    summary:
      "Plan and build mobile experiences that support customer engagement, field operations, or internal productivity with pragmatic product scope.",
    outcomes: [
      "Clear product scope before engineering begins",
      "Cross-platform or native delivery paths matched to constraints",
      "Secure authentication and API integration patterns",
      "Release-ready builds with maintainable code structure",
    ],
    capabilities: [
      "Discovery workshops and mobile UX flows",
      "iOS/Android and cross-platform engineering options",
      "API integration and offline-tolerant patterns where needed",
      "Push notification and engagement feature planning",
      "App store readiness support and release checklists",
      "Post-launch maintenance planning",
    ],
    whoFor: [
      "Businesses digitising customer journeys on mobile",
      "Operations teams needing field-ready apps",
      "Product owners validating an MVP mobile experience",
    ],
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    category: "digital",
    summary:
      "Build commerce experiences that balance catalogue clarity, checkout reliability, and operational readiness for growing brands.",
    outcomes: [
      "Shopper journeys designed for clarity and conversion hygiene",
      "Catalogue, cart, and checkout flows that operations can manage",
      "Integration planning for payments, logistics, and CRM",
      "Admin-friendly content and merchandising foundations",
    ],
    capabilities: [
      "Storefront UX and merchandising structure",
      "Catalogue, pricing, and inventory workflow design",
      "Payment and fulfilment integration planning",
      "Promotions and campaign landing support",
      "Order operations and customer notification flows",
      "Performance and security hardening for public storefronts",
    ],
    whoFor: [
      "Brands launching or modernising digital commerce",
      "Retailers expanding into direct-to-consumer channels",
      "Organisations needing B2B catalogue experiences",
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    category: "digital",
    summary:
      "Partner on multi-tenant product engineering—from MVP foundations to scalable module delivery—with product thinking baked into delivery.",
    outcomes: [
      "Product backlog shaped around real user jobs",
      "Secure multi-tenant architecture foundations",
      "Iterative release cadence with observable quality",
      "Documentation that supports ongoing product evolution",
    ],
    capabilities: [
      "Product discovery and module roadmap facilitation",
      "Multi-tenant application architecture",
      "Subscription, roles, and workspace patterns",
      "API design and integration surfaces",
      "Observability and operational readiness for SaaS estates",
      "Design-system-aligned front-end engineering",
    ],
    whoFor: [
      "Founders validating SaaS product direction",
      "Enterprises productising internal platforms",
      "Teams expanding an existing SaaS module portfolio",
    ],
  },
  {
    slug: "automated-sales-marketing",
    title: "Automated Sales & Marketing",
    category: "growth",
    summary:
      "Design and implement automated sales and marketing operating models powered by GrowthEdge360—connecting prospecting, nurture, and CRM discipline.",
    outcomes: [
      "Documented ICP and campaign operating model",
      "Automation sequences that reduce manual follow-up gaps",
      "Clearer sales and marketing handoff rules",
      "Visibility into funnel activity without fabricated metrics",
    ],
    capabilities: [
      "Growth process design and playbook drafting",
      "Lead capture and qualification workflow design",
      "Outbound and nurture sequence orchestration",
      "CRM hygiene and activity alignment",
      "GrowthEdge360 configuration and enablement",
      "Operator training for sustainable adoption",
    ],
    whoFor: [
      "SMBs professionalising demand generation",
      "Sales teams needing consistent follow-up systems",
      "Marketing operations teams consolidating tools",
    ],
    relatedHref: "/products/growthedge360",
    relatedLabel: "Explore GrowthEdge360",
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    category: "growth",
    summary:
      "Build ethical, process-driven lead generation systems that emphasise targeting quality, consent-aware capture, and follow-up reliability.",
    outcomes: [
      "Defined targeting criteria and channel mix",
      "Capture forms and landing journeys that respect consent",
      "Routing rules that get enquiries to the right owners",
      "Measurement plan based on real operational data",
    ],
    capabilities: [
      "ICP and segment definition workshops",
      "Landing page and form experience design",
      "Lead scoring and routing rule design",
      "Campaign operations support",
      "CRM integration for enquiry continuity",
      "Reporting frameworks for activity and conversion hygiene",
    ],
    whoFor: [
      "Teams rebuilding fragmented lead intake",
      "Organisations launching new service lines",
      "Partners needing structured enquiry operations",
    ],
    relatedHref: "/products/growthedge360",
    relatedLabel: "Powered with GrowthEdge360",
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    category: "growth",
    summary:
      "Improve CRM usefulness with automation that keeps records current, reminders timely, and stages meaningful for revenue teams.",
    outcomes: [
      "Cleaner stage definitions and ownership rules",
      "Reduced manual data entry for routine updates",
      "Better visibility of pipeline hygiene issues",
      "Automation that supports—not replaces—seller judgement",
    ],
    capabilities: [
      "CRM process discovery and data model cleanup",
      "Workflow automation for tasks, reminders, and assignments",
      "Lead-to-opportunity pathway design",
      "Integration with marketing and support tools",
      "Dashboard design for operators and managers",
      "Change management and team enablement",
    ],
    whoFor: [
      "Revenue teams struggling with CRM adoption",
      "Organisations migrating or consolidating CRM platforms",
      "Operations leaders standardising pipeline language",
    ],
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    category: "growth",
    summary:
      "Design compliant WhatsApp business journeys for notifications, support handoffs, and nurture conversations with clear human escalation paths.",
    outcomes: [
      "Message journeys mapped to approved business use cases",
      "Templates and flows that respect platform policies",
      "Handoff rules from bot to human agents",
      "Auditability for conversation operations",
    ],
    capabilities: [
      "Use-case discovery for service and sales messaging",
      "Template and conversation flow design",
      "CRM and ticketing integration planning",
      "Opt-in and preference management patterns",
      "Agent workspace handoff design",
      "Monitoring for delivery and response operations",
    ],
    whoFor: [
      "Customer teams using WhatsApp as a primary channel",
      "Sales organisations coordinating high-touch follow-up",
      "Service desks seeking structured messaging workflows",
    ],
  },
  {
    slug: "ai-business-automation",
    title: "AI Business Automation",
    category: "data",
    summary:
      "Identify practical AI automation opportunities across operations, support, and knowledge work—with governance and human oversight as first-class concerns.",
    outcomes: [
      "Prioritised automation backlog tied to business processes",
      "Pilot designs with success criteria and risk controls",
      "Human-in-the-loop patterns for sensitive decisions",
      "Reusable automation components where appropriate",
    ],
    capabilities: [
      "Process mining-style opportunity workshops",
      "Document and workflow automation design",
      "Assistive AI for support and operations teams",
      "Prompt and evaluation patterns for controlled use",
      "Data privacy and access control considerations",
      "Change management for AI-assisted workflows",
    ],
    whoFor: [
      "Operations leaders seeking realistic AI pilots",
      "Enterprises modernising repetitive knowledge work",
      "Teams needing governance-aware automation design",
    ],
  },
  {
    slug: "enterprise-architecture",
    title: "Enterprise Architecture",
    category: "enterprise",
    summary:
      "Guide technology decisions with pragmatic architecture practices spanning business capability maps, integration strategy, and platform roadmaps.",
    outcomes: [
      "Shared architecture principles and decision records",
      "Capability and system landscape clarity",
      "Integration and data movement strategy",
      "Roadmaps that balance ambition with delivery reality",
    ],
    capabilities: [
      "Current-state architecture discovery",
      "Target-state options and trade-off analysis",
      "Integration pattern selection",
      "Cloud and platform strategy facilitation",
      "Security and resilience architecture inputs",
      "Architecture governance rhythms",
    ],
    whoFor: [
      "CIOs and enterprise architects modernising estates",
      "Transformation programmes needing decision frameworks",
      "Organisations consolidating overlapping systems",
    ],
  },
  {
    slug: "bfsi-consulting",
    title: "BFSI Consulting",
    category: "enterprise",
    summary:
      "Support banking, financial services, and insurance technology initiatives with domain-aware consulting across digital, risk, and platform modernisation.",
    outcomes: [
      "Business-aligned technology recommendations for BFSI contexts",
      "Clearer delivery sequencing for regulated environments",
      "Stakeholder alignment across business, risk, and IT",
      "Pragmatic modernisation plans without overclaiming compliance outcomes",
    ],
    capabilities: [
      "Digital channel and journey modernisation advisory",
      "Core-adjacent platform and integration consulting",
      "Risk, security, and control conversation support",
      "Vendor and solution evaluation facilitation",
      "Operating model and delivery governance design",
      "Cross-functional workshop facilitation",
    ],
    whoFor: [
      "Banks and NBFCs planning digital programmes",
      "Insurers modernising customer and operations platforms",
      "BFSI technology leaders needing independent architecture counsel",
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    category: "enterprise",
    summary:
      "Design and implement cloud infrastructure foundations that emphasise reliability, cost awareness, security baselines, and operability.",
    outcomes: [
      "Environment topology matched to workload needs",
      "Infrastructure-as-code foundations where appropriate",
      "Network, identity, and baseline security controls",
      "Operational runbooks for common failure scenarios",
    ],
    capabilities: [
      "Landing zone and account structure design",
      "Compute, storage, and networking architecture",
      "CI/CD and environment promotion patterns",
      "Backup, restore, and resilience planning",
      "Cost visibility and tagging discipline",
      "Security baseline and secrets handling guidance",
    ],
    whoFor: [
      "Teams migrating workloads to cloud",
      "Product organisations needing reliable non-prod and prod estates",
      "Enterprises standardising multi-account cloud practice",
    ],
  },
  {
    slug: "cybersecurity-grc",
    title: "Cybersecurity & GRC",
    category: "security",
    summary:
      "Strengthen cybersecurity assessment, vulnerability workflows, and governance conversations—optionally accelerated with CyberEdge360.",
    outcomes: [
      "Structured assessment and findings programmes",
      "Clearer ownership of remediation work",
      "Risk language that business stakeholders can use",
      "Evidence-friendly reporting for governance forums",
    ],
    capabilities: [
      "Cybersecurity assessment planning and facilitation",
      "Vulnerability management process design",
      "Control mapping and gap analysis support",
      "Policy and procedure operating model advice",
      "CyberEdge360 enablement where product fit exists",
      "Leadership and risk committee reporting packs",
    ],
    whoFor: [
      "Security leaders building repeatable assessment rhythms",
      "GRC teams connecting technical findings to risk",
      "Regulated organisations improving posture visibility",
    ],
    relatedHref: "/products/cyberedge360",
    relatedLabel: "Explore CyberEdge360",
  },
  {
    slug: "observability-aiops",
    title: "Observability & AIOps",
    category: "ops",
    summary:
      "Improve monitoring, incident correlation, and AIOps-assisted operations with practices that can be complemented by OpsEdge360.",
    outcomes: [
      "Service-oriented monitoring coverage for critical journeys",
      "Reduced alert noise through correlation and ownership design",
      "Incident workflows aligned to ITSM practice",
      "Continuous improvement loops for runbooks and telemetry",
    ],
    capabilities: [
      "Observability strategy and telemetry design",
      "SLO/SLA conversation facilitation",
      "Alert topology and on-call process design",
      "Incident management tooling alignment",
      "AIOps assistance patterns with human oversight",
      "OpsEdge360 configuration and enablement",
    ],
    whoFor: [
      "IT operations and SRE organisations",
      "Enterprises consolidating monitoring estates",
      "NOC teams seeking clearer incident workflows",
    ],
    relatedHref: "/products/opsedge360",
    relatedLabel: "Explore OpsEdge360",
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    category: "data",
    summary:
      "Build reliable data pipelines and analytics foundations so teams can trust the information behind operational and leadership decisions.",
    outcomes: [
      "Documented source-to-consumption data flows",
      "Pipelines designed for reliability and observability",
      "Clear ownership of datasets and quality checks",
      "Analytics-ready models without overstating insight guarantees",
    ],
    capabilities: [
      "Data discovery and source system mapping",
      "ETL/ELT pipeline design and implementation",
      "Warehouse and lakehouse modelling patterns",
      "Data quality checks and lineage documentation",
      "Access control and sensitive data handling guidance",
      "BI-ready semantic modelling support",
    ],
    whoFor: [
      "Organisations replacing fragile spreadsheet pipelines",
      "Product and operations teams needing trusted metrics foundations",
      "Enterprises consolidating fragmented reporting estates",
    ],
  },
  {
    slug: "career-coaching",
    title: "Career Coaching",
    category: "career",
    summary:
      "Deliver structured career coaching programmes supported by CareerEdge360 for assessment, discovery, and development planning—without job or placement guarantees.",
    outcomes: [
      "Coaching frameworks that learners and coaches can follow",
      "Assessment-informed development conversations",
      "Clear programme administration for cohorts",
      "Ethical guidance language that avoids outcome guarantees",
    ],
    capabilities: [
      "Career programme design for institutions and employers",
      "Coach enablement and session structure design",
      "Assessment and pathway discovery facilitation",
      "Guardian consent and privacy considerations for minors",
      "CareerEdge360 workspace configuration",
      "Progress review rituals and reporting for programme owners",
    ],
    whoFor: [
      "Educational institutions and skilling partners",
      "Employers running internal career development programmes",
      "Independent coaches seeking structured delivery support",
    ],
    relatedHref: "/products/careeredge360",
    relatedLabel: "Explore CareerEdge360",
  },
];

export const serviceCategories: {
  id: ServiceCategory;
  title: string;
  description: string;
}[] = [
  {
    id: "digital",
    title: "Digital Engineering",
    description: "Websites, mobile, ecommerce, and SaaS product engineering.",
  },
  {
    id: "growth",
    title: "Automated Sales & Marketing",
    description: "Lead generation, CRM automation, and GrowthEdge360-powered motions.",
  },
  {
    id: "enterprise",
    title: "Enterprise Consulting",
    description: "Architecture, BFSI consulting, and cloud infrastructure.",
  },
  {
    id: "security",
    title: "Cybersecurity & GRC",
    description: "Assessment, vulnerability workflows, and governance support.",
  },
  {
    id: "ops",
    title: "Observability & AIOps",
    description: "Monitoring, incident operations, and AIOps assistance.",
  },
  {
    id: "data",
    title: "AI, Data & Automation",
    description: "Data engineering and practical AI business automation.",
  },
  {
    id: "career",
    title: "Career Coaching",
    description: "Structured coaching programmes supported by CareerEdge360.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);

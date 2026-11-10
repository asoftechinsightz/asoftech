export type ProductSlug =
  | "growthedge360"
  | "careeredge360"
  | "cyberedge360"
  | "opsedge360";

export type Product = {
  slug: ProductSlug;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  problem: string;
  audience: string[];
  features: { title: string; description: string }[];
  benefits: string[];
  workflow: { step: string; title: string; description: string }[];
  mockups: { label: string; title: string; description: string }[];
  technical: string[];
  faqs: { question: string; answer: string }[];
  accent: "blue" | "cyan" | "navy" | "slate";
};

export const products: Product[] = [
  {
    slug: "growthedge360",
    name: "GrowthEdge360",
    shortName: "Growth",
    tagline: "AI-powered growth for modern SMBs and sales teams",
    summary:
      "GrowthEdge360 helps organizations find qualified prospects, nurture conversations, and run coordinated marketing and sales motions with intelligent automation—without inventing vanity metrics or promising overnight results.",
    problem:
      "Growth teams often stitch together disconnected tools for prospecting, outreach, CRM updates, and campaign follow-up. Context gets lost, handoffs slow down, and leadership lacks a clear operating picture of what is working.",
    audience: [
      "SMB founders and revenue leaders",
      "Sales development and marketing operations teams",
      "Agencies running multi-client outreach programmes",
      "Enterprises modernising demand-generation workflows",
    ],
    features: [
      {
        title: "Prospect intelligence",
        description:
          "Organise target accounts and contact signals so teams start with clearer, more relevant outreach lists.",
      },
      {
        title: "Lead generation workflows",
        description:
          "Design repeatable capture and qualification paths across web, forms, and campaign channels.",
      },
      {
        title: "Marketing automation",
        description:
          "Coordinate nurture sequences, reminders, and handoffs so messaging stays consistent across the funnel.",
      },
      {
        title: "Sales assist surfaces",
        description:
          "Give sellers a focused view of next best actions, conversation status, and follow-up priorities.",
      },
      {
        title: "CRM-friendly operations",
        description:
          "Keep activity aligned with CRM practices so pipeline hygiene improves instead of creating another silo.",
      },
      {
        title: "Insight dashboards",
        description:
          "Surface funnel health and activity trends for operators—without fabricating performance claims.",
      },
    ],
    benefits: [
      "Reduce tool-switching across prospecting and nurture motions",
      "Improve consistency of outreach and follow-up discipline",
      "Give marketing and sales a shared operating language",
      "Scale repeatable growth processes as the team expands",
    ],
    workflow: [
      {
        step: "01",
        title: "Define ICP and offers",
        description:
          "Capture ideal customer profiles, territories, and campaign intents to frame the growth motion.",
      },
      {
        step: "02",
        title: "Build prospecting lists",
        description:
          "Assemble and enrich target accounts and contacts for focused outbound and inbound follow-up.",
      },
      {
        step: "03",
        title: "Automate nurture and handoffs",
        description:
          "Route conversations into sequenced outreach, reminders, and sales-ready queues.",
      },
      {
        step: "04",
        title: "Measure and refine",
        description:
          "Review activity and conversion patterns with operators, then iterate messaging and process design.",
      },
    ],
    mockups: [
      {
        label: "Conceptual mockup",
        title: "Growth command board",
        description:
          "A conceptual dashboard for pipeline stages, active sequences, and follow-up queues.",
      },
      {
        label: "Conceptual mockup",
        title: "Prospect workspace",
        description:
          "Account and contact cards with outreach status, notes, and next recommended actions.",
      },
      {
        label: "Conceptual mockup",
        title: "Campaign orchestration",
        description:
          "A visual sequence builder connecting channels, delays, and CRM status updates.",
      },
    ],
    technical: [
      "Modular growth workflow services designed for progressive rollout",
      "API-friendly integration patterns for CRM and marketing tools",
      "Role-based workspace concepts for marketing and sales operators",
      "Audit-friendly activity trails for outreach and handoff events",
      "Configurable data retention aligned to organisational policies",
    ],
    faqs: [
      {
        question: "Is GrowthEdge360 a replacement for our CRM?",
        answer:
          "It is designed to complement CRM practice—not invent a disconnected system of record. Integration and operating model details are confirmed during discovery.",
      },
      {
        question: "Can it support agency or multi-brand motions?",
        answer:
          "Yes. Workspace separation and campaign orchestration patterns are part of the product direction for teams managing multiple brands or clients.",
      },
      {
        question: "Do you guarantee lead volume or revenue outcomes?",
        answer:
          "No. GrowthEdge360 improves process consistency and visibility. Business results depend on market fit, messaging, and execution quality.",
      },
    ],
    accent: "blue",
  },
  {
    slug: "careeredge360",
    name: "CareerEdge360",
    shortName: "Career",
    tagline: "Career intelligence for assessment, discovery, and development",
    summary:
      "CareerEdge360 helps individuals and organisations explore strengths, clarify pathways, and structure coaching conversations. It does not guarantee jobs, placements, admissions, or salary outcomes.",
    problem:
      "Career decisions are often made with fragmented assessments, informal advice, and little continuity between discovery, skill planning, and coaching. Learners and professionals need structured guidance—not unrealistic promises.",
    audience: [
      "Students and early-career professionals exploring pathways",
      "Working professionals planning role transitions",
      "Coaches, mentors, and learning partners",
      "Institutions and employers supporting career development programmes",
    ],
    features: [
      {
        title: "Career assessments",
        description:
          "Structured evaluation flows that help surface interests, aptitudes, and readiness themes for discussion.",
      },
      {
        title: "Pathway discovery",
        description:
          "Explore role families and learning directions based on assessment signals and stated goals.",
      },
      {
        title: "Development planning",
        description:
          "Translate insights into skill priorities, milestones, and reflection checkpoints.",
      },
      {
        title: "Coaching workspaces",
        description:
          "Support coach–learner conversations with shared context, notes, and progress visibility.",
      },
      {
        title: "Guardian-aware access patterns",
        description:
          "Where minors are involved, privacy and guardian consent considerations are part of the product design conversation.",
      },
      {
        title: "Programme administration",
        description:
          "Help institutions organise cohorts, coaches, and reporting without overstating outcomes.",
      },
    ],
    benefits: [
      "Bring structure to career discovery and coaching programmes",
      "Create continuity between assessment insights and development plans",
      "Support ethical guidance without placement guarantees",
      "Give coaches and institutions a clearer operating workspace",
    ],
    workflow: [
      {
        step: "01",
        title: "Assess",
        description:
          "Complete guided assessments that gather interests, preferences, and readiness inputs.",
      },
      {
        step: "02",
        title: "Discover",
        description:
          "Review suggested pathways and role themes as a starting point for informed discussion.",
      },
      {
        step: "03",
        title: "Plan",
        description:
          "Define skill priorities, learning actions, and checkpoints with a coach or mentor.",
      },
      {
        step: "04",
        title: "Develop",
        description:
          "Track progress, refine plans, and keep coaching conversations grounded in shared context.",
      },
    ],
    mockups: [
      {
        label: "Conceptual mockup",
        title: "Assessment journey",
        description:
          "A guided multi-step assessment experience with clear progress and privacy notices.",
      },
      {
        label: "Conceptual mockup",
        title: "Pathway explorer",
        description:
          "Role-family cards and development themes presented as exploratory guidance, not guarantees.",
      },
      {
        label: "Conceptual mockup",
        title: "Coach workspace",
        description:
          "Shared learner context, session notes, and milestone tracking for coaching programmes.",
      },
    ],
    technical: [
      "Assessment and pathway modules designed for iterative product delivery",
      "Privacy-first data handling concepts for learner profiles",
      "Guardian consent workflows for applicable minor-user scenarios",
      "Coach and institution role models with least-privilege access patterns",
      "Exportable summaries for coaching conversations and programme reviews",
    ],
    faqs: [
      {
        question: "Does CareerEdge360 guarantee a job or placement?",
        answer:
          "No. CareerEdge360 supports assessment, discovery, development planning, and coaching. It does not promise employment, admissions, or salary outcomes.",
      },
      {
        question: "Can it be used with minors?",
        answer:
          "Where minors participate, privacy controls and guardian consent requirements must be addressed as part of programme design and deployment.",
      },
      {
        question: "Is this a replacement for professional counselling?",
        answer:
          "It is a structured career intelligence and coaching support platform. High-stakes decisions should still involve qualified human guidance.",
      },
    ],
    accent: "cyan",
  },
  {
    slug: "cyberedge360",
    name: "CyberEdge360",
    shortName: "Cyber",
    tagline: "Cybersecurity assessment, posture visibility, and governance support",
    summary:
      "CyberEdge360 helps organisations understand exposure, organise vulnerability and risk workflows, and strengthen governance conversations. CyberAudit may appear as a potential assessment module within the CyberEdge360 portfolio.",
    problem:
      "Security teams struggle to connect assessments, vulnerability findings, ownership, and governance reporting into one operating rhythm. Fragmented tools make residual risk harder to explain to leadership.",
    audience: [
      "CISOs and security leaders",
      "GRC and risk teams",
      "Infrastructure and application owners",
      "BFSI and regulated enterprises seeking clearer posture visibility",
    ],
    features: [
      {
        title: "Assessment programmes",
        description:
          "Structure cybersecurity assessments and findings so remediation conversations start from shared evidence.",
      },
      {
        title: "Vulnerability management workflows",
        description:
          "Track issues, owners, severity themes, and remediation status across teams.",
      },
      {
        title: "Posture visibility",
        description:
          "Present a coherent view of controls, open risks, and improvement priorities for operators and leadership.",
      },
      {
        title: "Risk and governance alignment",
        description:
          "Connect technical findings to risk language that GRC stakeholders can act on.",
      },
      {
        title: "CyberAudit module concept",
        description:
          "CyberAudit may be offered as a potential assessment module within CyberEdge360 for structured review programmes.",
      },
      {
        title: "Evidence-friendly reporting",
        description:
          "Support audit and leadership conversations with clear summaries—not unverifiable claims.",
      },
    ],
    benefits: [
      "Improve clarity of cybersecurity assessment outcomes",
      "Reduce handoff friction between security, IT, and GRC teams",
      "Support prioritised remediation planning",
      "Strengthen governance conversations with structured evidence",
    ],
    workflow: [
      {
        step: "01",
        title: "Scope the assessment",
        description:
          "Define assets, environments, and control themes for the engagement or continuous programme.",
      },
      {
        step: "02",
        title: "Collect and classify findings",
        description:
          "Organise vulnerabilities, gaps, and observations into actionable workstreams.",
      },
      {
        step: "03",
        title: "Assign and remediate",
        description:
          "Route ownership, track progress, and keep residual risk visible to stakeholders.",
      },
      {
        step: "04",
        title: "Report and govern",
        description:
          "Summarise posture, priorities, and governance actions for leadership and audit forums.",
      },
    ],
    mockups: [
      {
        label: "Conceptual mockup",
        title: "Posture overview",
        description:
          "A leadership-facing view of open findings, risk themes, and remediation progress.",
      },
      {
        label: "Conceptual mockup",
        title: "Finding workspace",
        description:
          "Issue detail with severity context, owners, evidence notes, and remediation status.",
      },
      {
        label: "Conceptual mockup",
        title: "Governance pack",
        description:
          "Structured summary panels for risk committees and control owners.",
      },
    ],
    technical: [
      "Assessment and findings data model suited to remediation workflows",
      "Role-based access for security, IT, and GRC stakeholders",
      "Integration-ready patterns for scanners and ticketing systems",
      "Evidence and attachment concepts for audit conversations",
      "Configurable retention and export controls",
    ],
    faqs: [
      {
        question: "Is CyberEdge360 a managed SOC replacement?",
        answer:
          "No. It focuses on assessment, vulnerability and posture workflows, and governance support. Managed detection services are a separate conversation if required.",
      },
      {
        question: "What is CyberAudit?",
        answer:
          "CyberAudit may be positioned as a potential assessment module inside CyberEdge360. It is not a separate product brand.",
      },
      {
        question: "Do you claim certification outcomes?",
        answer:
          "No. Certifications and audit opinions depend on independent assessors and organisational readiness. CyberEdge360 supports preparation and visibility workstreams.",
      },
    ],
    accent: "navy",
  },
  {
    slug: "opsedge360",
    name: "OpsEdge360",
    shortName: "Ops",
    tagline: "Enterprise observability, ITOM, ITSM alignment, and AIOps support",
    summary:
      "OpsEdge360 helps technology teams monitor infrastructure and applications, organise operational signals, and connect incidents to improvement routines with AIOps-oriented assistance.",
    problem:
      "Operations teams receive alerts from many tools without enough correlation, ownership clarity, or linkage to service management practice. Noise rises while mean-time-to-understanding suffers.",
    audience: [
      "IT operations and SRE leaders",
      "NOC and support organisations",
      "Platform and infrastructure teams",
      "Enterprises aligning monitoring with ITSM processes",
    ],
    features: [
      {
        title: "Infrastructure and app monitoring concepts",
        description:
          "Bring host, service, and application signals into a coherent operational picture.",
      },
      {
        title: "Alert correlation themes",
        description:
          "Reduce noise by grouping related events and focusing attention on actionable incidents.",
      },
      {
        title: "ITOM workspaces",
        description:
          "Support day-to-day operations with health views, ownership, and escalation context.",
      },
      {
        title: "ITSM-aligned incident flows",
        description:
          "Connect monitoring signals to incident and change conversations used by service teams.",
      },
      {
        title: "AIOps assistance",
        description:
          "Use intelligent assistance concepts to highlight patterns, probable causes, and next checks—always with human oversight.",
      },
      {
        title: "Operational reporting",
        description:
          "Summarise availability themes and incident trends for technology leadership reviews.",
      },
    ],
    benefits: [
      "Improve signal-to-noise for operations teams",
      "Shorten time-to-understanding during incidents",
      "Align monitoring practice with ITSM routines",
      "Give leaders a clearer view of operational health",
    ],
    workflow: [
      {
        step: "01",
        title: "Instrument and map services",
        description:
          "Identify critical services, dependencies, and telemetry sources for the operating model.",
      },
      {
        step: "02",
        title: "Detect and correlate",
        description:
          "Ingest alerts and events, then organise them into actionable incident candidates.",
      },
      {
        step: "03",
        title: "Respond and collaborate",
        description:
          "Route ownership, capture investigation context, and coordinate remediation actions.",
      },
      {
        step: "04",
        title: "Learn and improve",
        description:
          "Review incident patterns, tune alerts, and feed improvements back into runbooks and monitoring.",
      },
    ],
    mockups: [
      {
        label: "Conceptual mockup",
        title: "Service health board",
        description:
          "A conceptual view of critical services, dependency status, and active incidents.",
      },
      {
        label: "Conceptual mockup",
        title: "Incident timeline",
        description:
          "Correlated events, responder notes, and escalation markers on a shared timeline.",
      },
      {
        label: "Conceptual mockup",
        title: "AIOps assist panel",
        description:
          "Suggested checks and pattern highlights presented as assistance, not autonomous decisions.",
      },
    ],
    technical: [
      "Telemetry and alert ingestion patterns for hybrid estates",
      "Correlation and incident workspace concepts",
      "Integration-friendly hooks for ITSM and collaboration tools",
      "Role-based operations views for NOC, SRE, and service owners",
      "Retention and audit considerations for operational event history",
    ],
    faqs: [
      {
        question: "Does OpsEdge360 replace all existing monitoring tools overnight?",
        answer:
          "No. It is designed for progressive adoption and integration with existing telemetry and ITSM ecosystems.",
      },
      {
        question: "Is AIOps fully autonomous?",
        answer:
          "AIOps features are positioned as decision support for operators. Critical actions remain under human control.",
      },
      {
        question: "Can it support regulated environments?",
        answer:
          "Deployment patterns, access control, and retention can be discussed against organisational and regulatory requirements during discovery.",
      },
    ],
    accent: "slate",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export const productSlugs = products.map((product) => product.slug);

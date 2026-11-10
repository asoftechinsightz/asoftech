export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "designing-growth-ops-without-vanity-metrics",
    title: "Designing growth operations without vanity metrics",
    excerpt:
      "How sales and marketing teams can build automation that improves follow-up discipline instead of chasing inflated dashboards.",
    category: "Growth",
    readingTime: "6 min",
    publishedAt: "2026-03-12",
    body: [
      "Growth teams often ask for more dashboards before they have a shared operating language. The result is activity theatre: more charts, less clarity about ownership, handoffs, and next actions.",
      "A healthier starting point is process design. Define the ideal customer profile, the moments when a lead becomes sales-ready, and the reminders that should fire when humans need to intervene. Automation then supports discipline rather than inventing outcomes.",
      "GrowthEdge360 is built around that philosophy. It helps teams coordinate prospecting, nurture, and CRM hygiene without promising miraculous conversion rates. The useful question is not “How do we look busier?” but “Where does context get lost between marketing and sales?”",
      "When leadership reviews growth health, favour operational truths: unfinished sequences, stale opportunities, response latency, and campaign-to-conversation continuity. Those signals improve coaching conversations more than decorative scorecards.",
    ],
  },
  {
    slug: "career-guidance-that-respects-uncertainty",
    title: "Career guidance that respects uncertainty",
    excerpt:
      "Why career platforms should support discovery and coaching without guaranteeing jobs, placements, or salary outcomes.",
    category: "Career",
    readingTime: "5 min",
    publishedAt: "2026-02-18",
    body: [
      "Career decisions sit at the intersection of aptitude, interest, market reality, and personal constraints. Tools that overpromise placements create distrust. Tools that only dump generic advice create inertia.",
      "A better model is structured discovery: assessments that spark reflection, pathway suggestions framed as options, and coaching workspaces that keep plans alive over time. Learners still make the decisions. Coaches still provide judgement.",
      "CareerEdge360 follows that ethic. It does not guarantee employment or admissions. Where minors participate, privacy and guardian consent are design concerns—not footnotes.",
      "Institutions and employers can use this approach to professionalise programmes while staying honest about what technology can and cannot determine.",
    ],
  },
  {
    slug: "making-security-findings-actionable-for-leadership",
    title: "Making security findings actionable for leadership",
    excerpt:
      "Turning vulnerability lists into governance conversations that business and technology stakeholders can actually use.",
    category: "Cybersecurity",
    readingTime: "7 min",
    publishedAt: "2026-01-28",
    body: [
      "Security teams rarely lack findings. What they lack is a shared remediation operating rhythm. Spreadsheets multiply, ownership blurs, and leadership hears either too much noise or too little evidence.",
      "Actionable security programmes classify findings, assign owners, track residual risk, and translate technical exposure into decisions leadership can fund or accept. Assessment quality matters, but so does the workflow after the assessment.",
      "CyberEdge360 focuses on that connective tissue—assessment structure, vulnerability workflows, posture visibility, and governance support. CyberAudit may appear as a potential module within that portfolio, not as a separate brand promise.",
      "The goal is not theatrical compliance language. It is durable clarity: what is exposed, who owns the fix, what remains accepted, and how the organisation will re-check.",
    ],
  },
  {
    slug: "observability-before-aiops-theatre",
    title: "Observability before AIOps theatre",
    excerpt:
      "AIOps only helps when services are mapped, alerts are owned, and incident practice already has a pulse.",
    category: "Operations",
    readingTime: "6 min",
    publishedAt: "2025-12-09",
    body: [
      "AIOps marketing can skip the hard prerequisites: knowing which services matter, which signals indicate user impact, and who responds when something breaks. Without those foundations, smarter algorithms amplify confusion.",
      "Start with service maps, alert ownership, and incident timelines that humans can trust. Correlation and assistance features then have somewhere useful to land.",
      "OpsEdge360 is designed around that sequence—monitoring concepts, operational workspaces, ITSM-aligned incident flows, and AIOps assistance with human oversight.",
      "When leaders ask for AIOps, translate the request into maturity work: reduce noise, shorten time-to-understanding, and improve learning loops after incidents. Intelligence features become multipliers, not magic.",
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug);
}

export const insightSlugs = insights.map((insight) => insight.slug);

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CloudCog,
  Eye,
  LineChart,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { products } from "@/content/products";
import { siteConfig } from "@/content/site";
import { cx } from "@/lib/utils";

const methodology = [
  {
    step: "01",
    title: "Discover",
    description:
      "Clarify goals, constraints, stakeholders, and the operating reality before recommending change.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Shape architecture, experience, and delivery plans that teams can actually execute.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "Build in focused increments with transparent progress, quality checks, and documentation.",
  },
  {
    step: "04",
    title: "Operate & improve",
    description:
      "Leave behind operable systems, enablement, and improvement loops—not just a handover deck.",
  },
];

const techExpertise = [
  "Next.js & modern web platforms",
  "Mobile and API-centric product engineering",
  "Cloud infrastructure foundations",
  "CRM and growth automation workflows",
  "Cybersecurity assessment & GRC support",
  "Observability, ITOM, and AIOps patterns",
  "Data pipelines and analytics foundations",
  "Practical AI automation with human oversight",
];

export function HomeSections() {
  return (
    <>
      <Section
        eyebrow="Company"
        title="Technology partners for growth, security, and operations"
        description={`${siteConfig.name} brings together enterprise consulting, digital engineering, AI automation, and a focused SaaS portfolio—so strategy and delivery stay connected.`}
      >
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Consulting with delivery bias",
                copy: "Architecture and advisory work that lands in buildable roadmaps, not abstract frameworks.",
              },
              {
                title: "Products with honest positioning",
                copy: "GrowthEdge360, CareerEdge360, CyberEdge360, and OpsEdge360—named clearly, scoped carefully.",
              },
              {
                title: "Enterprise-ready craft",
                copy: "Security, accessibility, operability, and documentation treated as product quality—not afterthoughts.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-electric/40 pl-5">
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-brand">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Products"
        title="Four platforms. One portfolio."
        description="Each product addresses a distinct operating need—growth, careers, cybersecurity, and observability—without recycled brand names or inflated claims."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <FadeIn key={product.slug} delay={index * 0.05}>
              <Link
                href={`/products/${product.slug}`}
                className="group block h-full rounded-xl border border-navy/10 bg-cloud p-6 transition hover:border-electric/40 hover:shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">
                  Product
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-navy group-hover:text-electric">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-brand">
                  {product.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric">
                  View product
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Digital engineering"
        title="Websites and mobile experiences that carry the brand"
        description="From corporate sites to product and mobile experiences, we engineer digital surfaces that are fast, accessible, and ready for real content operations."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: CloudCog,
              title: "Website development",
              href: "/services/website-development",
              copy: "Responsive marketing and product websites with clear information architecture and SEO foundations.",
            },
            {
              icon: Smartphone,
              title: "Mobile app development",
              href: "/services/mobile-app-development",
              copy: "Pragmatic mobile product engineering for customer engagement and operational workflows.",
            },
          ].map((item) => (
            <FadeIn key={item.href}>
              <Link
                href={item.href}
                className="flex h-full flex-col rounded-xl bg-navy p-7 text-cloud transition hover:bg-navy-secondary"
              >
                <item.icon className="h-7 w-7 text-cyan-neon" aria-hidden />
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.copy}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Growth systems"
        title="Automated sales and marketing powered by GrowthEdge360"
        description="We help teams design lead generation, CRM automation, and nurture operations that improve follow-up discipline—without inventing vanity metrics."
      >
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <ul className="space-y-3 text-sm text-slate-brand">
                {[
                  "ICP definition and campaign operating models",
                  "Lead capture, routing, and qualification workflows",
                  "CRM automation that sellers will actually use",
                  "WhatsApp and messaging journeys with human escalation",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <LineChart
                      className="mt-0.5 h-4 w-4 shrink-0 text-electric"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/services/automated-sales-marketing">
                  Sales & marketing services
                </Button>
                <Button href="/products/growthedge360" variant="secondary">
                  GrowthEdge360
                </Button>
              </div>
            </div>
            <div className="rounded-xl border border-navy/10 bg-cloud p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">
                Related services
              </p>
              <div className="mt-4 space-y-3">
                {[
                  ["Lead Generation", "/services/lead-generation"],
                  ["CRM Automation", "/services/crm-automation"],
                  ["WhatsApp Automation", "/services/whatsapp-automation"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between rounded-md bg-white px-4 py-3 text-sm font-medium text-navy shadow-sm transition hover:text-electric"
                  >
                    {label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section
        eyebrow="Enterprise consulting"
        title="Architecture and BFSI-ready technology counsel"
        description="When platforms proliferate, decisions get expensive. We help leaders shape architecture, cloud foundations, and BFSI technology programmes that stay delivery-aware."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Building2,
              title: "Enterprise architecture",
              href: "/services/enterprise-architecture",
            },
            {
              icon: Workflow,
              title: "BFSI consulting",
              href: "/services/bfsi-consulting",
            },
            {
              icon: CloudCog,
              title: "Cloud infrastructure",
              href: "/services/cloud-infrastructure",
            },
          ].map((item) => (
            <FadeIn key={item.href}>
              <Link
                href={item.href}
                className="block rounded-xl border border-navy/10 bg-white p-6 transition hover:border-electric/40"
              >
                <item.icon className="h-6 w-6 text-electric" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Cybersecurity & GRC"
        title="Assessment programmes that end in ownership"
        description="CyberEdge360 and our cybersecurity services help teams organise findings, remediation, and governance conversations—without claiming certifications they have not earned."
      >
        <FadeIn>
          <div className="flex flex-col gap-6 rounded-2xl bg-navy p-8 text-cloud sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex rounded-full bg-white/10 p-3">
                <ShieldCheck className="h-6 w-6 text-cyan-neon" aria-hidden />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                From findings to governance-ready action
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Structure assessments, track vulnerability workflows, and support
                risk forums with evidence-friendly summaries. CyberAudit may
                appear as a potential module within CyberEdge360.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <Button href="/services/cybersecurity-grc" variant="inverse">
                Cybersecurity services
              </Button>
              <Button href="/products/cyberedge360" variant="ghost">
                CyberEdge360
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section
        eyebrow="Observability & AIOps"
        title="See services clearly before asking AI to interpret them"
        description="OpsEdge360 and our observability practice focus on service maps, alert ownership, incident workflows, and AIOps assistance with human oversight."
      >
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="rounded-2xl border border-navy/10 bg-white p-7">
              <Eye className="h-7 w-7 text-electric" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold text-navy">
                Operations that learn
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-brand">
                Correlate signals, route incidents, and improve runbooks—so
                AIOps multiplies clarity instead of noise.
              </p>
              <Button href="/products/opsedge360" className="mt-6">
                Explore OpsEdge360
              </Button>
            </div>
            <ul className="space-y-4">
              {[
                "Infrastructure and application monitoring concepts",
                "ITOM workspaces and escalation context",
                "ITSM-aligned incident collaboration",
                "AIOps assistance patterns, not autonomous theatre",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-navy/10 bg-cloud px-4 py-3 text-sm text-slate-brand"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      <Section
        className="bg-white"
        eyebrow="AI, data & automation"
        title="Automate the work that should be repeatable"
        description="Practical AI automation and data engineering that prioritise process fit, privacy, and human oversight over speculative demos."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              icon: BrainCircuit,
              title: "AI business automation",
              href: "/services/ai-business-automation",
              copy: "Pilot governed automation across operations, support, and knowledge workflows.",
            },
            {
              icon: Workflow,
              title: "Data engineering",
              href: "/services/data-engineering",
              copy: "Reliable pipelines and analytics foundations teams can trust for decisions.",
            },
          ].map((item) => (
            <FadeIn key={item.href}>
              <Link
                href={item.href}
                className="block h-full rounded-xl border border-navy/10 p-6 transition hover:border-electric/40 hover:shadow-soft"
              >
                <item.icon className="h-6 w-6 text-electric" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-brand">
                  {item.copy}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Industries"
        title="Domain context for technology programmes"
        description="We work across BFSI, insurance, retail, healthcare, government, manufacturing, telecom, energy, and IT/ITeS with the same standard: honest scoping and operable delivery."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <FadeIn key={industry.slug} delay={(index % 3) * 0.04}>
              <Link
                href={`/industries/${industry.slug}`}
                className="flex items-center justify-between rounded-lg border border-navy/10 bg-white px-4 py-3 text-sm font-medium text-navy transition hover:border-electric/40 hover:text-electric"
              >
                {industry.title}
                <ArrowRight className="h-4 w-4 opacity-50" />
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/industries" variant="secondary">
            View all industries
          </Button>
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Technology expertise"
        title="Capabilities that show up in delivery"
        description="A focused toolkit spanning modern product engineering, cloud, growth systems, security, observability, and data."
      >
        <div className="flex flex-wrap gap-3">
          {techExpertise.map((item) => (
            <span
              key={item}
              className="rounded-full border border-navy/10 bg-cloud px-4 py-2 text-sm text-navy"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Engagement methodology"
        title="A delivery rhythm teams can trust"
        description="Four stages keep discovery, design, build, and operations connected—so programmes do not stall between slideware and software."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {methodology.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.05}>
              <div className="h-full rounded-xl border border-navy/10 bg-white p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-electric">
                  {item.step}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-brand">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Insights"
        title="Featured perspectives"
        description="Practical notes on growth operations, career guidance ethics, cybersecurity actionability, and observability maturity."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {insights.slice(0, 4).map((insight, index) => (
            <FadeIn key={insight.slug} delay={index * 0.04}>
              <article className="h-full rounded-xl border border-navy/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">
                  {insight.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-navy">
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="hover:text-electric"
                  >
                    {insight.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-brand">
                  {insight.excerpt}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/insights" variant="secondary">
            Browse all insights
          </Button>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-navy py-20 text-cloud">
        <div aria-hidden className="absolute inset-0 bg-hero-glow opacity-80" />
        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-neon">
            Next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready for a focused consultation?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Tell us about your product, growth, security, or operations
            challenge. We will respond with clear next steps—no fabricated case
            studies required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="inverse">
              Book a consultation
            </Button>
            <Button href="/about" variant="ghost">
              About {siteConfig.name}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export function FeatureTile({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cx("rounded-xl border border-navy/10 bg-white p-5", className)}>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-brand">{description}</p>
    </div>
  );
}

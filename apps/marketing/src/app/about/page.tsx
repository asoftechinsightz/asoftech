import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about AsoftechInsightz—enterprise technology consulting, digital engineering, AI automation, and SaaS products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`${siteConfig.name}`}
        description={`${siteConfig.positioning}. ${siteConfig.tagline}`}
        actions={
          <>
            <Button href="/contact" variant="inverse">
              Contact us
            </Button>
            <Button href="/careers" variant="ghost">
              Careers
            </Button>
          </>
        }
      />

      <Section
        eyebrow="Who we are"
        title="A delivery-minded technology partner"
        description="AsoftechInsightz helps organisations design and deliver technology programmes across consulting, digital engineering, automation, cybersecurity, and operations—supported by a focused SaaS portfolio."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Clear positioning",
              copy: "We use exact product names—GrowthEdge360, CareerEdge360, CyberEdge360, and OpsEdge360—and avoid recycled or invented brand claims.",
            },
            {
              title: "Honest content standards",
              copy: "No fabricated logos, testimonials, awards, case studies, or metrics. Progress is described in operational terms.",
            },
            {
              title: "Practical craft",
              copy: "Architecture, security, accessibility, and operability are part of how we ship—not optional extras.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-navy/10 bg-white p-5">
              <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-brand">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow="How we work"
        title="Advisory that stays connected to build and operate"
        description="Clients engage us for focused consulting, product and platform engineering, product enablement, or a blend. Engagements start with discovery and end with operable handover—not orphaned recommendations."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/services">Explore services</Button>
          <Button href="/products" variant="secondary">
            Explore products
          </Button>
        </div>
      </Section>
    </>
  );
}

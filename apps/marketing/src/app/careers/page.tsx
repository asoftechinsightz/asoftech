import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Explore careers at AsoftechInsightz across consulting, engineering, product, and delivery roles.",
  path: "/careers",
});

const openThemes = [
  {
    title: "Digital engineering",
    copy: "Frontend, full-stack, and product engineering for marketing platforms and SaaS modules.",
  },
  {
    title: "Consulting & architecture",
    copy: "Enterprise architecture, BFSI technology advisory, and delivery leadership support.",
  },
  {
    title: "Security & operations",
    copy: "Cybersecurity assessment support, observability, and operational enablement work.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build useful technology with clear standards"
        description="We look for people who write clearly, ship carefully, and prefer evidence over theatre. Open roles are shared as opportunities arise."
        actions={
          <Button
            href={`mailto:${siteConfig.careersEmail}?subject=Career%20enquiry%20-%20AsoftechInsightz`}
            variant="inverse"
          >
            Email careers
          </Button>
        }
      />

      <Section
        eyebrow="How we hire"
        title="Thoughtful applications over volume"
        description="There is no public job board fabricated for this launch. If your experience aligns with our work, introduce yourself with a short note and relevant links."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {openThemes.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-navy/10 bg-white p-5"
            >
              <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-brand">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-brand">
          Send introductions to{" "}
          <a
            className="font-medium text-electric hover:underline"
            href={`mailto:${siteConfig.careersEmail}`}
          >
            {siteConfig.careersEmail}
          </a>
          .
        </p>
      </Section>
    </>
  );
}

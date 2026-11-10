import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { industries } from "@/content/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries",
  description:
    "Industry context for AsoftechInsightz programmes across BFSI, insurance, retail, healthcare, government, manufacturing, telecom, energy, and IT/ITeS.",
  path: "/industries",
});

export default function IndustriesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology programmes with domain awareness"
        description="Every industry page connects challenges to relevant services and products—without invented logos or unverifiable claims."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group rounded-xl border border-navy/10 bg-white p-6 transition hover:border-electric/40 hover:shadow-soft"
            >
              <h2 className="text-xl font-semibold text-navy group-hover:text-electric">
                {industry.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-brand">
                {industry.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric">
                View industry
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

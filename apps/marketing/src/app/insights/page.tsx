import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { insights } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Perspectives from AsoftechInsightz on growth operations, career guidance, cybersecurity, and observability.",
  path: "/insights",
});

export default function InsightsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes for operators and leaders"
        description="Short, original articles on building useful technology programmes without vanity metrics or overclaimed outcomes."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {insights.map((insight) => (
            <article
              key={insight.slug}
              className="rounded-xl border border-navy/10 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">
                {insight.category} · {insight.readingTime}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-navy">
                <Link
                  href={`/insights/${insight.slug}`}
                  className="hover:text-electric"
                >
                  {insight.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-brand">
                {insight.excerpt}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

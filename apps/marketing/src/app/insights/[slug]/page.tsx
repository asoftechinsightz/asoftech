import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getInsight, insightSlugs } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return insightSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const insight = getInsight(slug);
    if (!insight) return {};
    return buildMetadata({
      title: insight.title,
      description: insight.excerpt,
      path: `/insights/${insight.slug}`,
    });
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${insight.category} · ${insight.readingTime}`}
        title={insight.title}
        description={insight.excerpt}
        compact
      />
      <Section>
        <article className="mx-auto max-w-3xl space-y-5">
          <p className="text-sm text-slate-brand">
            Published {insight.publishedAt}
          </p>
          {insight.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap gap-3 pt-6">
            <Button href="/contact">Talk with us</Button>
            <Button href="/insights" variant="secondary">
              Back to insights
            </Button>
          </div>
          <p className="pt-4 text-sm text-slate-brand">
            Looking for services instead?{" "}
            <Link href="/services" className="text-electric hover:underline">
              Browse the catalogue
            </Link>
            .
          </p>
        </article>
      </Section>
    </>
  );
}

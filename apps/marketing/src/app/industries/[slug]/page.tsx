import { notFound } from "next/navigation";
import { IndustryPage } from "@/components/industries/IndustryPage";
import { getIndustry, industrySlugs } from "@/content/industries";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const industry = getIndustry(slug);
    if (!industry) return {};
    return buildMetadata({
      title: `${industry.title} industry`,
      description: industry.summary,
      path: `/industries/${industry.slug}`,
    });
  });
}

export default async function IndustryRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}

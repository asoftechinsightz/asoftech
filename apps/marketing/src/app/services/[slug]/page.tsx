import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/ServicePage";
import { getService, serviceSlugs } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const service = getService(slug);
    if (!service) return {};
    return buildMetadata({
      title: service.title,
      description: service.summary,
      path: `/services/${service.slug}`,
    });
  });
}

export default async function ServiceRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}

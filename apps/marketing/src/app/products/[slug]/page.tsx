import { notFound } from "next/navigation";
import { ProductPage } from "@/components/products/ProductPage";
import { getProduct, productSlugs } from "@/content/products";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const product = getProduct(slug);
    if (!product) return {};
    return buildMetadata({
      title: product.name,
      description: product.summary,
      path: `/products/${product.slug}`,
    });
  });
}

export default async function ProductRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { products } from "@/content/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Explore GrowthEdge360, CareerEdge360, CyberEdge360, and OpsEdge360 from AsoftechInsightz.",
  path: "/products",
});

export default function ProductsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A focused SaaS portfolio"
        description="Four products. Exact names. Clear jobs to be done across growth, careers, cybersecurity, and operations."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-2xl border border-navy/10 bg-white p-7 transition hover:border-electric/40 hover:shadow-soft"
            >
              <h2 className="text-2xl font-semibold text-navy group-hover:text-electric">
                {product.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-brand">
                {product.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric">
                View product page
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

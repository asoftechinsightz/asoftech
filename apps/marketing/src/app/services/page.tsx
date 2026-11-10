import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { serviceCategories, services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Browse AsoftechInsightz services across digital engineering, automated sales and marketing, enterprise consulting, cybersecurity, observability, AI/data, and career coaching.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Consulting and delivery across the stack"
        description="From websites and growth automation to architecture, cybersecurity, observability, and coaching programmes—each service page is a real engagement entry point."
      />
      {serviceCategories.map((category) => {
        const items = services.filter((service) => service.category === category.id);
        return (
          <Section
            key={category.id}
            className={category.id === "digital" ? undefined : "bg-white even:bg-transparent"}
            eyebrow={category.title}
            title={category.title}
            description={category.description}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {items.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-xl border border-navy/10 bg-cloud p-5 transition hover:border-electric/40"
                >
                  <h3 className="text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-brand">
                    {service.summary}
                  </p>
                </Link>
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}

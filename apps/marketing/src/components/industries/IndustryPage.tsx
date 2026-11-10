import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import type { Industry } from "@/content/industries";

export function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.title}
        description={industry.summary}
        actions={
          <>
            <Button href="/contact" variant="inverse">
              Talk industry context
            </Button>
            <Button href="/industries" variant="ghost">
              All industries
            </Button>
          </>
        }
      />

      <Section eyebrow="Challenges" title="Common programme pressures">
        <ul className="grid gap-3 md:grid-cols-2">
          {industry.challenges.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-slate-brand"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Focus areas"
        title="Where we typically contribute"
      >
        <ul className="space-y-3">
          {industry.focusAreas.map((item) => (
            <li key={item} className="text-sm text-slate-brand">
              • {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Relevant offerings" title="Services and products to explore">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-navy">Services</h3>
            <ul className="mt-4 space-y-2">
              {industry.relevantServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-electric hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy">Products</h3>
            <ul className="mt-4 space-y-2">
              {industry.relevantProducts.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-electric hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <Button href="/contact">Discuss your context</Button>
        </div>
      </Section>
    </>
  );
}

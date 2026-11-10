import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import type { Service } from "@/content/services";

export function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        actions={
          <>
            <Button href="/contact" variant="inverse">
              Discuss this service
            </Button>
            <Button href="/services" variant="ghost">
              All services
            </Button>
          </>
        }
      />

      <Section
        eyebrow="Outcomes"
        title="What a successful engagement looks like"
        description="We define success in operational terms—clarity, delivery quality, and handover readiness—not invented performance claims."
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {service.outcomes.map((item) => (
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
        eyebrow="Capabilities"
        title="How we help"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {service.capabilities.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-navy/10 bg-cloud px-4 py-4 text-sm text-slate-brand"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Fit" title="Who this service is for">
        <ul className="space-y-3">
          {service.whoFor.map((item) => (
            <li key={item} className="text-sm text-slate-brand">
              • {item}
            </li>
          ))}
        </ul>
        {service.relatedHref && service.relatedLabel ? (
          <p className="mt-8 text-sm text-slate-brand">
            Related product:{" "}
            <Link
              href={service.relatedHref}
              className="font-semibold text-electric hover:underline"
            >
              {service.relatedLabel}
            </Link>
          </p>
        ) : null}
        <div className="mt-8">
          <Button href="/contact">Start a conversation</Button>
        </div>
      </Section>
    </>
  );
}

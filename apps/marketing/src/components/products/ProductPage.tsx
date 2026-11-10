import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import type { Product } from "@/content/products";
import { ContactForm } from "@/components/forms/ContactForm";

export function ProductPage({ product }: { product: Product }) {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title={product.name}
        description={product.tagline}
        actions={
          <>
            <Button href="/contact" variant="inverse">
              Request a demo conversation
            </Button>
            <Button href="/products" variant="ghost">
              All products
            </Button>
          </>
        }
      />

      <Section
        eyebrow="Overview"
        title={`Introducing ${product.name}`}
        description={product.summary}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-navy/10 bg-white p-6">
            <h3 className="text-lg font-semibold text-navy">The problem</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-brand">
              {product.problem}
            </p>
          </div>
          <div className="rounded-xl border border-navy/10 bg-white p-6">
            <h3 className="text-lg font-semibold text-navy">Who it is for</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-brand">
              {product.audience.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Features"
        title="Capabilities designed for operators"
        description="Feature language describes intended product direction. Detailed functionality is confirmed during discovery and rollout planning."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-navy/10 bg-cloud p-5"
            >
              <h3 className="text-lg font-semibold text-navy">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-brand">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Benefits"
        title="Why teams consider this product"
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {product.benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-lg border border-navy/10 bg-white px-4 py-3 text-sm text-slate-brand"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Workflow"
        title="How engagement typically progresses"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {product.workflow.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-navy/10 bg-cloud p-5"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-electric">
                {step.step}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-brand">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Conceptual mockups"
        title="Interface concepts for orientation"
        description="These labelled conceptual mockups illustrate intended product surfaces. They are not screenshots of a production system and do not imply completed feature parity."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {product.mockups.map((mockup) => (
            <figure
              key={mockup.title}
              className="overflow-hidden rounded-xl border border-navy/10 bg-navy text-cloud"
            >
              <div
                aria-hidden
                className="relative h-40 bg-gradient-to-br from-electric/40 via-navy-secondary to-cyan-neon/20"
              >
                <div className="absolute inset-4 rounded-lg border border-white/15 bg-white/5 p-3">
                  <div className="h-2 w-1/3 rounded bg-white/30" />
                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-full rounded bg-white/15" />
                    <div className="h-2 w-5/6 rounded bg-white/15" />
                    <div className="h-2 w-2/3 rounded bg-white/15" />
                  </div>
                </div>
              </div>
              <figcaption className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-neon">
                  {mockup.label}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {mockup.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {mockup.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Technical capabilities"
        title="Engineering and operating considerations"
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {product.technical.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-navy/10 bg-cloud px-4 py-3 text-sm text-slate-brand"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="FAQ" title={`Questions about ${product.name}`}>
        <div className="space-y-4">
          {product.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-navy/10 bg-white p-5"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-navy marker:content-none">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="text-electric transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-brand">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Next step"
        title={`Talk with us about ${product.name}`}
        description="Share your context and we will follow up with a conversation—demo-oriented where useful, advisory where more appropriate."
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm leading-relaxed text-slate-brand">
              Prefer email? Write to{" "}
              <a
                className="font-medium text-electric underline-offset-2 hover:underline"
                href="mailto:contact@asoftechinsightz.com"
              >
                contact@asoftechinsightz.com
              </a>
              . You can also browse{" "}
              <Link href="/services" className="text-electric hover:underline">
                related services
              </Link>
              .
            </p>
            {product.slug === "careeredge360" ? (
              <p className="mt-4 rounded-lg border border-navy/10 bg-cloud p-4 text-sm text-slate-brand">
                CareerEdge360 does not guarantee jobs, placements, admissions,
                or salary outcomes. Where minors participate, privacy and
                guardian consent requirements apply.
              </p>
            ) : null}
          </div>
          <div className="rounded-2xl border border-navy/10 bg-cloud p-6">
            <ContactForm defaultInterest={product.slug} />
          </div>
        </div>
      </Section>
    </>
  );
}

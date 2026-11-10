import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact AsoftechInsightz for product demos, consulting conversations, partnerships, or careers.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss your next programme"
        description="Share a concise brief and we will follow up. For local and development environments without a webhook configured, submissions are validated and logged server-side."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-2xl font-semibold text-navy">Reach the team</h2>
            <dl className="mt-6 space-y-4 text-sm text-slate-brand">
              <div>
                <dt className="font-semibold text-navy">General enquiries</dt>
                <dd>
                  <a
                    className="text-electric hover:underline"
                    href={`mailto:${siteConfig.contactEmail}`}
                  >
                    {siteConfig.contactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Careers</dt>
                <dd>
                  <a
                    className="text-electric hover:underline"
                    href={`mailto:${siteConfig.careersEmail}`}
                  >
                    {siteConfig.careersEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">What to include</dt>
                <dd className="mt-1 leading-relaxed">
                  Organisation context, the product or service area, timeline
                  pressure if any, and the decision you are trying to make.
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
